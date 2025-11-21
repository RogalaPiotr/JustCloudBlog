import React from 'react';
import { DiscussionEmbed } from 'disqus-react';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';

export default function DisqusComments() {
  const { metadata } = useBlogPost();
  const { frontMatter, permalink, title } = metadata;

  // Only show comments if enabled in frontmatter
  if (!frontMatter.comments) {
    return null;
  }

  const disqusShortname = 'justcloud';
  const disqusConfig = {
    url: `https://blog.justcloud.pl${permalink}`,
    identifier: permalink,
    title: title,
  };

  return (
    <div style={{ marginTop: '3rem' }}>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  );
}
