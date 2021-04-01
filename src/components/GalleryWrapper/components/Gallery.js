import React, { useState, useCallback } from 'react'
// import PropTypes from 'prop-types'
import Carousel, { Modal, ModalGateway } from 'react-images'
import GalleryItem from './GalleryItem'

import View from './View'

const Gallery = ({ imageObjs }) => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const toggleLightbox = useCallback(selectedIndex => {
    setLightboxIsOpen(!lightboxIsOpen)
    setSelectedIndex(selectedIndex)
  }, [lightboxIsOpen])


	const FooterStyleFn = (StyleObj, State) => {
		return {
			textShadow: `0 0 12px black, 0 0 16px black`,
			padding: `8px`
		}
	}

  return (
		<div>
      <div className="masonry-with-columns">
        {imageObjs.map((imageObj, i) => {
					return (
						<GalleryItem
							key={i}
							imageObj={imageObj}
							position={i}
							toggleLightbox={toggleLightbox}
						/>
					); 
        })}
			</div>
      <ModalGateway>
        {lightboxIsOpen && (
          <Modal onClose={toggleLightbox}>
            <Carousel
							currentIndex={selectedIndex}
							views={imageObjs}
							components={{ View }}
							styles={{ footerCaption: FooterStyleFn }}/>
          </Modal>
        )}
      </ModalGateway>
    </div>
	)
}

Gallery.displayName = 'Gallery'
// Gallery.propTypes = {
//   images: PropTypes.array,
// }

export default Gallery
