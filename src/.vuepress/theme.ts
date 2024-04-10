import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://mister-hope.github.io",

  author: {
    name: "Mr.ErWin",
    url: "https://gitee.com/destiny12327",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "./logo.svg",

  repo: "destiny516/destiny516.github.io",

  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: "谢谢阅读",
  displayFooter: true,

  // 博客相关
  blog: {
    description: "一个前端开发者",
    intro: "/intro.html",
    medias:{
      Github:"https://github.com/destiny516",
"稀土掘金":[
  // 链接
  "https://juejin.cn/user/374265276799661",
  // 图标 SVG 字符串
  "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"26px\" height=\"26px\" viewBox=\"0 0 26 26\" enable-background=\"new 0 0 26 26\" xml:space=\"preserve\">  <image id=\"image0\" width=\"26\" height=\"26\" x=\"0\" y=\"0\"\n" +
  "    href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAABGdBTUEAALGPC/xhBQAAACBjSFJN\n" +
  "AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABCFBMVEX////H2PJVl/QlfPUe\n" +
  "d/UfePX///s2gvAAWv8AZv8Aaf8Aav81g/AAYv8AbP8Aa/8le/UAYP8ed/QAX/+81f++1v8fePQA\n" +
  "ZP+Cs/+Ftf8AZf8AXf9lo/9npP8AXP8AY/90q/8Rc/8Sc/91q/8Hbv86if88iv8Gbv8AaP8AYf/O\n" +
  "4P+Htv8AVv+Jt//N3/84if8AWf8AV/+Bs//A2P/B2f9/sf85iv/5+/80hv8zhf8Baf/6+/9kov8S\n" +
  "cv83h/8Udf8Tdf84iP8Rcv8AZ//R4v+Bsv+Ds//Q4v+Ht//L3//N4P+Gtf8AWP8+i/8Hbf8Ibf8G\n" +
  "bP/8/f/7/P8Fa//K3v/I3f/H2PMmfPVHT+hTAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAOxAAADsQB\n" +
  "lSsOGwAAAAd0SU1FB+gECgkiLDZFZKcAAAEnSURBVCjPfZJ5U8IwEMUfLUKb0IS72mDqiUGrUu8b\n" +
  "td73Cd//m1hnpKEM9v2V7G9mZ/ftA4CcYeanRpQ3jRx+VShaNqEpEdsqFmJUctgEOaW4m8UmysrB\n" +
  "sPWXc/22DZSJJpWKZsRElSakVm/UEkaraCbInQZm3AQ1h4h7hInWrGTE42nE/bl5n3ke8xcWfZ5C\n" +
  "dAlYlpzLNrBCR5DqcCJXsRYE69iQhHfUEKnNelfRcAvbO9gNqOo29tQf8lrYVy4TB8ChYO7RMU68\n" +
  "YUPnFDgT3O2du1xcAJeOHiMSV7gOKSE0vMGtiFIThne4F1EkHvD4RMdWls/AyyvQlmMrx/Lf3oGP\n" +
  "T18bpe1V1te3pUbsNf87SjnrlBkByIhNVtiAvjFIR3Rg9OPyD63TLur+FglvAAAAJXRFWHRkYXRl\n" +
  "OmNyZWF0ZQAyMDI0LTA0LTEwVDA5OjM0OjQ0KzAwOjAwWWrVKQAAACV0RVh0ZGF0ZTptb2RpZnkA\n" +
  "MjAyNC0wNC0xMFQwOTozNDo0NCswMDowMCg3bZUAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjQt\n" +
  "MDQtMTBUMDk6MzQ6NDQrMDA6MDB/IkxKAAAAAElFTkSuQmCC\" />\n" +
  "</svg>",
],
      Gitee:"https://gitee.com/destiny12327"
    }
/*
    medias: {
      Baidu: "https://example.com",
      BiliBili: "https://example.com",
      Bitbucket: "https://example.com",
      Dingding: "https://example.com",
      Discord: "https://example.com",
      Dribbble: "https://example.com",
      Email: "mailto:info@example.com",
      Evernote: "https://example.com",
      Facebook: "https://example.com",
      Flipboard: "https://example.com",
      Gitee: "https://example.com",
      GitHub: "https://example.com",
      Gitlab: "https://example.com",
      Gmail: "mailto:info@example.com",
      Instagram: "https://example.com",
      Lark: "https://example.com",
      Lines: "https://example.com",
      Linkedin: "https://example.com",
      Pinterest: "https://example.com",
      Pocket: "https://example.com",
      QQ: "https://example.com",
      Qzone: "https://example.com",
      Reddit: "https://example.com",
      Rss: "https://example.com",
      Steam: "https://example.com",
      Twitter: "https://example.com",
      Wechat: "https://example.com",
      Weibo: "https://example.com",
      Whatsapp: "https://example.com",
      Youtube: "https://example.com",
      Zhihu: "https://example.com",
      MrHope: ["https://mister-hope.com", MR_HOPE_AVATAR],
    },
*/
  },

/*  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },*/

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,

    // 启用之前需安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ["Badge", "VPCard"],
    },

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      // demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

      // 在启用之前安装 chart.js
      // chart: true,

      // insert component easily

      // 在启用之前安装 echarts
      // echarts: true,

      // 在启用之前安装 flowchart.ts
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // 在启用之前安装 katex
      // katex: true,

      // 在启用之前安装 mathjax-full
      // mathjax: true,

      // 在启用之前安装 mermaid
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 reveal.js
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
