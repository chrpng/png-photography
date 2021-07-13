import React, { useCallback } from 'react'
// import PropTypes from 'prop-types'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const GalleryItem = ({ position, toggleLightbox, imageObj, margin }) => {
	const image = getImage(imageObj)
	const imgStyle = { margin: margin, height: imageObj.height, width: imageObj.width }

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
		<div
			role="link" tabIndex="0"
			onClick={onClick} onKeyDown={onKeyDown}
			style={imgStyle}
		>
			<GatsbyImage image={image} alt="gallery-thumbnail" />
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