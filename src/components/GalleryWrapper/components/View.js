import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const View = ({ innerProps, data }) => {
	const image = getImage(data)
	return (
		<div { ...innerProps } style={{ textAlign: `center`, margin: `0 auto`, maxHeight: `100vh` }}>
			<GatsbyImage image={image} alt="" imgStyle={{ objectFit: 'contain', maxHeight: `100vh`, margin: `0 auto` }}/>
		</div>
	)
}
 
export default View