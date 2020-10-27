/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto Sans JP\:300,400,500,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    "gatsby-plugin-styled-components",
  ],
}
