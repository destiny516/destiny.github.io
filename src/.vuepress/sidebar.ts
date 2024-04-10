import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
      "",
    {
      text: "面试笔记",
      icon: "laptop-code",
      prefix: "面试笔记/",
      children: "structure",
    },
    {
      text: "前端八股文",
      icon: "fa-solid fa-book",
      prefix: "前端八股文/",
      children: "structure",
    },
    {
      text: "杂记",
      icon: "fa-solid fa-screwdriver-wrench",
      prefix: "杂记/",
      children: "structure",
    },
/*    "intro",
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    },*/
  ],
});
