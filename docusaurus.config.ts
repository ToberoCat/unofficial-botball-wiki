import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config = {
    title: 'HTL St. Pölten - Robotics',
    tagline: 'A collection of Robotics related knowledge',
    favicon: 'img/favicon.ico',

    url: 'https://toberocat.github.io',
    baseUrl: '/unofficial-botball-wiki/',

    organizationName: 'htlstp-ecer',
    projectName: 'Robotics',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    editUrl: 'https://github.com/ToberoCat/unofficial-botball-wiki',
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex],
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            },
        ],
    ],
  //   plugins: [
  //       [
  //           'docusaurus-plugin-papersaurus',
  //           {
  //               keepDebugHtmls: false,
  //               addDownloadButton: true,
  //               autoBuildPdfs: true,
  //               author: 'Tobias Madlberger',
  //               getPdfCoverPage: (siteConfig, pluginConfig, pageTitle, version) => {
  //                   return `
  //   <!DOCTYPE html>
  //   <html>
  //   <head>
  //
  //   </head>
  //
  //     <body>
  //       <div style="margin: 2cm;">
  //         <h1 style="color:#005479;font-size:28px;font-family:sans-serif;font-weight:bold">${siteConfig.projectName}<h1>
  //         <h2 style="color:#005479;font-size:16px;font-family:sans-serif;">${(pageTitle || siteConfig.tagline)}<h2>
  //
  //         <dl style="font-family:sans-serif;margin-top:10em;display: flex; flex-flow: row; flex-wrap: wrap; width: 600px; overflow: visible;color:#005479;font-size:12px;font-weight:normal;">
  //           <dt style="margin-top:1em;flex: 0 0 20%; text-overflow: ellipsis; overflow: hidden;">Author:</dt>
  //           <dd style="margin-top:1em;flex:0 0 80%; margin-left: auto; text-align: left;text-overflow: ellipsis; overflow: hidden;">Tobias Madlberger</dd>
  //           <dt style="margin-top:1em;flex: 0 0 20%; text-overflow: ellipsis; overflow: hidden;">Date:</dt>
  //           <dd style="margin-top:1em;flex:0 0 80%; margin-left: auto; text-align: left;text-overflow: ellipsis; overflow: hidden;">${new Date().toISOString().substring(0, 10)}</dd>
  //         </dl>
  //       </div>
  //     </body>
  //
  //   </html>
  // `;
  //               }
  //           },
  //       ],
  //   ],

    themeConfig: {
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'HTL St. Pölten - Robotics',
            logo: {
                alt: 'Robotics Knowledge',
                src: 'img/logo.png',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'sidebar',
                    position: 'left',
                    label: 'Documentation',
                },
                {
                    to: 'docs/category/hardware-library',
                    label: 'Hardware',
                    position: 'left',
                },
                {
                    to: 'docs/category/programming',
                    label: 'Software',
                    position: 'left',
                },
                {
                    to: 'docs/category/sensors--actuators',
                    label: 'Sensors & Actuators',
                    position: 'left',
                },
                {
                    href: 'https://github.com/ToberoCat/unofficial-botball-wiki',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'More',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/ToberoCat/unofficial-botball-wiki',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Tobias Madlberger. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    },
};

export default config;