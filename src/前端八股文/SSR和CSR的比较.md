# SSR和CSR的比较.md
## 写在前面

上周开始学习Node.js 的模板引擎jade这一章，突然讲到SSR（Server-Side-Rendering，服务器端渲染），想到以前大学的时候学的jsp也是所谓的服务器端渲染模板，当时只是在想怎样把一个页面做出来，所以页面是否重新渲染，性能问题，其实都不在我的考虑范围之内。现在借此机会，顺带了解一下服务器端渲染和客户端渲染有何不同。遗憾的是，网上文章的总结并不完整。这时候就只能依仗Google大法了。本文分别从两者的概念，主要的不同，优劣势列举等等去分析CSR和SSR。

## 概念

SSR(Server Side Rendering) ：传统的渲染方式，由服务端把渲染的完整的页面吐给客户端。这样减少了一次客户端到服务端的一次http请求，加快相应速度，一般用于首屏的性能优化。

CSR(Client Side Rendering)：是一种目前流行的渲染方式，它依赖的是运行在客户端的JS，用户首次发送请求只能得到小部分的指引性HTML代码。第二次请求将会请求更多包含HTML字符串的JS文件。

**简而言之，就是数据拼接HTML字符串这件事放在服务端还是客户端造成了两者区别。**

## 两者有何不同

服务器端渲染的优势在于首屏渲染速度块，简单来讲它不需要来回多次往返于客户端和服务端。但是其性能等众多因素会影响用户体验，比如说：网速，在线活跃人数，服务器的物理位置等等。而客户端渲染则和服务端渲染相反，因为多次和服务器的交互导致首屏加载速度慢。但一旦这些请求完成之后，用户和页面之间的交互时用户体验就会好很多。

用一个现实生活的例子来看：假如从超市买东西吃，以SSR的角度来看，你每次在超市买完随即吃完再走，每次饿了都需要出发去超市。而从CSR的角度来看，就是你从超市购买许多原材料再拿回家去自己煮，多了能放冰箱，这样每次肚子饿了就不需要每次都往超市跑，唯一麻烦一点在于你得花时间挑选食材。

**简而言之，SSR强在首屏渲染。而CSR强在用户和页面多交互的场景。**

## 服务器端渲染如何工作

上面其实提到服务器端渲染就是将一个完整的HTML发送给客户端，客户端只负责HTML的解析。只不过它会被网速等等客观因素所约束造成用户体验不佳的情况。而且如果面临客户端和服务器多次交互的情况就显得非常吃亏，即使在页面只是有稍加改动的地方都需要重新请求到一个完整页面并且重新进行渲染。这谁顶得住阿？服务器它老人家也顶不住。

下面用实例展现一下服务器端渲染的HTML长什么样子：

假设你需要访问的域名叫： example.testsite.com.

```html
<html>
  <head>
    <meta charset="utf-8">
    <title>Example Website</title>
  </head>
  <body>
    <h1>My Website</h1>
    <p>This is an example of my new website</p>
    <a href="http://example.testsite.com/other.html.">Link</a>
  </body>
</html>
```

我们此时点击 ##Link## 这个链接，弹出来下面这个页面 other.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Example Website</title>
  </head>
  <body>
    <h1>My Website</h1>
    <p>This is an example of my new website</p>
    <p>This is some more content from the other.html</p>
  </body>
</html>
```

可以看出来两个页面的差异就只有一行，但是渲染过程时将整个页面重新渲染，而不仅仅只是发生更改的一行，在当今越加复杂的页面来看动辄几百行的代码来看，要是每次发生少量更改都需要重新渲染整个页面显然是不符合潮流的。

**从上面的页面特征来看，使用服务器端渲染的返回的页面是完整的HTML页面。**

## 客户端渲染如何工作

客户端渲染代表渲染内容部分转嫁到JS身上。客户端只是从服务器得到相对简单的HTML文档，然后使用JS文件对页面的显示内容进行控制。就像Vue.js 用的就是这种方式，还是用刚才那个例子，看看用客户端渲染是怎么做的。

假设你想要访问的域名是http://example.testsite.com

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Example Website</title>
</head>
<body>
  <div id="root">
    <app></app>
  </div>
    <!--下面两个js文件控制HTML的显示内容 -->
  <script src="https://vuejs.org"type="text/javascript"></script>
  <script src="location/of/app.js"type="text/javascript"></script>
</body>
</html>
```

从以上的html页面上你只可以看到自定义的组件名id为root的div标签，而所有的逻辑处理都在app.js里面，所有如果需要成功展示出页面原有的样子就需要app.js这个文件下载到本地，如果通过直接访问的方式页面只会一片空白。

因此，下面补充app.js文件内容：

```js
// this is app.js
var data = {
        title:"My Website",
        message:"This is an example of my new website"
      }
  Vue.component('app', {
    template:
    `
    <div>
    <h1>{{title}}</h1>
    <p id="moreContent">{{message}}</p>
    <a v-on:click='newContent'>Link</a>
    </div>
    `,
    data: function() {
      return data;
    },
    methods:{
      newContent: function(){
        var node = document.createElement('p');
        var textNode = document.createTextNode('This is some more content from the other.html');
        node.appendChild(textNode);
        document.getElementById('moreContent').appendChild(node);
      }
    }
  })
  new Vue({
    el: '#root',
  });
```

目前来看，从显示效果来看能够展示和之前SSR一样的效果，不同的是，当我们点击Link链接的时候，页面不会和服务器之间又交互。此时只对Link那一行的代码做了修改，其余位置保持不变。而不是像SSR做了整个页面的重新渲染。

但是这里暴露的问题也很明显，但控制页面的所有js文件如果没有完全加载的话，整个页面是渲染不出来的，这才是导致客户端渲染弱于首屏渲染的原因。

**从这个例子来看，可以看出客户端渲染的页面特征是包含有js链接的script标签。**

## 总结SSR和CSR的优势和劣势

![](https://pic4.zhimg.com/80/v2-98c7d2c7974a1aa694203e3135531e3b_720w.webp)

从以上表格来看，两者方案的优点和确定但很明显，**SSR更有利于首屏渲染，CSR更有利于页面交互。**