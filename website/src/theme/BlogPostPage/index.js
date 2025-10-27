import React from 'react';
import BlogPostPage from '@theme-original/BlogPostPage';

// Simple passthrough - SEO handled in BlogPostItem
export default function BlogPostPageWrapper(props) {
  return <BlogPostPage {...props} />;
}
