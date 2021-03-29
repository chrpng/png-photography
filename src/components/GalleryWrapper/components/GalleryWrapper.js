import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import Carousel, { Modal, ModalGateway } from 'react-images'
import GalleryItem from './GalleryItem'
import Gallery from './Gallery'
import { DEFAULT_IMAGES } from '../constants/defaultImages'

import { useStaticQuery, graphql } from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image"

import Img from 'gatsby-image'

const GalleryWrapper = () => {
	const data = useStaticQuery(ALL_IMAGES)

	// const [index, setIndex] = useState(0)
	const [imageItems, setImageItems] = useState(data.galleries.edges[0].node.items)

	// const imageItems = data.galleries.edges[0].node.items
	const titles = data.galleries.edges.map((gallery) => (gallery.node.primary.name_of_the_gallery.text))

	const handleGalleryClick = (title) => {
		const gallerySelection = data.galleries.edges.find((gallery) => {
			return gallery.node.primary.name_of_the_gallery.text === title
		})

		setImageItems(gallerySelection.node.items)
	}

	const handleAllGalleryClick = () => {
		const allGalleryItems = data.galleries.edges.reduce((galleryItems, gallerySelection) => {
			return galleryItems.concat(gallerySelection.node.items)
		}, [])

		setImageItems(allGalleryItems)
	}
	
  return (
    <section id="portfolio">
			<h2>Portfolio</h2>
        
			<ul className="actions">
				{titles.filter((title) => title !== 'Misc').map((title) => {
					return (
						<li>
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

			<Gallery imageItems={imageItems} />
		</section>
  )
}

const ALL_IMAGES = graphql`
	query HeaderQuery {
		galleries: allPrismicGalleryBodyImageGallery {
			edges {
				node {
					primary {
						name_of_the_gallery {
							text
						}
					}
					items {
						gallery_image {
							fluid {
								...GatsbyPrismicImageFluid
							}
							url
						}
					}
				}
			}
		}
	}
`

export default GalleryWrapper
