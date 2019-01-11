const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.

  // For example, add typescript loader:
  defaultConfig.module.rules.push({
    test: /\.vue$/,
    loader: require.resolve("vue-loader"),
    include: path.resolve(__dirname, "../")
  });
  defaultConfig.module.rules.push({
    test: /\.tsx?$/,
    loader: require.resolve("ts-loader"),
    include: path.resolve(__dirname, "../")
  });
  defaultConfig.resolve.extensions.push(".vue", ".ts", ".tsx");

  return defaultConfig;
};
