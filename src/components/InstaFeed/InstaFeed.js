import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Gallery } from '../GalleryWrapper'

const InstaFeed = () => {

	// const data = useStaticQuery(graphql`
	// 	query InstagramQuery {
	// 		allInstaNode(sort: {fields: timestamp, order: DESC}, limit: 12) {
	// 			edges {
	// 				node {
	// 					caption
	// 					id
	// 					localFile {
	// 						childImageSharp {
	// 							gatsbyImageData(
	// 								placeholder: BLURRED
	// 								webpOptions: {quality: 80}
	// 							)
	// 						}
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// `)

	// const imageFiles = data.allInstaNode.edges.map((edge) => {
	// 	return { ...edge.node.localFile, caption: edge.node.caption }
	// })

	return (
		<section id="instagram-feed">
			<h2>Feed</h2>

			{/* <Gallery imageObjs={imageFiles} /> */}
		</section>
	)
}
 
export default InstaFeed