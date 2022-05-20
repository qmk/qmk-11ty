const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPassthroughCopy("./src/css/pico.min.css");
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
