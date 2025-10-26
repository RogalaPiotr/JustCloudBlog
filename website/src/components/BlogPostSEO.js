import React from 'react';
import Head from '@docusaurus/Head';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';

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

    // Normalize description for Bing (25-160 chars) while keeping original for Google
    const normalizeDescription = (desc) => {
        if (!desc || desc.length < 25) {
            // Too short - extend with title or generic text
            return `${desc || title}. Dowiedz się więcej na JustCloud.pl Blog.`.substring(0, 160);
        }
        if (desc.length > 160) {
            // Too long - truncate at word boundary
            const truncated = desc.substring(0, 157);
            const lastSpace = truncated.lastIndexOf(' ');
            return (lastSpace > 130 ? truncated.substring(0, lastSpace) : truncated) + '...';
        }
        return desc;
    };

    const metaDescription = normalizeDescription(description);

    // Generate keywords from tags
    const keywords = tags.map(tag => tag.label); // Array for schema
    const keywordsString = keywords.join(', '); // String for meta tags

    // Get author info
    const authorName = authors?.[0]?.name || 'Piotr Rogala';
    const authorUrl = authors?.[0]?.url || 'https://linkedin.com/in/rogalapiotr';

    // Calculate reading time (approximate word count / 200 words per minute)
    const readingTime = metadata.readingTime || 5; // Default 5 min
    const estimatedWordCount = Math.round(readingTime * 200);

    // Article structured data - ENHANCED for Bing & Google
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": fullUrl,
        "headline": title,
        "name": title,
        "description": description,
        "logo": {
            "@type": "ImageObject",
            "url": imageUrl,
            "width": 1200,
            "height": 630
        },
        "datePublished": date,
        "dateModified": frontMatter.last_update?.date || date,
        "author": {
            "@type": "Person",
            "name": authorName,
            "url": authorUrl,
            "image": authors?.[0]?.imageURL || "https://avatars.githubusercontent.com/u/31566956?v=4",
            "description": authors?.[0]?.title || "MVP Azure & owner JustCloud.pl",
            "sameAs": [
                "https://linkedin.com/in/rogalapiotr",
                "https://twitter.com/RogalaPiotr",
                "https://github.com/RogalaPiotr"
            ]
        },
        "publisher": {
            "@type": "Organization",
            "name": "JustCloud.pl",
            "url": "https://blog.justcloud.pl",
            "logo": {
                "@type": "ImageObject",
                "url": `${siteUrl}/img/logo.svg`,
                "width": 600,
                "height": 60
            },
            "sameAs": [
                "https://linkedin.com/in/rogalapiotr",
                "https://twitter.com/RogalaPiotr",
                "https://github.com/RogalaPiotr"
            ]
        },
        "mainEntityOfPage": fullUrl,
        "url": fullUrl,
        "keywords": keywords,
        "articleSection": tags.length > 0 ? tags[0].label : "Cloud Computing",
        "inLanguage": "pl-PL",
        "wordCount": estimatedWordCount,
        "timeRequired": `PT${Math.round(readingTime)}M`,
        "isAccessibleForFree": true,
        "isPartOf": {
            "@type": "Blog",
            "@id": `${siteUrl}/#blog`
        },
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": siteUrl
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": tags.length > 0 ? tags[0].label : "Blog",
                    "item": tags.length > 0 ? `${siteUrl}/tags/${tags[0].permalink}` : siteUrl
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": title,
                    "item": fullUrl
                }
            ]
        }
    };

    // Bing-specific: Add HowTo schema if article contains steps
    const howToSteps = frontMatter.howto_steps || [];
    const howToSchema = howToSteps.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": title,
        "description": description,
        "image": imageUrl,
        "totalTime": `PT${Math.round(readingTime)}M`,
        "step": howToSteps.map((step, index) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": step.name || `Krok ${index + 1}`,
            "text": step.text || step.name,
            "url": `${fullUrl}#step-${index + 1}`
        }))
    } : null;

    return (
        <Head>
            {/* Enhanced SEO meta tags */}
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={keywordsString} />
            <meta name="author" content={authorName} />
            <meta name="publish_date" property="og:publish_date" content={date} />
            <meta property="article:published_time" content={date} />
            <meta property="article:modified_time" content={frontMatter.last_update?.date || date} />
            <meta property="article:author" content={authorName} />

            {/* Bing-specific meta tags */}
            <meta name="language" content="Polish" />
            <meta name="geo.region" content="PL" />
            <meta name="geo.placename" content="Poland" />

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
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="JustCloud.pl Blog" />
            <meta property="og:locale" content="pl_PL" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />
            <meta name="twitter:creator" content="@RogalaPiotr" />
            <meta name="twitter:site" content="@RogalaPiotr" />

            {/* LinkedIn-specific Article Tags */}
            <meta property="article:publisher" content="https://www.linkedin.com/in/rogalapiotr" />
            <meta property="profile:first_name" content="Piotr" />
            <meta property="profile:last_name" content="Rogala" />

            {/* Canonical URL */}
            <link rel="canonical" href={fullUrl} />

            {/* Article Structured Data (JSON-LD) */}
            <script type="application/ld+json">
                {JSON.stringify(articleSchema)}
            </script>

            {/* HowTo Schema (if applicable) */}
            {howToSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(howToSchema)}
                </script>
            )}
        </Head>
    );
}