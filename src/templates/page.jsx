import React from "react"
import { graphql } from "gatsby"
const Post = ({ data: { prismicPage } }) => {
  const { data } = prismicPage
  return (
    <React.Fragment>
      <h1>{data.title.text}</h1>
      {/* <div dangerouslySetInnerHTML={{ __html: data.description.html }} /> */}
      <div>{data.description.text}</div>
    </React.Fragment>
  )
}
export default Post
export const pageQuery = graphql`
  query PageBySlug($uid: String!) {
    prismicPage(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        description {
          text
        }
      }
    }
  }
`