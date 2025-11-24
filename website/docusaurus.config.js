// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'JustCloud.pl Blog',
  titleDelimiter: '·',
  tagline: 'Eksperckie artykuły o Azure, DevOps, automatyzacji i transformacji chmurowej',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://blog.justcloud.pl',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'RogalaPiotr',
  projectName: 'JustCloudBlog',

  onBrokenLinks: 'throw',
  
  // Trailing slash behavior - ważne dla SEO
  trailingSlash: false,

  // Noindex dla środowisk staging/dev
  noIndex: false, // Set to true for staging environments
  
  // SEO Headtags
  headTags: [
    // Favicon - różne rozmiary dla różnych urządzeń
    {
      tagName: 'link',
      attributes: {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: '/img/favicon.ico',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/img/favicon.ico',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/img/favicon-32x32.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/img/favicon-16x16.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/img/apple-touch-icon.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'manifest',
        href: '/img/site.webmanifest',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'theme-color',
        content: '#00A7E4',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'msapplication-TileColor',
        content: '#00A7E4',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'author',
        content: 'Piotr Rogala',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'robots',
        content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:type',
        content: 'website',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image',
        content: 'https://blog.justcloud.pl/img/justcloud-social-card.png',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image:width',
        content: '1200',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image:height',
        content: '630',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image:alt',
        content: 'JustCloud.pl Blog - Azure, DevOps & Cloud Engineering',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:locale',
        content: 'pl_PL',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:image',
        content: 'https://blog.justcloud.pl/img/justcloud-social-card.png',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:image:alt',
        content: 'JustCloud.pl Blog - Azure, DevOps & Cloud Engineering',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        httpEquiv: 'content-language',
        content: 'pl',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:creator',
        content: '@RogalaPiotr',
      },
    },
    // Google Consent Mode
    {
      tagName: 'script',
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'default', {
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied',
          'analytics_storage': 'denied'
        });
      `,
    },
    // RSS/Atom Autodiscovery
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        type: 'application/rss+xml',
        title: 'JustCloud.pl RSS Feed',
        href: 'https://blog.justcloud.pl/rss.xml',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        type: 'application/atom+xml',
        title: 'JustCloud.pl Atom Feed',
        href: 'https://blog.justcloud.pl/atom.xml',
      },
    },
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl'],
  },

  // SEO: Structured data and JSON-LD
  scripts: [
    // Note: structured-data.js removed - JSON-LD is now dynamically generated
    // per-page in React components (BlogPostSEO.js, BlogListPage) for better SPA support
    
    // IndexNow - client-side instant indexing (GET method, no CORS)
    {
      src: 'https://blog.justcloud.pl/scripts/indexnow.js',
      async: true,
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
            title: 'JustCloud.pl - Azure & DevOps Blog',
            description: 'Eksperckie artykuły o Microsoft Azure, DevOps, automatyzacji i transformacji chmurowej',
            copyright: `Copyright © ${new Date().getFullYear()} JustCloud.pl`,
            language: 'pl-PL',
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          routeBasePath: '/',
          blogSidebarCount: 'ALL',
          blogTitle: 'JustCloud.pl Blog - Azure, DevOps & Cloud Engineering',
          blogDescription: 'Eksperckie artykuły techniczne o Microsoft Azure, Azure DevOps, automatyzacji, governance, security i best practices dla cloud transformation',
          postsPerPage: 10,
          blogSidebarTitle: 'Ostatnie artykuły',
        },
        theme: {
          customCss: [
            './src/css/custom-overrides.css',
          ],
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          ignorePatterns: [],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
  
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // SEO - Enhanced metadata
      metadata: [
        { name: 'keywords', content: 'Azure, Microsoft Azure, DevOps, Azure DevOps, Cloud Computing, Automatyzacja, Infrastructure as Code, Bicep, Terraform, Azure Policy, Governance, Security, CI/CD, Pipelines, GitHub Actions, Kubernetes, AKS, Container Apps, Cloud Transformation, Digital Transformation' },
        // Note: og:title, og:description, twitter:title, twitter:description 
        // are dynamically generated per-page in BlogPostSEO.js and BlogListPage
      ],
      // SEO - Image metadata (MUST be absolute URL for search engines)
      image: 'https://blog.justcloud.pl/img/justcloud-social-card.png',
      // Algolia DocSearch (opcjonalnie - jeśli masz DocSearch)
      // algolia: {
      //   appId: 'YOUR_APP_ID',
      //   apiKey: 'YOUR_API_KEY',
      //   indexName: 'justcloud',
      // },
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      },
      navbar: {
        title: 'JustCloud.pl',
        logo: {
          alt: 'JustCloud.pl Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://web.justcloud.pl/index.html#contact',
            label: 'Contact',
            position: 'right',
          },
          {
            href: 'https://github.com/RogalaPiotr/justcloudpublic',
            label: 'GitHub',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'JustCloud links',
            items: [
              {
                label: 'Web: JustCloud.pl',
                to: 'https://web.justcloud.pl',
              },
              {
                label: 'Contact',
                to: 'https://web.justcloud.pl/#contact',
              },
              {
                label: 'Github',
                to: 'https://github.com/RogalaPiotr/justcloudpublic',
              },
              {
                label: 'O mnie',
                to: 'https://web.justcloud.pl/#about',
              },
              {
                label: 'Microsoft MVP Profile',
                to: 'https://mvp.microsoft.com/en-US/mvp/profile/55988764-f35a-e711-8114-3863bb2ed1f8',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Blog: JustCloud.pl',
                to: '/',
              },
              {
                label: ' Warsztaty i Webinary On-Line',
                href: 'https://sendfox.com/justcloud',
              },
              {
                label: ' Warsztaty Wrocław (On-Site)',
                href: 'https://subscribepage.io/wroclaw-newsletter-workshops',
              },
              {
                label: 'Moje prezentacje',
                href: 'https://github.com/RogalaPiotr/Presentations',
              },
              {
                label: 'Azure Poland',
                href: 'https://azurepoland.pl/',
              }
            ],
          },
          {
            title: 'Stay in touch!',
            items: [
              {
                html: '<a href="https://blog.justcloud.pl/rss.xml" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/RSS-blog.justcloud.pl-FFA500?style=for-the-badge&logo=rss&logoColor=white" alt="RSS Feed" /></a>',
              },
              {
                html: '<a href="https://x.com/RogalaPiotr" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/X-@RogalaPiotr-000000?style=for-the-badge&logo=x&logoColor=white" alt="X (Twitter)" /></a>',
              },
              {
                html: '<a href="https://pl.linkedin.com/in/rogalapiotr" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/LinkedIn-Piotr%20Rogala-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>',
              },
              {
                html: '<a href="https://piotr-rogala.medium.com" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Medium-@piotr--rogala-12100E?style=for-the-badge&logo=medium&logoColor=white" alt="Medium" /></a>',
              },
              {
                html: '<a href="https://buycoffee.to/justcloud" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Buy%20Coffee-Support%20Me-4E3620?style=for-the-badge&logo=buymeacoffee&logoColor=white" alt="Buy Coffee" /></a>',
              }
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} JustCloud.pl. All rights reserved. Built with Docusaurus.<br/><span style="font-size: 0.85em;"><a href="/privacy-policy" style="color: var(--jc-link-color, #00A7E4); text-decoration: underline;">Polityka prywatności i cookies</a> | <span id="footer-cookie-settings" style="color: var(--jc-link-color, #00A7E4); text-decoration: underline; cursor: pointer;">Ustawienia cookies</span></span>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  // Additional webpack configuration for hot reload (dev mode only)
  plugins: [
    // './plugins/blog-title-truncate', // Disabled - using wrapper approach instead
    function (context, options) {
      return {
        name: 'custom-webpack-config',
        configureWebpack(config, isServer, utils) {
          // Only apply watch options in development mode
          if (process.env.NODE_ENV === 'development') {
            return {
              watchOptions: {
                poll: 1000,
                aggregateTimeout: 300,
                ignored: /node_modules/,
              },
            };
          }
          return {};
        },
      };
    },
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
        highlightSearchTermsOnTargetPage: true,
        indexDocs: false,
        indexBlog: true,
        indexPages: true,
        blogRouteBasePath: '/',
        removeDefaultStopWordFilter: true,
        searchResultLimits: 8,
        searchResultContextMaxLength: 50,
      },
    ],
    require.resolve('docusaurus-plugin-image-zoom')
  ],
};

export default config;
