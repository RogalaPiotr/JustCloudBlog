import React from 'react';
import BlogListPage from '@theme-original/BlogListPage';
import Head from '@docusaurus/Head';

export default function BlogListPageWrapper(props) {
  // Bing SEO requirement: description must be 25-160 characters
  // This fixes "Metatag description jest zbyt długi lub zbyt krótki" error
  // for blog list page (homepage)
  const description = "Eksperckie artykuły techniczne o Microsoft Azure, Azure DevOps, automatyzacji, governance, security i best practices dla cloud transformation";
  
  return (
    <>
      <Head>
        {/* Override default "Blog" description with proper 25-160 char description */}
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:description" content={description} />
      </Head>
      <BlogListPage {...props} />
    </>
  );
}
