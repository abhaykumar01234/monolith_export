const path = require('path');

module.exports = {
    webpack: {
      configure: (webpackConfig, { paths }) => {
        webpackConfig.entry = "./src/ppl/index.js"
        paths.appBuild = webpackConfig.output.path = path.resolve(__dirname, '..', 'dist', 'ppl');
        webpackConfig.output.filename = 'index.js'
        webpackConfig.output.library = 'VpPpl'
        webpackConfig.output.libraryTarget = 'commonjs'
        webpackConfig.optimization.runtimeChunk = false;
        webpackConfig.optimization.splitChunks.chunks = () => false
        
        return webpackConfig; 
      },
      plugins:{
        remove: ['HtmlWebpackPlugin']
      }
    },
    plugins: [
      {
        plugin: {
          overrideWebpackConfig: ({ webpackConfig }) => {
            webpackConfig.plugins[4].options.filename = "ppl.min.css";
            return webpackConfig;
          },
        },
      },
    ],
  };
  