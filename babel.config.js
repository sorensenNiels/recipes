/* eslint-disable linebreak-style */
/* eslint-disable func-names */
module.exports = function(api) {
  // api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage'
      }
    ],
    '@babel/preset-react',
    '@babel/preset-flow'
  ];

  const plugins = [
    'react-hot-loader/babel',
    'react-loadable/babel',
    'dynamic-import-node',
    'lodash',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import'
  ];

  if (api.env('production')) {
    plugins.push('transform-remove-console');
    plugins.push('transform-react-remove-prop-types');
  }

  return {
    presets,
    plugins
  };
};
