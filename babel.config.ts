interface Api {
  cache: (enabled: boolean) => void;
}

module.exports = function (api: Api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['expo-router/babel'],
  };
};
