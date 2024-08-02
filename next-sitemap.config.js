/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.fileportes.com", // Replace with your website URL
  changefreq: "weekly", // How often the sitemap should be updated: hourly, daily, weekly, monthly, yearly
  priority: 0.7, // Priority of the page. 0.7 is a common value, but adjust as needed.
  sitemapSize: 5000, // Maximum number of URLs per sitemap file
  generateRobotsTxt: true, // Whether to generate a robots.txt file
  alternateRefs: [
    {
      href: "https://www.fileportes.com/gb",
      hreflang: "gb",
    },
    {
      href: "https://www.fileportes.com/ct",
      hreflang: "ca",
    },
  ],
};
