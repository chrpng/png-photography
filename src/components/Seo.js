import React from 'react'
import Helmet from 'react-helmet'

import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description }) => {
	const title = `Png Photography`
	const lang = `en`

	const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
      }
    `
  )

	const metaDescription = description || site.siteMetadata.description

	return (
		<Helmet
			htmlAttributes={{ lang }}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					name: "keywords",
					content: site.siteMetadata.keywords.join(","),
				},
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
			]}
		/>
	);
}
 
export default Seo;