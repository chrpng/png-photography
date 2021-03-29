import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import Carousel, { Modal, ModalGateway } from 'react-images'
import GalleryItem from './GalleryItem'
import { DEFAULT_IMAGES } from '../constants/defaultImages'

import { useStaticQuery, graphql } from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image"

import Img from 'gatsby-image'

const Gallery = ({ imageItems }) => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const toggleLightbox = useCallback(selectedIndex => {
    setLightboxIsOpen(!lightboxIsOpen)
    setSelectedIndex(selectedIndex)
  }, [lightboxIsOpen])

	const imageObjectsForCarousel = imageItems.map((obj) => {
		return { 
			source: obj.gallery_image.url
		}
	})

	// console.log(imageObjectsForCarousel)

  return (
    <div>
      {imageItems && (<div className="masonry-with-columns">
        {imageItems.map((obj, i) => {
					return (
						<GalleryItem
							key={i}
							thumbnail={obj.gallery_image.fluid}
							position={i}
							toggleLightbox={toggleLightbox}
						/>
					); 
        })}
        </div>
      )}
      <ModalGateway>
        {lightboxIsOpen && (
          <Modal onClose={toggleLightbox}>
            <Carousel currentIndex={selectedIndex} views={imageObjectsForCarousel} />
          </Modal>
        )}
      </ModalGateway>
    </div>
  )
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  images: PropTypes.array,
}

export default Gallery
