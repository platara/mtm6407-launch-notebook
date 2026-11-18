import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Launch Notebook',
  description: 'An unofficial GTA VI classroom guide',
  cleanUrls: false,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Launch facts', link: '/launch' },
      { text: 'Design board', link: '/board' },
      { text: 'Map notes', link: '/places' },
      { text: 'Sources', link: '/sources' }
    ]
  }
})
