require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter - Strata by HTML5 UP',
    author: 'Hunter Chang',
    description: 'A Gatsby.js Starter based on Strata by HTML5 UP',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
		`gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
		{
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `png-photography`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
        schemas: {
					post: require("./src/schemas/page.json"),
					gallery: require("./src/schemas/gallery.json"),
					sidebar_card: require("./src/schemas/sidebar_card.json"),
					section: require("./src/schemas/section.json"),
				},
      },
    },
  ],
}
