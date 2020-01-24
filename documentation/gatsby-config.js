module.exports = {
  siteMetadata: {
    title: `CodeceptJs BDD Framework Documentation Hub`,
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
        classPrefix: "language-",
        inlineCodeMarker: null,
        aliases: {},
        showLineNumbers: false,
        noInlineHighlight: false,
        languageExtensions: [
          {
            language: "superscript",
            extend: "javascript",
            definition: {
              superscript_types: /(SuperType)/,
            },
            insertBefore: {
              function: {
                superscript_keywords: /(superif|superelse)/,
              },
            },
          },
        ],
        prompt: {
          user: "root",
          host: "localhost",
          global: false,
        },
        escapeEntities: {},
        plugins: [
          {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                {
                  resolve: `gatsby-remark-images`,
                  options: {
                    maxWidth: 756,
                  },
                },
                {
                  resolve: `gatsby-remark-responsive-iframe`,
                  options: {
                    wrapperStyle: `margin-bottom: 1.0725rem`,
                  },
                },
                `gatsby-remark-copy-linked-files`,
                `gatsby-remark-smartypants`,
                `gatsby-remark-prismjs`,
              ],
            },
          },
        ]
      }
    },
    {
      resolve: 'gatsby-transformer-json'
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CodeceptJS BDD Framework Documentation Hub`,
        short_name: `CodeceptJS BDD Framework`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/cucumber-logo.png`
      },
    },
    `gatsby-plugin-offline`
  ],
};
