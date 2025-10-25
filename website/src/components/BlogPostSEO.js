import React from 'react';
import Head from '@docusaurus/Head';
import { useBlogPost } from '@docusaurus/theme-common/internal';

export default function BlogPostSEO() {
  const { metadata, isBlogPostPage } = useBlogPost();
  
  if (!isBlogPostPage) {
    return null;
  }

  const {
    title,
    description,
    date,
    formattedDate,
    tags,
    authors,
    frontMatter,
    permalink,
  } = metadata;

  const siteUrl = 'https://blog.justcloud.pl';
  const fullUrl = `${siteUrl}${permalink}`;
  const imageUrl = frontMatter.image 
    ? `${siteUrl}${frontMatter.image}` 
    : `${siteUrl}/img/justcloud-social-card.png`;

  // Generate keywords from tags
  const keywords = tags.map(tag => tag.label).join(', ');
  
  // Get author info
  const authorName = authors?.[0]?.name || 'Piotr Rogala';
  const authorUrl = authors?.[0]?.url || 'https://linkedin.com/in/rogalapiotr';

  // Article structured data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": imageUrl,
    "datePublished": date,
    "dateModified": frontMatter.last_update?.date || date,
    "author": {
      "@type": "Person",
      "name": authorName,
      "url": authorUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "JustCloud.pl",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/img/logo.svg`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    },
    "keywords": keywords
  };

  return (
    <Head>
      {/* Enhanced SEO meta tags */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={authorName} />
      <meta name="publish_date" property="og:publish_date" content={date} />
      <meta property="article:published_time" content={date} />
      <meta property="article:modified_time" content={frontMatter.last_update?.date || date} />
      <meta property="article:author" content={authorName} />
      
      {/* Tags as article:tag */}
      {tags.map((tag) => (
        <meta key={tag.label} property="article:tag" content={tag.label} />
      ))}

      {/* Open Graph */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="JustCloud.pl Blog" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:creator" content="@RogalaPiotr" />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Article Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>
    </Head>
  );
}
