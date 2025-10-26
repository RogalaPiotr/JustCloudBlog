import React from 'react';
import BlogPostPage from '@theme-original/BlogPostPage';

export default function BlogPostPageWrapper(props) {
  // Docusaurus now uses custom BlogPostItem/Header/Title component
  // which renders H1 for blog post pages (Bing SEO compliance)
  // H1 max length: 150 chars (Bing requirement)
  
  return <BlogPostPage {...props} />;
}
