module.exports = {
  siteMetadata: {
    title: `CodeceptJs BDD Framework Documentation Hub`,
    description: `This framework contains Gherkin BDD Tests with CodeceptJS & uses Should.JS assertion library. Intgrated with Saucelabs to run on Multibrowsers in Parallel`,
    author: 'Kushang Gajjar',
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: `${__dirname}/docs/`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-166099847-1',
        head: true,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 690,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-autolink-headers',
        ],
      },
    },
    {
      resolve: 'gatsby-transformer-json',
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
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-offline`,
    {
      resolve: '@gatsby-contrib/gatsby-plugin-elasticlunr-search',
      options: {
        fields: ['title', 'sub_title', 'html', 'keywords'],
        resolvers: {
          MarkdownRemark: {
            keywords: node => node.frontmatter.keywords,
            title: node => node.frontmatter.title,
            sub_title: node => node.frontmatter.sub_title,
            html: node => node.internal.content,
            slug: node => node.fields.slug,
          },
        },
      },
    },
  ],
};
