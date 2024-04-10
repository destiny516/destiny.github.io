import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    {
        text: "面试笔记",
        icon: "fa-solid fa-clipboard-question",
        link: "/面试笔记/渡一前端/1、var let const.md",
    },
    /*
        {
            text: "博文",
            icon: "pen-to-square",
            prefix: "/posts/",
            children: [
                {
                    text: "苹果",
                    icon: "pen-to-square",
                    prefix: "apple/",
                    children: [
                        {text: "苹果1", icon: "pen-to-square", link: "1"},
                        {text: "苹果2", icon: "pen-to-square", link: "2"},
                        "3",
                        "4",
                    ],
                },
                {
                    text: "香蕉",
                    icon: "pen-to-square",
                    prefix: "banana/",
                    children: [
                        {
                            text: "香蕉 1",
                            icon: "pen-to-square",
                            link: "1",
                        },
                        {
                            text: "香蕉 2",
                            icon: "pen-to-square",
                            link: "2",
                        },
                        "3",
                        "4",
                    ],
                },
                {text: "樱桃", icon: "pen-to-square", link: "cherry"},
                {text: "火龙果", icon: "pen-to-square", link: "dragonfruit"},
                "tomato",
                "strawberry",
            ],
        },
    */
    {
        text: "学习文档",
        icon: "book",
        // link: "https://theme-hope.vuejs.press/zh/",
        children: [
            {text: "网道", icon: "fa-solid fa-globe", link: "https://wangdoc.com/"},
            {text: "语雀", icon: "fa-solid fa-globe", link: "https://www.yuque.com/cuggz/interview"},
            {
                text: "站点导航",
                icon: "fa-solid fa-globe",
                link: "https://brucecqm.github.io/bruceblogpages/resources/navigation/nav.html"
            },
            {text: "前端登顶之巅", icon: "fa-solid fa-globe", link: "https://www.123fe.net/docs/base.html"},
            {text: "一名前端 er 的笔记", icon: "fa-solid fa-globe", link: "https://brucecai55520.gitee.io/my-notes/#/"},
            {text: "小林coding", icon: "fa-solid fa-globe", link: "https://xiaolincoding.com/"},
            {
                text: "廖雪峰的官方网站",
                icon: "fa-solid fa-globe",
                link: "https://www.liaoxuefeng.com/wiki/1022910821149312"
            },
            {text: "阮一峰ES6 入门教程", icon: "fa-solid fa-globe", link: "https://es6.ruanyifeng.com/"},
            {text: "web前端面试-面试官系列", icon: "fa-solid fa-globe", link: "https://vue3js.cn/interview/"},
            {text: "javascript.info", icon: "fa-solid fa-globe", link: "https://zh.javascript.info/"},
            {text: "书栈网", icon: "fa-solid fa-globe", link: "https://www.bookstack.cn/"},
        ]
    }
])
;
