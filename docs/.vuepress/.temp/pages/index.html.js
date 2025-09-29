import comp from "C:/Users/Aso/Desktop/New folder/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Contact Information\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroText\":\"Aso Yasin Mohammed\",\"tagline\":\"DevOps Engineer | CI/CD & Cloud Enthusiast\",\"actions\":[{\"text\":\"My Projects →\",\"link\":\"/project\"}],\"features\":[{\"title\":\"CI/CD & Automation\",\"details\":\"Jenkins, GitHub Actions, GitLab CI, Automation Pipelines, Scripting\"},{\"title\":\"Containerization & Deployment\",\"details\":\"Docker, Kubernetes (basics), Deployment Strategies, Orchestration\"},{\"title\":\"Networking\",\"details\":\"IP Configuration, Routing, SSH, SCP, SFTP, Debugging Tools (ping, traceroute, netstat, curl, wget)\"}],\"footer\":null},\"headers\":[{\"level\":2,\"title\":\"About Me\",\"slug\":\"about-me\",\"link\":\"#about-me\",\"children\":[]},{\"level\":2,\"title\":\"Education\",\"slug\":\"education\",\"link\":\"#education\",\"children\":[]},{\"level\":2,\"title\":\"Languages\",\"slug\":\"languages\",\"link\":\"#languages\",\"children\":[]},{\"level\":2,\"title\":\"Interests\",\"slug\":\"interests\",\"link\":\"#interests\",\"children\":[]},{\"level\":2,\"title\":\"Professional Focus\",\"slug\":\"professional-focus\",\"link\":\"#professional-focus\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"README.md\"}")
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
