import comp from "C:/Users/Aso/Desktop/New folder/docs/.vuepress/.temp/pages/project.html.vue"
const data = JSON.parse("{\"path\":\"/project.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Projects\",\"slug\":\"projects\",\"link\":\"#projects\",\"children\":[{\"level\":3,\"title\":\"Weather App with Alerts\",\"slug\":\"weather-app-with-alerts\",\"link\":\"#weather-app-with-alerts\",\"children\":[]},{\"level\":3,\"title\":\"QR Code Generator & Scanner\",\"slug\":\"qr-code-generator-scanner\",\"link\":\"#qr-code-generator-scanner\",\"children\":[]},{\"level\":3,\"title\":\"Real Estate Web Application\",\"slug\":\"real-estate-web-application\",\"link\":\"#real-estate-web-application\",\"children\":[]},{\"level\":3,\"title\":\"CI/CD Pipeline with Jenkins\",\"slug\":\"ci-cd-pipeline-with-jenkins\",\"link\":\"#ci-cd-pipeline-with-jenkins\",\"children\":[]},{\"level\":3,\"title\":\"🐳 Dockerized Web Application\",\"slug\":\"🐳-dockerized-web-application\",\"link\":\"#🐳-dockerized-web-application\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"project.md\"}")
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
