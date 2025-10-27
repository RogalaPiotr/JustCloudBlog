import React from 'react';
import Head from '@docusaurus/Head';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function BlogPostSEO() {
    const { metadata, isBlogPostPage } = useBlogPost();
    const { siteConfig } = useDocusaurusContext();

    if (!isBlogPostPage) {
        return null;
    }

    const {
        title,
        titleOriginal, // Full title if truncated
        description,
        date,
        formattedDate,
        tags,
        authors,
        frontMatter,
        permalink,
    } = metadata;

    // Use original full title for schemas and social media
    const fullTitle = titleOriginal || title;

    const siteUrl = 'https://blog.justcloud.pl';
    const fullUrl = `${siteUrl}${permalink}`;
    
    // Ensure we always have a valid image URL - fallback to social card
    const imageUrl = frontMatter.image
        ? (frontMatter.image.startsWith('http') 
            ? frontMatter.image 
            : `${siteUrl}${frontMatter.image}`)
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

    // Enhanced description for Bing with keyword optimization
    // Bing prefers keywords in first 120 characters
    const enhanceDescriptionForBing = (desc, tags) => {
        const normalized = normalizeDescription(desc);
        const primaryTag = tags[0]?.label || '';
        
        // If primary keyword not in description, add it at the beginning
        if (primaryTag && normalized.length < 140 && !normalized.toLowerCase().includes(primaryTag.toLowerCase())) {
            const enhanced = `${primaryTag}: ${normalized}`;
            return enhanced.length <= 160 ? enhanced : normalized;
        }
        return normalized;
    };

    const metaDescription = enhanceDescriptionForBing(description, tags);

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
    // Updated 2025-10-27: Aligned with Google's latest BlogPosting schema requirements
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": fullUrl,
        "headline": fullTitle,
        "name": fullTitle,
        "description": description,
        "image": [
            {
                "@type": "ImageObject",
                "url": imageUrl,
                "width": 1200,
                "height": 630
            }
        ],
        "datePublished": date,
        "dateModified": frontMatter.last_update?.date || date,
        "author": {
            "@type": "Person",
            "name": authorName,
            "url": authorUrl,
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
                "url": `${siteUrl}/img/logo.png`,
                "width": 200,
                "height": 200
            },
            "sameAs": [
                "https://linkedin.com/in/rogalapiotr",
                "https://twitter.com/RogalaPiotr",
                "https://github.com/RogalaPiotr"
            ]
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": fullUrl
        },
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
    // Updated 2025-10-27: Image as array for better compatibility
    const howToSteps = frontMatter.howto_steps || [];
    const howToSchema = howToSteps.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": fullTitle,
        "description": description,
        "image": [imageUrl],
        "totalTime": `PT${Math.round(readingTime)}M`,
        "step": howToSteps.map((step, index) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": step.name || `Krok ${index + 1}`,
            "text": step.text || step.name,
            "url": `${fullUrl}#step-${index + 1}`
        }))
    } : null;

    // Truncate title for Bing SEO (max 70 chars total)
    const truncateTitle = (title) => {
        // Dynamically build suffix from Docusaurus config
        const delimiter = siteConfig.titleDelimiter || '|';
        const siteTitle = siteConfig.title || 'Blog';
        const siteSuffix = ` ${delimiter} ${siteTitle}`;
        
        const maxLength = 70;
        const maxTitleLength = maxLength - siteSuffix.length;
        
        if ((title.length + siteSuffix.length) <= maxLength) {
            return title; // Don't add suffix here - Docusaurus will add it
        }
        
        // Truncate at word boundary
        const truncated = title.substring(0, maxTitleLength - 3);
        const lastSpace = truncated.lastIndexOf(' ');
        const shortTitle = (lastSpace > 25 
            ? truncated.substring(0, lastSpace) 
            : truncated) + '...';
        
        console.log(`[BlogPostSEO] Truncated title: "${title}" -> "${shortTitle}" (suffix: "${siteSuffix}")`);
        return shortTitle; // Don't add suffix here - Docusaurus will add it
    };

    const pageTitle = truncateTitle(title); // For <title> tag - Docusaurus will add suffix
    // Keep using fullTitle for schemas and social media (titleOriginal || title)

    return (
        <Head>
            {/* Page title - truncated for Bing SEO (max 70 chars with suffix) 
                Note: Docusaurus will automatically add " · JustCloud.pl Blog" suffix */}
            <title>{pageTitle}</title>
            
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
            <meta name="geo.position" content="51.1079;17.0385" /> {/* Wrocław coordinates */}
            <meta name="ICBM" content="51.1079, 17.0385" /> {/* Alternative geo format */}

            {/* Tags as article:tag */}
            {tags.map((tag) => (
                <meta key={tag.label} property="article:tag" content={tag.label} />
            ))}

            {/* Open Graph */}
            <meta property="og:type" content="article" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="JustCloud.pl Blog" />
            <meta property="og:locale" content="pl_PL" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
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