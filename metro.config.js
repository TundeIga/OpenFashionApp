const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

config.transformer.babelTransformerPath = require.resolve(
  "react-native-svg-transformer"
);

config.resolver.assetExts = config.resolver.assetExts
  .filter((ext) => ext !== "svg")
  .concat(["ttf"]); // ensure .ttf is treated as an asset

config.resolver.sourceExts = [...config.resolver.sourceExts, "svg"];

module.exports = config;
