/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pages = await graphql(`
    {
			allGraphCmsPage {
				edges {
					node {
						slug
					}
				}
			}
    }
  `)
  const template = path.resolve("src/templates/page.jsx")
  pages.data.allGraphCmsPage.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}`,
      component: template,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}