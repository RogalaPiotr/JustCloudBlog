import React from 'react';
import BlogPostPage from '@theme-original/BlogPostPage';

// Simple passthrough - title truncation handled in BlogPostSEO.js
export default function BlogPostPageWrapper(props) {
  return <BlogPostPage {...props} />;
}
