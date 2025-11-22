import React from 'react';
import BlogListPage from '@theme-original/BlogListPage';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function BlogListPageWrapper(props) {
  const {siteConfig} = useDocusaurusContext();
  
  // Bing SEO requirement: description must be 25-160 characters
  // This fixes "Metatag description jest zbyt długi lub zbyt krótki" error
  // for blog list page (homepage)
  const description = "Eksperckie artykuły techniczne o Microsoft Azure, Azure DevOps, automatyzacji, governance, security i best practices dla cloud transformation";
  
  // Build enhanced JSON-LD for blog list with images
  const siteUrl = siteConfig.url;
  const blogPosts = props.items || [];
  
  // Organization Schema - only on homepage
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "JustCloud.pl",
    "url": siteUrl,
    "logo": `${siteUrl}/img/logo.png`,
    "description": "Eksperckie artykuły techniczne o Microsoft Azure, Azure DevOps i cloud transformation",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "url": "https://justcloud.pl/index.html#form5-28"
    },
    "sameAs": [
      "https://twitter.com/RogalaPiotr",
      "https://linkedin.com/in/rogalapiotr",
      "https://github.com/RogalaPiotr",
      "https://piotr-rogala.medium.com"
    ],
    "founder": {
      "@type": "Person",
      "name": "Piotr Rogala",
      "url": "https://linkedin.com/in/rogalapiotr"
    }
  };

  // Website Schema - only on homepage
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "JustCloud.pl Blog",
    "alternateName": "JustCloud.pl",
    "url": siteUrl,
    "description": "Eksperckie artykuły techniczne o Microsoft Azure, Azure DevOps i cloud transformation",
    "publisher": {
      "@type": "Organization",
      "name": "JustCloud.pl",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/img/logo.png`
      }
    }
  };
  
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteUrl}/`,
    "mainEntityOfPage": `${siteUrl}/`,
    "headline": "JustCloud.pl Blog - Azure, DevOps & Cloud Engineering",
    "description": description,
    "image": {
      "@type": "ImageObject",
      "url": `${siteUrl}/img/justcloud-social-card.png`,
      "width": 1200,
      "height": 630
    },
    "blogPost": blogPosts.map(item => {
      const post = item.content.metadata;
      const imageUrl = post.frontMatter?.image 
        ? (post.frontMatter.image.startsWith('http') 
            ? post.frontMatter.image 
            : `${siteUrl}${post.frontMatter.image}`)
        : `${siteUrl}/img/justcloud-social-card.png`;
      
      return {
        "@type": "BlogPosting",
        "@id": `${siteUrl}${post.permalink}`,
        "mainEntityOfPage": `${siteUrl}${post.permalink}`,
        "url": `${siteUrl}${post.permalink}`,
        "headline": post.title,
        "name": post.title,
        "description": post.description,
        "image": {
          "@type": "ImageObject",
          "url": imageUrl,
          "width": 1200,
          "height": 630
        },
        "datePublished": post.date,
        "author": {
          "@type": "Person",
          "name": post.authors?.[0]?.name || "Piotr Rogala",
          "description": post.authors?.[0]?.title || "MVP Azure & owner JustCloud.pl",
          "url": post.authors?.[0]?.url || "https://github.com/RogalaPiotr",
          "image": post.authors?.[0]?.imageURL || "https://avatars.githubusercontent.com/u/31566956?v=4"
        },
        "keywords": post.tags?.map(tag => tag.label) || []
      };
    })
  };
  
  return (
    <>
      <Head>
        {/* Override default "Blog" description with proper 25-160 char description */}
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:description" content={description} />
        
        {/* Organization schema - only on homepage */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>

        {/* Website schema - only on homepage */}
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        
        {/* Blog list with all posts */}
        <script type="application/ld+json">
          {JSON.stringify(blogListSchema)}
        </script>
      </Head>
      
      {/* 
        Hidden H1 for SEO (Google & Bing requirement)
        Uses screen-reader friendly "visually-hidden" technique
        Visible to search engines but hidden from visual users
      */}
      <h1 className="sr-only">
        JustCloud.pl Blog - Azure, DevOps & Cloud Engineering
      </h1>
      
      <BlogListPage {...props} />
    </>
  );
}
