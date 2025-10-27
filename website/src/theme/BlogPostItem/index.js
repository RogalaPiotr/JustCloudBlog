import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import BlogPostSEO from '../../components/BlogPostSEO';

// Enhanced SEO wrapper - adds title truncation for Bing Webmaster
// This component is inside BlogPostProvider context, so useBlogPost hook works
export default function BlogPostItemWrapper(props) {
  return (
    <>
      <BlogPostSEO />
      <BlogPostItem {...props} />
    </>
  );
}
