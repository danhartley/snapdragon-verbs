module.exports = (config, env, helpers) => {
    
    // const sass = helpers.getLoadersByName(config, 'sass');
    //       sass.loader.options.modules = true;
    
    // const sass = helpers.getLoadersByName(config, 'sass-loader')[0];
        //   sass.loader.options.modules = true;
    config.output.publicPath = './';

    config.plugins.push(
        new helpers.webpack.DefinePlugin({
          'process.env.PUBLIC_PATH': JSON.stringify(config.output.publicPath || './')
        })
      );
        
    return config;
};