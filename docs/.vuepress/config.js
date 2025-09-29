import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'new folder',
  description: 'My first VuePress Site',

  base: '/project/',

  theme: defaultTheme({
    lastUpdated: false,   // ❌ disables "Last Updated"
    contributors: false,  // ❌ disables "Contributors"
    

    navbar: [
      { text: "Home", link: "/" },
      { text: "Project", link: "/project" }, 
      { text: "Skill", link: "/skill" }
    ],
  }),

  bundler: viteBundler(),
})
