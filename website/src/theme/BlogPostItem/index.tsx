import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import type BlogPostItemType from '@theme/BlogPostItem';
import type {WrapperProps} from '@docusaurus/types';
import { DiscussionEmbed } from 'disqus-react';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import { useColorMode } from '@docusaurus/theme-common';

type Props = WrapperProps<typeof BlogPostItemType>;

export default function BlogPostItemWrapper(props: Props): JSX.Element {

  const { metadata, isBlogPostPage } = useBlogPost()
  const { title, frontMatter } = metadata
  const { comments, slug } = frontMatter
  const { colorMode } = useColorMode();

  const shouldDisplayComments = isBlogPostPage && (comments === true || comments === undefined);
  
  return (
    <>
      <BlogPostItem {...props} />
      {shouldDisplayComments && (
      <DiscussionEmbed
        key={`disqus-${colorMode}-${slug}`}
        shortname='justcloud'
        config={{
          url: `https://blog.justcloud.pl/${slug}`,
          identifier: slug,
          title: title,
          language: 'en_US',
        }}
      />
      )}
    </>
  );
}
