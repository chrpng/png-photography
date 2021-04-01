import React from 'react'

import Footer from './Footer'
// import avatar from '../assets/images/avatar.jpg'
import Nav from './SideBar/Nav'

import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import sanitizeHtml from 'sanitize-html'

const sections = [
	{ id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'instagram-feed', name: 'Instagram Feed', icon: 'fa-instagram' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const Sidebar = () => {
	const data = useStaticQuery(graphql`
		query SidebarCardQuery {
			graphCmsSidebarCard {
				avatar {
					gatsbyImageData(width: 200, height: 200)
				}
				bio {
					html
				}
			}
		}
	`)

	return (
		<header id="header">
			<div className="inner">
				<a href="/" className="image avatar">
					{/* <Img fixed={data.prismicSidebarCard.data.avatar.fixed} /> */}
					<GatsbyImage image={data.graphCmsSidebarCard.avatar.gatsbyImageData} alt="" />
					{/* {!(data.prismicSidebarCard) && <img src={data.prismicSidebarCard.data.avatar.url} alt={data.prismicSidebarCard.data.avatar.alt} />} */}
				</a>
				<h1>
					<div dangerouslySetInnerHTML={{ __html: sanitizeHtml(data.graphCmsSidebarCard.bio.html) }}/>
				</h1>
				<Nav sections={sections} />
			</div>
			<Footer />
		</header>
	)
}

export default Sidebar
