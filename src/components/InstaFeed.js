import React, { useState, useCallback } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Carousel, { Modal, ModalGateway } from 'react-images'
import View from './InstaFeedView'

const InstaFeed = () => {
	const [lightboxIsOpen, setLightboxIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const toggleLightbox = useCallback(selectedIndex => {
    setLightboxIsOpen(!lightboxIsOpen)
    setSelectedIndex(selectedIndex)
  }, [lightboxIsOpen])

	const data = useStaticQuery(graphql`
		query InstagramQuery {
			allInstaNode(sort: {fields: timestamp, order: DESC}, limit: 12) {
				edges {
					node {
						caption
						id
						localFile {
							childImageSharp {
								gatsbyImageData
							}
						}
					}
				}
			}
		}
	`)

	const images = data.allInstaNode.edges.map((edge) => {
		return getImage(edge.node.localFile)
	})

	return (
		<section id="instagram-feed">
			<h2>Feed</h2>

			{images && (<div className="instagram-grid">
        {images.map((image, i) => {
					return (
						<GatsbyImage key={i} image={image} alt="" />
					); 
        })}
        </div>
      )}
      <ModalGateway>
        {lightboxIsOpen && (
          <Modal onClose={toggleLightbox}>
            <Carousel currentIndex={selectedIndex} components={{ View }} views={images} />
          </Modal>
        )}
      </ModalGateway>
		</section>
	)
}
 
export default InstaFeed