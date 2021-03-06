import React, { useState } from 'react'
import GalleryLightbox from './GalleryLightbox'

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

			<GalleryLightbox imageObjs={imageObjs} />
		</section>
  )
}

const ALL_GRAPHCMS_IMAGES = graphql`
	query GalleryQuery {
		galleries: allGraphCmsGallery(sort: {fields: title, order: DESC}) {
			nodes {
				title
				id
				images {
					id
					src: url
					gatsbyImageData(
						placeholder: DOMINANT_COLOR
						quality: 50
						outputPixelDensities: [0.0625, 0.125]
						)
						width
						height
						fileName
				}
			}
		}
	}
`

export default GalleryWrapper