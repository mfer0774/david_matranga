module.exports = {
  siteMetadata: {
    title: `Test Page`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-1BJTL68YT9"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: `blog`,
      path: `${__dirname}/blog`,
    },
  }]
};