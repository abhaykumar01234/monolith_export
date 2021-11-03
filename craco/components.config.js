const path = require('path');

module.exports = {
    webpack: {
      configure: (webpackConfig, { paths }) => {
        webpackConfig.entry = "./src/vp-components/index.js"
        paths.appBuild = webpackConfig.output.path = path.resolve(__dirname, '..', 'dist', 'components');
        webpackConfig.output.filename = 'index.js'
        webpackConfig.output.library = 'VpComponents'
        webpackConfig.output.libraryTarget = 'commonjs'
        webpackConfig.optimization.runtimeChunk = false;
        webpackConfig.optimization.splitChunks.chunks = () => false
        
        return webpackConfig; 
      },
      plugins:{
        // remove: ['HtmlWebpackPlugin']
      }
    },
    plugins: [
      {
        plugin: {
          overrideWebpackConfig: ({ webpackConfig }) => {
            webpackConfig.plugins[5].options.filename = "vp-components.min.css";
            return webpackConfig;
          },
        },
      },
    ],
  };
  