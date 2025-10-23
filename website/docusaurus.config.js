// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'JustCloud Blog',
  tagline: 'Technical articles',
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

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

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
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          routeBasePath: '/',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: [
            './src/css/custom-overrides.css',
          ],
        },
        gtag: {
          trackingID: 'G-T278Y9D28E',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
  
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{ name: 'JustCloud the best quality of knowledge', content: 'azure, aws, gcp, devops, automation, azure devops, blog, microsoft, linux, azure policy, cloud transformation, digital transformation, governance, security, pipelines, github' }],
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
          src: 'img/logo.svg',
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
                label: 'Twitter',
                href: 'https://twitter.com/RogalaPiotr',
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

  // Additional webpack configuration for hot reload
  plugins: [
    function (context, options) {
      return {
        name: 'custom-webpack-config',
        configureWebpack(config, isServer, utils) {
          return {
            watchOptions: {
              poll: 1000,
              aggregateTimeout: 300,
              ignored: /node_modules/,
            },
          };
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
        docsRouteBasePath: '/docs',
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
