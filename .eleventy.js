const svgContents = require("eleventy-plugin-svg-contents");

// Transforms
const htmlMinTransform = require("./src/_transforms/html-min-transform.js");

// production filter
const isProduction = process.env.NODE_ENV === "production";

module.exports = (config) => {

  config.addPassthroughCopy({ "src/_assets/fonts": "fonts" });
  config.addPassthroughCopy({ "src/_assets/images": "images" });
  config.addPassthroughCopy({ "src/_assets/video": "video" });
  config.addPassthroughCopy({ "./src/_assets/js/main.js": "./js/main.js" });

  config.addFilter('console', function (value) {
    return console.log(value);
  });

  if (isProduction) {
    config.addTransform('htmlmin', htmlMinTransform);
  }

  config.addPlugin(svgContents);

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
