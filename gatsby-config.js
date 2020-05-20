module.exports = {
  // pathPrefix: "/gatsby-portfolio",
  siteMetadata: {
    title: "Daniel Trujillo - Personal Site",
    author: "Daniel Trujillo",
    description: "Personal website created using Gatsby"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#2ebf91',
        theme_color: '#2ebf91',
        display: 'minimal-ui',
        icon: 'src/assets/images/browser.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
