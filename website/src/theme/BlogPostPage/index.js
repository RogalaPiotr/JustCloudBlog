import React from 'react';
import BlogPostPage from '@theme-original/BlogPostPage';

// Pass-through wrapper - title truncation handled by plugin
export default function BlogPostPageWrapper(props) {
  return <BlogPostPage {...props} />;
}
