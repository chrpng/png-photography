import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import sanitizeHtml from 'sanitize-html'

const About = () => {
	const data = useStaticQuery(graphql`
		query AboutQuery {
			prismicSection(uid: {eq: "about"}) {
				data {
					content {
						html
					}
					title {
						text
					}
				}
			}
		}
	`)
	return (
		<section id="about">
			<header className="major">
				<h2>
					{data.prismicSection.data.title.text}
				</h2>
			</header>
			<div dangerouslySetInnerHTML={{ __html: sanitizeHtml(data.prismicSection.data.content.html) }}/>
		</section>
	)
}
 
export default About