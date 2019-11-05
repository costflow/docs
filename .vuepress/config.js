module.exports = {
  title: 'Costflow Docs',
  description: 'Get started with Costflow',
  themeConfig: {
    logo: '/img/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: 'http://blog.costflow.io/' },
      { text: 'Playground', link: 'http://playground.costflow.io/' },
      { text: 'Github', link: 'https://github.com/costflow' }
    ],
    lastUpdated: 'Last Updated',
    repo: 'costflow/docs',
    editLinks: true,
    displayAllHeaders: true,
    sidebar: [
      {
        title: 'Get Started',
        path: '/',
        collapsable: false,
        sidebarDepth: 1
      },
      {
        title: 'Costflow Syntax',
        path: '/syntax/',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/syntax/v0.2',
          '/zh/syntax/',
          '/syntax/changelog'
        ]
      },
      {
        title: 'Costflow Hub',
        path: '/hub/',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/hub/get-started',
          '/hub/best-practices',
          '/hub/privacy'
        ]
      },
      {
        title: 'Costflow CLI',
        path: '/cli/'
      },
      {
        title: 'Costflow Parser',
        path: '/parser/'
      },
      {
        title: 'Useful links',
        path: '/resources/links',
        collapsable: true,
        sidebarDepth: 1,
        children: [
        ]
      }
    ]
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-141355121-4'
      }
    ]
  ]
}
