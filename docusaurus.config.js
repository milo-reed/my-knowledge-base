// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '辉少的知识库',
  tagline: '把数学、化学与学习笔记整理成一张清爽的知识网络',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://milo-reed.github.io',
  baseUrl: '/my-knowledge-base/',
  organizationName: 'milo-reed',
  projectName: 'my-knowledge-base',
  trailingSlash: true,
  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '辉少的知识库',
        logo: {
          alt: '辉少的知识库 Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'notesSidebar',
            position: 'left',
            label: '我的笔记',
          },
          {
            href: 'https://github.com/milo-reed/my-knowledge-base',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '知识库',
            items: [
              {
                label: '知识总览',
                to: '/docs/intro',
              },
              {
                label: '高等数学',
                to: '/docs/advanced-math',
              },
            ],
          },
          {
            title: '学习目录',
            items: [
              {
                label: '无机化学',
                to: '/docs/inorganic-chemistry',
              },
              {
                label: '物理化学',
                to: '/docs/physical-chemistry',
              },
            ],
          },
          {
            title: '项目',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/milo-reed/my-knowledge-base',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 辉少的知识库.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
