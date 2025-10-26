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
        
        {/* Enhanced JSON-LD with images for all blog posts */}
        <script type="application/ld+json">
          {JSON.stringify(blogListSchema)}
        </script>
      </Head>
      <BlogListPage {...props} />
    </>
  );
}
