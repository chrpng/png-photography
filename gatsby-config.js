require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Png.Photography',
    author: 'Victoria Png',
    description: `Boston area photographer capturing events and special occasions - engagements, anniversaries, and life's treasures`,
    keywords: ['Boston', 'Waltham', 'photography', 'photography', 'event', 'special occasion', 'anniversary', 'birthday', 'photograph', 'headshot', 'portrait', 'photo'],
    siteUrl: 'https://png-photography.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'png-photography',
        short_name: 'png',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#787878',
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
			resolve: 'gatsby-source-graphcms',
				options: {
					// Your GraphCMS API endpoint. Available from your project settings.
					endpoint: process.env.GRAPHCMS_ENDPOINT,
					// A PAT (Permanent Auth Token) for your project. Required if your project is not available publicly, or you want to scope access to a specific content stage (i.e. draft content).
					token: process.env.GRAPHCMS_TOKEN
				},
		},
		{
			resolve: `gatsby-source-instagram`,
			options: {
				username: `7633273575`,
			}
		}
  ],
}
