import React from 'react'
// import PropTypes from 'prop-types'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const imgWithClick = { cursor: 'pointer' }

const GalleryItem = ({ index, onClick, photo, margin, direction, top, left, key }) => {
	const image = getImage(photo) // photo is gatsbyImageData
	
	const imgStyle = { margin: margin, display: 'block', width: photo.width, height: photo.height }

	// const handleClick = useCallback((e) => {
	// 	e.preventDefault()
	// 	toggleLightbox(index)
	// }, [index, toggleLightbox]);

	const handleClick = (_e) => {
		console.log(image)
		onClick(_e, { index })
	}

	const onKeyDown = (e) => {
		if (e.key === "Enter") {
			onClick(e)
		}
	}

	return (
		<div
			role="link"
			tabIndex="0"
      key={key}
      style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}
      onClick={onClick ? handleClick : null}
			onKeyDown={onKeyDown}
		>
			<GatsbyImage
				image={image}
				alt="gallery-thumbnail"
				sizes="(min-width: 1280px) 400px, 200px"
			/>
		</div>
	)
};

// GalleryItem.displayName = 'GalleryItem'
// GalleryItem.propTypes = {
// 	photo: PropTypes.object,
// 	index: PropTypes.number,
// 	toggleLightbox: PropTypes.func,
// }

export default GalleryItem