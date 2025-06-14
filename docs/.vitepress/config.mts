import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
// https://vitepress.dev/reference/site-config
export default withMermaid({
  ignoreDeadLinks: [
    "http://localhost:3000"
  ],
  title: "FGate",
  description: "FlowGate Docs",
  head: [
    ['link', { rel: 'icon', href: '/FGate.png' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '家', link: '/' },
      { text: '首页', link: '/get-start' },
      { text: '安装', link: '/install' },
    ],

    sidebar: [
      {
        text: '目录',
        items: [
          { text: '首页', link: '/get-start' },
          { text: '安装', link: '/install', items: [{ text: 'Nexus', link: '/install/nexus' }] }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JohnRichard4096/FGateDoc' }
    ],

  },
})
/*export default defineConfig({
  title: "FGate",
  description: "FGate API Docs",
  head: [
    ['link', { rel: 'icon', href: '/FGate.png' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '家', link: '/' },
      { text: '开始', link: '/get-start' },
    ],

    sidebar: [
      {
        text: '目录',
        items: [
          { text: '开始', link: '/get-start' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JohnRichard4096/FGateDoc' }
    ],
    
  },

})
*/