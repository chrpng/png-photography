import React from "react"
import { graphql } from "gatsby"

import sanitizeHtml from 'sanitize-html'

const Post = ({ data: { graphCmsPage } }) => {
  return (
    <React.Fragment>
      <h1>{graphCmsPage.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(graphCmsPage.content.html) }} />
      {/* <div>{data.description.text}</div> */}
    </React.Fragment>
  )
}

export default Post
export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    graphCmsPage(slug: {eq: $slug}) {
			title
			content {
				html
			}
		}
  }
`