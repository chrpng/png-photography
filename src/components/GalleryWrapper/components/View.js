import React from 'react'
import Img from 'gatsby-image'

const View = ({ data }) => {
	console.log(data)
	return (
		<div >
			<div style={{ color: `transparent` }}>hold</div>
			<Img fluid={data} />
		</div>
	)
}
 
export default View