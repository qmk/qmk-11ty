const { EleventyRenderPlugin } = require("@11ty/eleventy");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginTOC = require("eleventy-plugin-toc");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.setLibrary("md", markdownIt().use(markdownItAnchor));
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(pluginTOC);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy(
    "/node_modules/beercss/dist/cdn/beer.min.css"
  );
  eleventyConfig.addPassthroughCopy(
    "/node_modules/material-dynamic-colors/dist/cdn/material-dynamic-colors.min.js"
  );
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
