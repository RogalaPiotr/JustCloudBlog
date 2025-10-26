import React from 'react';
import BlogPostPage from '@theme-original/BlogPostPage';
import { BlogPostProvider } from '@docusaurus/plugin-content-blog/client';
import BlogPostSEO from '../../components/BlogPostSEO';

export default function BlogPostPageWrapper(props) {
  return (
    <>
      <BlogPostProvider content={props.content} isBlogPostPage={true}>
        <BlogPostSEO />
      </BlogPostProvider>
      <BlogPostPage {...props} />
    </>
  );
}
