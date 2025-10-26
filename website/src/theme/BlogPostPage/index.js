import React from 'react';
import BlogPostPage from '@theme-original/BlogPostPage';

export default function BlogPostPageWrapper(props) {
  // Truncate title for SEO if it's too long (Bing requirement: max 70 chars total)
  const originalTitle = props.content?.metadata?.title;
  
  if (originalTitle) {
    const siteSuffix = ' · JustCloud.pl Blog';
    const maxLength = 70;
    const maxTitleLength = maxLength - siteSuffix.length;
    
    // Only truncate if title + suffix exceeds 70 chars
    if ((originalTitle.length + siteSuffix.length) > maxLength) {
      // Truncate at word boundary - reserve 3 chars for "..."
      const truncated = originalTitle.substring(0, maxTitleLength - 3);
      const lastSpace = truncated.lastIndexOf(' ');
      const shortTitle = (lastSpace > 25 
        ? truncated.substring(0, lastSpace) 
        : truncated) + '...';
      
      console.log(`[BlogPost] Truncated title: "${originalTitle}" -> "${shortTitle}"`);
      
      // Modify metadata directly (shallow clone is enough for props)
      const modifiedProps = {
        ...props,
        content: {
          ...props.content,
          metadata: {
            ...props.content.metadata,
            titleOriginal: originalTitle,
            title: shortTitle
          }
        }
      };
      
      return <BlogPostPage {...modifiedProps} />;
    }
  }
  
  return <BlogPostPage {...props} />;
}
