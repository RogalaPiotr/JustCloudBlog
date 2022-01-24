// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'JustCloud Blog',
  tagline: 'JustCloud Blog',
  url: 'https://blog.justcloud.pl',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://raw.githubusercontent.com/RogalaPiotr/JustCloudWeb/main/assets/images/favicon-new.ico',
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

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          editLocalizedFiles: false,
          routeBasePath: '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
                label: 'RSS Feed',
                href: 'https://blog.justcloud.pl/rss.xml',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} JustCloud.pl, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;