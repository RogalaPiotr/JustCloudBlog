// Structured Data (JSON-LD) for SEO
// https://schema.org/

(function() {
  if (typeof window === 'undefined') return;

  // Base configuration
  const siteUrl = 'https://blog.justcloud.pl';
  const siteName = 'JustCloud.pl';
  const blogName = 'JustCloud.pl Blog';
  const mainSiteUrl = 'https://justcloud.pl';
  const contactFormUrl = `${mainSiteUrl}/index.html#form5-28`;
  const logoUrl = `${siteUrl}/img/logo.png`;
  const socialCardUrl = `${siteUrl}/img/justcloud-social-card.png`;
  
  // Author/Founder data
  const authorName = 'Piotr Rogala';
  const linkedInUrl = 'https://linkedin.com/in/rogalapiotr';
  const twitterUrl = 'https://twitter.com/RogalaPiotr';
  const githubUrl = 'https://github.com/RogalaPiotr';
  const mediumUrl = 'https://piotr-rogala.medium.com';
  const socialLinks = [twitterUrl, linkedInUrl, githubUrl, mediumUrl];

  // Descriptions
  const shortDescription = 'Eksperckie artykuły techniczne o Microsoft Azure, Azure DevOps, automatyzacji i cloud transformation';
  const fullDescription = 'Eksperckie artykuły techniczne o Microsoft Azure, Azure DevOps, automatyzacji, governance, security i best practices';

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteName,
    "url": siteUrl,
    "logo": logoUrl,
    "description": shortDescription,
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "url": contactFormUrl
    },
    "sameAs": socialLinks,
    "founder": {
      "@type": "Person",
      "name": authorName,
      "url": linkedInUrl,
      "sameAs": socialLinks
    }
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": blogName,
    "alternateName": siteName,
    "url": siteUrl,
    "description": shortDescription,
    "publisher": {
      "@type": "Organization",
      "name": siteName,
      "logo": {
        "@type": "ImageObject",
        "url": logoUrl
      }
    }
  };

  // Blog Schema
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": blogName,
    "description": fullDescription,
    "url": siteUrl,
    "image": {
      "@type": "ImageObject",
      "url": socialCardUrl,
      "width": 1200,
      "height": 630
    },
    "author": {
      "@type": "Person",
      "name": authorName,
      "url": linkedInUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": siteName,
      "logo": {
        "@type": "ImageObject",
        "url": logoUrl
      }
    }
  };

  // Breadcrumb Schema (for blog posts)
  function createBreadcrumbSchema() {
    const path = window.location.pathname;
    const pathParts = path.split('/').filter(p => p);
    
    if (pathParts.length === 0) {
      return null; // Homepage doesn't need breadcrumbs
    }

    const itemListElement = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      }
    ];

    if (pathParts.length > 0) {
      const pageTitle = document.title.replace(` | ${siteName}`, '').replace(` · ${blogName}`, '');
      itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": pageTitle,
        "item": window.location.href
      });
    }

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": itemListElement
    };
  }

  // Insert schemas into page
  function insertSchema(schema) {
    if (!schema) return;
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  // Add all schemas
  insertSchema(organizationSchema);
  insertSchema(websiteSchema);
  insertSchema(blogSchema);
  
  const breadcrumbSchema = createBreadcrumbSchema();
  if (breadcrumbSchema) {
    insertSchema(breadcrumbSchema);
  }
})();
