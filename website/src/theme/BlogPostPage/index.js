import React, { useMemo } from 'react';
import OriginalBlogPostPage from '@theme-original/BlogPostPage';

export default function BlogPostPageWrapper(props) {
  // Truncate title for SEO if it's too long (Bing requirement: max 70 chars total)
  const modifiedProps = useMemo(() => {
    const originalTitle = props.content?.metadata?.title;
    
    if (!originalTitle) {
      return props;
    }
    
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
      
      // Return new props with modified content
      return {
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
    }
    
    return props;
  }, [props]);
  
  return <OriginalBlogPostPage {...modifiedProps} />;
}
