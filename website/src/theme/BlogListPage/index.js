import React from 'react';
import BlogListPage from '@theme-original/BlogListPage';
import Head from '@docusaurus/Head';

export default function BlogListPageWrapper(props) {
    const siteUrl = 'https://blog.justcloud.pl';

    // Bing SEO requirement: description must be 25-160 characters
    const description = "Eksperckie artykuły techniczne o Microsoft Azure, Azure DevOps, automatyzacji, governance, security i best practices dla cloud transformation";

    // Image for social sharing (same as in BlogPostSEO.js)
    const imageUrl = `${siteUrl}/img/justcloud-social-card.png`;

    // Blog schema for list page (homepage) with image field
    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": `${siteUrl}/#blog`,
        "mainEntityOfPage": siteUrl,
        "url": siteUrl,
        "name": "JustCloud Blog",
        "description": description,
        "image": [
            imageUrl,
            {
                "@type": "ImageObject",
                "url": imageUrl,
                "width": 1200,
                "height": 630
            }
        ],
        "inLanguage": "pl-PL",
        "publisher": {
            "@type": "Organization",
            "name": "JustCloud.pl",
            "url": siteUrl,
            "logo": {
                "@type": "ImageObject",
                "url": `${siteUrl}/img/logo.png`,
                "width": 200,
                "height": 200
            },
            "sameAs": [
                "https://linkedin.com/in/rogalapiotr",
                "https://twitter.com/RogalaPiotr",
                "https://github.com/RogalaPiotr"
            ]
        }
    };

    return (
        <>
            <Head>
                {/* Override default "Blog" description with proper 25-160 char description */}
                <meta name="description" content={description} />
                <meta property="og:description" content={description} />
                <meta name="twitter:description" content={description} />

                {/* Open Graph image */}
                <meta property="og:image" content={imageUrl} />
                <meta name="twitter:image" content={imageUrl} />

                {/* JSON-LD Schema with image field for Google/Bing */}
                <script type="application/ld+json">
                    {JSON.stringify(blogSchema)}
                </script>
            </Head>
            <BlogListPage {...props} />
        </>
    );
}