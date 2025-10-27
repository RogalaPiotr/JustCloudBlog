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
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: '/img/favicon.ico',
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
    {
      src: 'https://blog.justcloud.pl/scripts/structured-data.js',
      async: false,
    },
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
          editUrl:
            'https://github.com/RogalaPiotr/JustCloudBlog/tree/main/website/',
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
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
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
        { name: 'description', content: 'Blog techniczny JustCloud.pl - eksperckie artykuły o Microsoft Azure, Azure DevOps, automatyzacji, governance, security i best practices dla transformacji chmurowej' },
        { property: 'og:title', content: 'JustCloud.pl - Azure, DevOps & Cloud Engineering Blog' },
        { property: 'og:description', content: 'Eksperckie artykuły techniczne o Microsoft Azure, Azure DevOps, automatyzacji i cloud transformation' },
        { property: 'og:url', content: 'https://blog.justcloud.pl' },
        { property: 'og:site_name', content: 'JustCloud.pl Blog' },
        { name: 'twitter:title', content: 'JustCloud.pl - Azure, DevOps & Cloud Engineering Blog' },
        { name: 'twitter:description', content: 'Eksperckie artykuły techniczne o Microsoft Azure, Azure DevOps i cloud transformation' },
        { name: 'twitter:site', content: '@RogalaPiotr' },
      ],
      // SEO - Image metadata
      image: 'img/justcloud-social-card.png',
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
            href: 'https://justcloud.pl/index.html#form5-28',
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
                to: 'https://justcloud.pl',
              },
              {
                label: 'Contact',
                to: 'https://web.justcloud.pl/index.html#form5-28',
              },
              {
                label: 'Github',
                to: 'https://github.com/RogalaPiotr/justcloudpublic',
              },
              {
                label: 'Azure DevOps',
                to: 'https://dev.azure.com/justcloudpublic',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Azure Poland',
                href: 'https://azurepoland.pl/',
              },
              {
                label: 'Meetup MAUGP',
                href: 'https://www.meetup.com/Microsoft-Azure-Users-Group-Poland/',
              },
              {
                label: 'Blog',
                to: '/',
              },
              {
                label: 'Newsletter Workshops',
                href: 'https://www.subscribepage.com/wroclaw-newsletter-workshops',
              },
              {
                label: 'Prezentacje',
                href: 'https://github.com/RogalaPiotr/Presentations',
              }
            ],
          },
          {
            title: 'Stay in touch!',
            items: [
              {
                label: 'X',
                href: 'https://x.com/RogalaPiotr',
              },
              {
                label: 'LinkedIn',
                href: 'https://pl.linkedin.com/in/rogalapiotr',
              },
              {
                label: 'Medium',
                href: 'https://piotr-rogala.medium.com',
              },
              {
                label: 'RSS Feed',
                href: 'https://blog.justcloud.pl/rss.xml',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} JustCloud.pl, Inc. Built with Docusaurus.`,
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
