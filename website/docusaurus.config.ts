import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'JustCloud Blog',
  tagline: 'Technical articles',
  url: 'https://blog.justcloud.pl',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://raw.githubusercontent.com/RogalaPiotr/JustCloudWeb/gh-pages/assets/images/favicon-new-1.ico',
  organizationName: 'RogalaPiotr', // Usually your GitHub org/user name.
  projectName: 'JustCloudBlog', // Usually your repo name.
  trailingSlash: false,

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
        highlightSearchTermsOnTargetPage: true,
        indexDocs: false,
        blogRouteBasePath: "/"
      },
    ],
    require.resolve('docusaurus-plugin-image-zoom')
  ],


  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en','pl'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          showReadingTime: true,
          editLocalizedFiles: false,
          routeBasePath: '/',
          blogSidebarCount: 'ALL',
          postsPerPage: 4,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
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
        alt: 'JustCloud.pl',
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
      //logo: {
      //  alt: 'JustCloud Logo',
      //  src: 'https://web.justcloud.pl/assets/images/justcloud-logo-high-kwadrat-1256x1256.png',
      //  href: 'https://justcloud.pl',
      //  width: 400,
      //  height: 400,
      //},
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
  } satisfies Preset.ThemeConfig,
};

export default config;
