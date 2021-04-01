import React, { useState } from 'react'
import Gallery from './Gallery'

import { useStaticQuery, graphql } from "gatsby"

// import { generateImageData } from "gatsby-plugin-image"

const GalleryWrapper = () => {
	const data = useStaticQuery(ALL_GRAPHCMS_IMAGES)

	// const [currentGallery, setCurrentGallery] = useState(data.galleries.nodes[0].title)
	// const [imageObjs, setImageObjs] = useState(data.galleries.nodes[0].images)
	const [imageObjs, setImageObjs] = useState(data.galleries.nodes[0].images)
	const titles = data.galleries.nodes.map(node => node.title)

	const handleGalleryClick = (title) => {
		// const selectedNode = data.galleries.nodes.find((node) => {
		// 	return node.title === title
		// })
		// switch(title) {
		// 	case "Portrait":
		// 		// setImageObjs(data.portrait.images)
		// 		setImageObjs(data.galleries.nodes.find(node => node.title === "Portrait").images)
		// 		break;
		// 	case "Events":
		// 		setImageObjs(data.galleries.nodes.find(node => node.title === "Events").images)
		// 		break;
		// 	default:
		// 		setImageObjs(data.portrait.images)
		// }
		const selectedGallery = data.galleries.nodes.find(node => node.title === title)
		console.log(selectedGallery)
		setImageObjs(data.galleries.nodes.find(node => node.title === title).images)
		// console.log(selectedNode.title)
		// console.log(selectedNode.images)
		// setImageObjs(selectedNode.images)
		// setCurrentGallery(selectedNode.title)
	}

	// const imageObjs = (() => {
	// 	const obj = data.galleries.nodes.find(node => node.title === currentGallery).images
	// 	console.log(obj)
	// 	return obj
	// })()
	const handleAllGalleryClick = () => {
		const allGalleryImages = data.galleries.nodes.reduce((accumGalleryImages, currentGalleryImages) => {
			return accumGalleryImages.concat(currentGalleryImages.images)
		}, [])

		console.log(allGalleryImages)
		// console.log(allGalleryImages.images)
		setImageObjs(allGalleryImages)
		// setImageObjs(data.galleries.nodes[0].images)
	}
	
  return (
    <section id="portfolio">
			<h2>Portfolio</h2>
        
			<ul className="actions">
				{titles.filter((title) => title !== 'Misc').map((title, i) => {
					return (
						<li key={i}>
							<button className="button" onClick={() => handleGalleryClick(title)}>
								{title}
							</button>
						</li>
					)
				})}
				<li>
					<button className="button" onClick={handleAllGalleryClick}>
						All
					</button>
				</li>
			</ul>

			<Gallery imageObjs={imageObjs} />
		</section>
  )
}

const ALL_GRAPHCMS_IMAGES = graphql`
	query GalleryQuery {
		galleries: allGraphCmsGallery {
			nodes {
				title
				id
				images {
					id
					src: url
					gatsbyImageData
				}
			}
		}
		portrait: graphCmsGallery(title: {eq: "Portrait"}) {
			title
			id
			images {
				id
				src: url
				gatsbyImageData
			}
		}
		events: graphCmsGallery(title: {eq: "Events"}) {
			title
			id
			images {
				id
				src: url
				gatsbyImageData
			}
		}
	}
`

const ALL_GRAPHCMS_QUERY_IMAGES = graphql`
	query GalleryQuery {
		galleries: allGraphCmsGallery {
			nodes {
				title
				id
				images {
					id
					src: url
					gatsbyImageData
				}
			}
		}
		portrait: graphCmsGallery(title: {eq: "Portrait"}) {
			title
			id
			images {
				id
				src: url
				gatsbyImageData
			}
		}
		events: graphCmsGallery(title: {eq: "Events"}) {
			title
			id
			images {
				id
				src: url
				gatsbyImageData
			}
		}
	}
`

export default GalleryWrapper