import React, { useCallback } from 'react'
// import PropTypes from 'prop-types'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const GalleryItem = ({ imageObj, position, toggleLightbox }) => {
	const image = getImage(imageObj)
	// console.log('item')
	// console.log(imageObj.src)
	const onClick = useCallback((e) => {
		e.preventDefault()
		toggleLightbox(position)
	}, [position, toggleLightbox]);

	const onKeyDown = (e) => {
		if (e.key === "Enter") {
			onClick(e)
		}
	}

	return (
		<div role="link" tabIndex="0" onClick={onClick}>
			<GatsbyImage image={image} alt="gallery-thumbnail" />
			{/* <img src={imageObj.src} /> */}
			{/* <div>test</div> */}
		</div>
	)
};

// GalleryItem.displayName = 'GalleryItem'
// GalleryItem.propTypes = {
// 	imageObj: PropTypes.object,
// 	position: PropTypes.number,
// 	toggleLightbox: PropTypes.func,
// }

export default GalleryItem