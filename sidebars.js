// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  notesSidebar: [
    'intro',
    {
      type: 'category',
      label: '学习目录',
      items: ['advanced-math', 'inorganic-chemistry', 'physical-chemistry'],
    },
  ],
};

export default sidebars;
