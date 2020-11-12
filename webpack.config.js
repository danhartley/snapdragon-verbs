const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    
   resolve: { 
     "alias": { 
       "react": "preact/compat",
       "react-dom/test-utils": "preact/test-utils",
       "react-dom": "preact/compat",
      // Must be below test-utils
     },
   },
   plugins: [
    new CopyPlugin({
        patterns: [
          { from: './src/static', to: 'static' }
        ]})
    ]
 };