import React from 'react';
import BlogPostPage from '@theme-original/BlogPostPage';

// Override to hide TOC on blog posts
export default function BlogPostPageWrapper(props) {
  // Remove TOC by setting it to null
  const modifiedProps = {
    ...props,
    sidebar: props.sidebar,
  };
  
  return (
    <>
      <style>
        {`
          .theme-doc-toc-desktop,
          .theme-doc-toc-mobile,
          .table-of-contents {
            display: none !important;
          }
        `}
      </style>
      <BlogPostPage {...modifiedProps} />
    </>
  );
}
