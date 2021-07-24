require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    author: `@gatsbyjs`,
          title: "Dandelion",
    description:
      'Dandelion, a community teahouse and apothecary in Vancouver Washington',
    siteUrl: 'https://www.dandelionteahouse.com',
    image: '/images/share.jpg',
    menuLinks: [
      {
        name: 'Home',
        slug: '/',
      },
      {
        name: 'Order Online',
        slug: '/menu/',
      },
      {
        name: 'Gallery',
        slug: '/gallery/',
      },
    ],
    postsPerFirstPage: 7,
    postsPerPage: 6,
    basePath: '/',
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
    {
      // This plugin lets me access environment variables that
      // aren't prefixed with Gatsby. This allows me to use
      // Shopify-related variables in the context setup script.
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ["SHOP_NAME", "SHOP_TOKEN", "CONTENTFUL_SPACE_ID", "CONTENTFUL_ACCESS_TOKEN"],
      },
    },
    {
      resolve: `gatsby-theme-shopify-manager`,
      options: {
        shopName: 'dandelion-teahouse-apothecary',
        accessToken: '26c1a884eff63794fb2c1cdd922bf299'
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'jk2yamefea8g',
        accessToken: '7d247qkzP36BYwn0Tw9cKdPhEgVMmSTH4WqwosVOWtg',
        useNameForId: false,
      }
    },
    `gatsby-theme-style-guide`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-transformer-remark',
    'gatsby-plugin-theme-ui',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
