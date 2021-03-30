import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'
import Nav from './SideBar/Nav'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import sanitizeHtml from 'sanitize-html'

const sections = [
  { id: 'instagram-feed', name: 'Feed', icon: 'fa-instagram' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const Sidebar = () => {
	const data = useStaticQuery(graphql`
		query SidebarCardQuery {
			prismicSidebarCard {
				data {
					avatar {
						url
						alt
						fixed(imgixParams: {fit: "facearea", facepad: 4}, width: 100, height: 100) {
							...GatsbyPrismicImageFixed
						}
					}
					summary {
						html
					}
				}
			}
		}
	`)

	return (
		<header id="header">
			<div className="inner">
				<a href="#" className="image avatar">
					<Img fixed={data.prismicSidebarCard.data.avatar.fixed} />
					{!(data.prismicSidebarCard) && <img src={data.prismicSidebarCard.data.avatar.url} alt={data.prismicSidebarCard.data.avatar.alt} />}
				</a>
				<h1>
					<div dangerouslySetInnerHTML={{ __html: sanitizeHtml(data.prismicSidebarCard.data.summary.html) }}/>
				</h1>
				<Nav sections={sections} />
			</div>
			<Footer />
		</header>
	)
}

export default Sidebar
