import React, { useState, useCallback } from 'react'
// import PropTypes from 'prop-types'
import Carousel, { Modal, ModalGateway } from 'react-images'
import Gallery from 'react-photo-gallery'
import GalleryItem from './GalleryItem'

import View from './View'

const GalleryLightbox = ({ imageObjs }) => {
	const isOverflowing = imageObjs.length > 12
	const [isShowingAll, setIsShowingAll] = useState(false)
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

	const openLightbox = useCallback((event, { index }) => {
    setSelectedIndex(index);
    setLightboxIsOpen(true);
  }, []);

	const closeLightbox = () => {
		setSelectedIndex(0);
		setLightboxIsOpen(false);
	}

	const toggleShowingAll = () => {
		setIsShowingAll(!isShowingAll)
	}

	const getThumbnailObjs = () => {
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

  return (
		<div>
			<Gallery 
				photos={getThumbnailObjs()}
				renderImage={GalleryItem}
				onClick={openLightbox}
				targetRowHeight={300}
			/>
			{isOverflowing && <button className="button mt-2" onClick={toggleShowingAll}>
				{
					isShowingAll ? 'Show Less' : 'Show More'
				}
			</button>}
			<ModalGateway>
				{lightboxIsOpen && (
					<Modal onClose={closeLightbox}>
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
