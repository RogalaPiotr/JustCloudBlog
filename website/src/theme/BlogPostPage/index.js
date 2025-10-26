import React, { useMemo } from 'react';
import BlogPostPage from '@theme-original/BlogPostPage';
import { BlogPostProvider } from '@docusaurus/plugin-content-blog/client';
import BlogPostSEO from '../../components/BlogPostSEO';

export default function BlogPostPageWrapper(props) {
  // Truncate title for SEO if it's too long (Bing requirement: max 70 chars total)
  const modifiedContent = useMemo(() => {
    // Create deep copy of content to avoid mutating immutable objects
    const originalTitle = props.content.metadata?.title;
    
    if (!originalTitle) {
      return props.content;
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
      
      // Return new content object with modified metadata
      return {
        ...props.content,
        metadata: {
          ...props.content.metadata,
          titleOriginal: originalTitle,
          title: shortTitle
        }
      };
    }
    
    return props.content;
  }, [props.content]);
  
  return (
    <>
      <BlogPostProvider content={modifiedContent} isBlogPostPage={true}>
        <BlogPostSEO />
      </BlogPostProvider>
      <BlogPostPage {...props} content={modifiedContent} />
    </>
  );
}
