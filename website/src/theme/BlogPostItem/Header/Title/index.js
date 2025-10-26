import React from 'react';
import clsx from 'clsx';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import styles from './styles.module.css';

export default function BlogPostItemHeaderTitle() {
  const { metadata, isBlogPostPage } = useBlogPost();
  const { title } = metadata;
  
  // Use H1 for blog post pages (Bing SEO requirement)
  // Use H2 for blog list pages
  const TitleHeading = isBlogPostPage ? 'h1' : 'h2';
  
  return (
    <TitleHeading className={clsx('margin-bottom--sm', styles.title)} itemProp="headline">
      {isBlogPostPage ? (
        title
      ) : (
        <a itemProp="url" href={metadata.permalink}>
          {title}
        </a>
      )}
    </TitleHeading>
  );
}
