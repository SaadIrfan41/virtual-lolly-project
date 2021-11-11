module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Virtual Lolly Project',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    // {
    //   resolve: 'gatsby-source-graphql',
    //   options: {
    //     // Arbitrary name for the remote schema Query type
    //     typeName: 'LOLLIES',
    //     // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
    //     fieldName: 'Lollies',
    //     // Url to query from
    //     url: `https://serverless-virtual-lolly.netlify.app/.netlify/functions/lolly`,
    //   },
    // },
    'gatsby-plugin-image',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
}
