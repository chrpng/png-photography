import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const View = ({ innerProps, data }) => {
	const image = getImage(data)
	return (
		<div { ...innerProps } style={{ textAlign: `center`, margin: `0 auto` }}>
			<GatsbyImage image={image} alt="" />
		</div>
	)
}
 
export default View