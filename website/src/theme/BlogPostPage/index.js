import React from 'react';
import BlogPostPage from '@theme-original/BlogPostPage';
import BlogPostSEO from '../../components/BlogPostSEO';

// Enhanced SEO with title truncation for Bing Webmaster
export default function BlogPostPageWrapper(props) {
  return (
    <>
      <BlogPostSEO />
      <BlogPostPage {...props} />
    </>
  );
}
