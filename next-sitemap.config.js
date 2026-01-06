/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://pbocuamanconstruction.com",
  generateRobotsTxt: true,
  additionalPaths: async (config) => [
    await config.transform(config, '/services'),
    await config.transform(config, '/projects'),
  ],
};