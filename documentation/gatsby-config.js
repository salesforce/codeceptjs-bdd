module.exports = {
  siteMetadata: {
    title: `CodeceptJS E2E Framework Documentation Hub`,
    description: `This framework contains Gherkin BDD Tests with CodeceptJS & uses Should.JS assertion library. Intgrated with Saucelabs to run on Multibrowsers in Parallel`,
    author: 'Kushang Gajjar'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-theme-material-ui`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: `${__dirname}/docs`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              ignoreFileExtensions: []
            }
          },
          {
            resolve: 'gatsby-remark-prismjs'
          },
          'gatsby-remark-component'
        ]
      }
    },
    {
      resolve: 'gatsby-transformer-json'
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CodeceptJS E2E Framework Documentation Hub`,
        short_name: `CodeceptJS E2E Framework`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/codecept-e2e-logo.jpg`
      },
    },
    `gatsby-plugin-offline`
  ],
}
