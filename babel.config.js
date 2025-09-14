module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-worklets/plugin", // Single plugin for Reanimated 4.x and worklets
    ],
  };
};
