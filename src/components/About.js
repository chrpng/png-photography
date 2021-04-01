import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import sanitizeHtml from 'sanitize-html'

const About = () => {
	const data = useStaticQuery(graphql`
		query AboutQuery {
			graphCmsSection(slug: {eq: "about"}) {
				title
				content {
					html
				}
			}
		}
	`)
	return (
		<section id="about">
			<header className="major">
				<h2>
					{data.graphCmsSection.title}
				</h2>
			</header>
			<div dangerouslySetInnerHTML={{ __html: sanitizeHtml(data.graphCmsSection.content.html) }}/>
		</section>
	)
}
 
export default About