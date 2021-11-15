module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site",
  },
  plugins: [
    {
      resolve: `@kentico/gatsby-source-kontent`,
      options: {
        projectId: "", // Fill in your Project ID
        languageCodenames: ["en-US"],
      },
    },
  ],
};
