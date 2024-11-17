import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import type BlogPostItemType from '@theme/BlogPostItem';
import type {WrapperProps} from '@docusaurus/types';
import { DiscussionEmbed } from 'disqus-react';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';

type Props = WrapperProps<typeof BlogPostItemType>;

export default function BlogPostItemWrapper(props: Props): JSX.Element {

  const { metadata } = useBlogPost()
  const { title, frontMatter } = metadata
  const { comments, slug } = frontMatter

  const shouldDisplayComments = comments === true || comments === undefined;
  
  return (
    <>
      <BlogPostItem {...props} />
      {shouldDisplayComments && (
      <DiscussionEmbed
        shortname='justcloud'
        config={{
          url: slug,
          identifier: slug,
          title: title,
          language: 'pl_PL',
        }}
      />
      )}
    </>
  );
}
