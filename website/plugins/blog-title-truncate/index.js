module.exports = function blogTitleTruncatePlugin(context, options) {
  return {
    name: 'blog-title-truncate-plugin',
    
    async contentLoaded({content, actions}) {
      // This hook runs after blog content is loaded but before rendering
      const {blogPosts} = content;
      
      if (!blogPosts) return;
      
      const siteSuffix = ' · JustCloud.pl Blog';
      const maxLength = 70;
      const maxTitleLength = maxLength - siteSuffix.length;
      
      blogPosts.forEach(post => {
        const originalTitle = post.metadata.title;
        
        if (originalTitle && (originalTitle.length + siteSuffix.length) > maxLength) {
          // Store original title
          post.metadata.titleOriginal = originalTitle;
          
          // Truncate at word boundary
          const truncated = originalTitle.substring(0, maxTitleLength - 3);
          const lastSpace = truncated.lastIndexOf(' ');
          const shortTitle = (lastSpace > 25 
            ? truncated.substring(0, lastSpace) 
            : truncated) + '...';
          
          // Modify title
          post.metadata.title = shortTitle;
          
          console.log(`[Plugin] Truncated: "${originalTitle}" -> "${shortTitle}"`);
        }
      });
    },
  };
};
