export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/project.html", { loader: () => import(/* webpackChunkName: "project.html" */"C:/Users/Aso/Desktop/New folder/docs/.vuepress/.temp/pages/project.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/Aso/Desktop/New folder/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Contact Information"} }],
  ["/skill.html", { loader: () => import(/* webpackChunkName: "skill.html" */"C:/Users/Aso/Desktop/New folder/docs/.vuepress/.temp/pages/skill.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/Aso/Desktop/New folder/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
