// Structured Data (JSON-LD) for SEO
// https://schema.org/

(function() {
  if (typeof window === 'undefined') return;

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "JustCloud.pl",
    "url": "https://blog.justcloud.pl",
    "logo": "https://blog.justcloud.pl/img/logo.svg",
    "description": "Eksperckie artykuły techniczne o Microsoft Azure, Azure DevOps, automatyzacji i cloud transformation",
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
      "url": "https://linkedin.com/in/rogalapiotr",
      "sameAs": [
        "https://twitter.com/RogalaPiotr",
        "https://github.com/RogalaPiotr",
        "https://piotr-rogala.medium.com"
      ]
    }
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "JustCloud.pl Blog",
    "alternateName": "JustCloud",
    "url": "https://blog.justcloud.pl",
    "description": "Blog techniczny o Microsoft Azure, Azure DevOps, automatyzacji i cloud transformation",
    "publisher": {
      "@type": "Organization",
      "name": "JustCloud.pl",
      "logo": {
        "@type": "ImageObject",
        "url": "https://blog.justcloud.pl/img/logo.svg"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://blog.justcloud.pl/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Blog Schema
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "JustCloud.pl Blog",
      "description": "Eksperckie artykuły techniczne o Microsoft Azure, Azure DevOps, automatyzacji, governance, security i best practices",
    "url": "https://blog.justcloud.pl",
    "author": {
      "@type": "Person",
      "name": "Piotr Rogala",
      "url": "https://linkedin.com/in/rogalapiotr"
    },
    "publisher": {
      "@type": "Organization",
      "name": "JustCloud.pl",
      "logo": {
        "@type": "ImageObject",
        "url": "https://blog.justcloud.pl/img/logo.svg"
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
        "item": "https://blog.justcloud.pl"
      }
    ];

    if (pathParts.length > 0) {
      itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": document.title.replace(' | JustCloud.pl', ''),
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
