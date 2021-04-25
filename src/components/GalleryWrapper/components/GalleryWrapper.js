import React, { useState } from 'react'
import Gallery from './Gallery'

import { useStaticQuery, graphql } from "gatsby"

// import { generateImageData } from "gatsby-plugin-image"

const GalleryWrapper = () => {
	const data = useStaticQuery(ALL_GRAPHCMS_IMAGES)

	const [imageObjs, setImageObjs] = useState(data.galleries.nodes[0].images)
	const titles = data.galleries.nodes.map(node => node.title)

	const handleGalleryClick = (title) => {
		const selectedGallery = data.galleries.nodes.find(node => node.title === title)
		setImageObjs(selectedGallery.images)
	}

	const handleAllGalleryClick = () => {
		const allGalleryImages = data.galleries.nodes.reduce((accumGalleryImages, currentGalleryImages) => {
			return accumGalleryImages.concat(currentGalleryImages.images)
		}, [])

		setImageObjs(allGalleryImages)
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
					gatsbyImageData(placeholder: BLURRED, quality: 80)
				}
			}
		}
	}
`

export default GalleryWrapper