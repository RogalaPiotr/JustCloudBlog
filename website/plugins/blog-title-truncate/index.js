module.exports = function blogTitleTruncatePlugin(context, options) {
  return {
    name: 'blog-title-truncate-plugin',
    
    configureWebpack(config, isServer) {
      return {
        plugins: [
          {
            apply: (compiler) => {
              compiler.hooks.beforeCompile.tapAsync(
                'BlogTitleTruncatePlugin',
                (params, callback) => {
                  console.log('[Plugin] Blog title truncate - webpack hook triggered');
                  callback();
                }
              );
            },
          },
        ],
      };
    },
  };
};
