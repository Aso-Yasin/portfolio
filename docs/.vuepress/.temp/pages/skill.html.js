import comp from "C:/Users/Aso/Desktop/New folder/docs/.vuepress/.temp/pages/skill.html.vue"
const data = JSON.parse("{\"path\":\"/skill.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Technical Skills\",\"slug\":\"technical-skills\",\"link\":\"#technical-skills\",\"children\":[]},{\"level\":2,\"title\":\"Networking Skills\",\"slug\":\"networking-skills\",\"link\":\"#networking-skills\",\"children\":[]},{\"level\":2,\"title\":\"Soft Skills\",\"slug\":\"soft-skills\",\"link\":\"#soft-skills\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"skill.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
