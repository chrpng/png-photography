import React, { useState, useCallback } from 'react'
// import PropTypes from 'prop-types'
import Carousel, { Modal, ModalGateway } from 'react-images'
import Gallery from 'react-photo-gallery'
import GalleryItem from './GalleryItem'
import { photos } from './photos'

import View from './View'

const GalleryLightbox = ({ imageObjs }) => {
	const isOverflowing = imageObjs.length > 12
	const [isShowingAll, setIsShowingAll] = useState(false)
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const toggleLightbox = useCallback(selectedIndex => {
    setLightboxIsOpen(!lightboxIsOpen)
    setSelectedIndex(selectedIndex)
  }, [lightboxIsOpen])

	const toggleShowingAll = () => {
		setIsShowingAll(!isShowingAll)
	}

	const getImageObjs = () => {
		if(isShowingAll) {
			return imageObjs
		} else {
			return imageObjs.slice(0, 12)
		}
	}

	const FooterStyleFn = (StyleObj, State) => {
		return {
			textShadow: `0 0 12px black, 0 0 16px black`,
			padding: `8px`
		}
	}

	const imageRenderer = useCallback(({ index, photo, margin }) => {
		return <GalleryItem
			key={index}
			position={index}
			imageObj={photo}
			toggleLightbox={toggleLightbox}
			margin={margin}
		/>
	})

  return (
		<div>
      {/* <div className="masonry-with-columns">
        {getImageObjs().map((imageObj, i) => {
					return (
						<GalleryItem
							key={i}
							imageObj={imageObj}
							position={i}
							toggleLightbox={toggleLightbox}
						/>
					); 
        })}
			</div> */}
			<Gallery photos={getImageObjs()} renderImage={imageRenderer} />
			{isOverflowing && <button className="button mt-2" onClick={toggleShowingAll}>
				{
					isShowingAll ? 'Show Less' : 'Show More'
				}
			</button>}
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

GalleryLightbox.displayName = 'GalleryLightbox'
// Gallery.propTypes = {
//   images: PropTypes.array,
// }

export default GalleryLightbox
