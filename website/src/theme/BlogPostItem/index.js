import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import BlogPostSEO from '../../components/BlogPostSEO';
import DisqusComments from '../../components/DisqusComments';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';

// Enhanced SEO wrapper - adds title truncation for Bing Webmaster
// This component is inside BlogPostProvider context, so useBlogPost hook works
export default function BlogPostItemWrapper(props) {
  const { metadata, isBlogPostPage } = useBlogPost();
  
  return (
    <>
      <BlogPostSEO />
      <BlogPostItem {...props} />
      {isBlogPostPage && <DisqusComments />}
    </>
  );
}
