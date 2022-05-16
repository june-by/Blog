const withImages = require("next-images");
const withCSS = require("@zeit/next-css");
const { styles } = require("@ckeditor/ckeditor5-dev-utils");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(
  withCSS(
    withImages({
      compress: true,
      webpack(config, options) {
        config.module.rules.forEach(function (rule, index, array) {
          const test = (rule.test && rule.test.toString()) || "";
          if (test.includes("css")) {
            array[index] = {
              ...rule,
              exclude: /ckeditor5-[^/]+\/theme\/[\w-/]+\.css$/,
            };
          } else if (test.includes("svg")) {
            array[index] = {
              ...rule,
              exclude: /ckeditor5-[^/]+\/theme\/icons\/.+\.svg$/,
            };
          }
        });

        config.module.rules.push({
          test: /ckeditor5-[^/]+\/theme\/[\w-/]+\.css$/,
          use: [
            {
              loader: "style-loader",
              options: {
                injectType: "singletonStyleTag",
              },
            },
            {
              loader: "postcss-loader",
              options: styles.getPostCssConfig({
                themeImporter: {
                  themePath: require.resolve("@ckeditor/ckeditor5-theme-lark"),
                },
                minify: true,
              }),
            },
          ],
        });

        config.module.rules.push({
          test: /ckeditor5-[^/]+\/theme\/icons\/.+\.svg$/,
          use: ["raw-loader"],
        });
        const prod = process.env.NODE_ENV === "production";
        return {
          ...config,
          mode: prod ? "production" : "development",
          devtool: prod ? "hidden-source-map" : "eval",
          plugins: [...config.plugins, new options.webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/)],
        };
      },
    })
  )
);
