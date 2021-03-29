import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import Img from 'gatsby-image'

const GalleryItem = ({ thumbnail, position, toggleLightbox }) => {

    const onClick = useCallback((e) => {
			e.preventDefault()
			console.log("here")
      toggleLightbox(position)
    }, [position, toggleLightbox]);

    return (
			<div onClick={onClick}>
				<Img fluid={thumbnail}/>
			</div>
		)
};

GalleryItem.displayName = 'GalleryItem2'
GalleryItem.propTypes = {
  // id: PropTypes.string.isRequired,
  // source: PropTypes.string.isRequired,
  // thumbnail: PropTypes.string.isRequired,
  // caption: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
  // position: PropTypes.string.isRequired,
  // toggleLightbox: PropTypes.func.isRequired
}

export default GalleryItem