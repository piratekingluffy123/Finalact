// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('@expo/metro-config');
const defaultConfig = getDefaultConfig(__dirname);

// Ensure resolver and its assetsExts property are defined before pushing to it
if (defaultConfig.resolver && defaultConfig.resolver.assetsExts) {
  defaultConfig.resolver.assetsExts.push('cjs');
} else {
  // If resolver or assetsExts is undefined, create them
  defaultConfig.resolver = defaultConfig.resolver || {};
  defaultConfig.resolver.assetsExts = ['cjs'];
}

module.exports = defaultConfig;
