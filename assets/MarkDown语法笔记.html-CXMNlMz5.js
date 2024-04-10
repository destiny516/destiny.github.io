import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,a as t}from"./app-x8bEfOWx.js";const a={},l=t(`<h1 id="markdown语法笔记-md" tabindex="-1"><a class="header-anchor" href="#markdown语法笔记-md"><span>MarkDown语法笔记.md</span></a></h1><h1 id="标题语法" tabindex="-1"><a class="header-anchor" href="#标题语法"><span>标题语法</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># Heading level 1     &lt;h1&gt;Heading level 1&lt;/h1&gt;
## Heading level 2    &lt;h2&gt;Heading level 2&lt;/h2&gt;
### Heading level 3   &lt;h3&gt;Heading level 3&lt;/h3&gt;
#### Heading level 4  &lt;h4&gt;Heading level 4&lt;/h4&gt;
##### Heading level 5 &lt;h5&gt;Heading level 5&lt;/h5&gt;
###### Heading level 6&lt;h6&gt;Heading level 6&lt;/h6&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>不同的 Markdown 应用程序处理 \`#\` 和标题之间的空格方式并不一致。为了兼容考虑，请用一个空格在 \`#\` 和标题之间进行分隔。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="段落语法" tabindex="-1"><a class="header-anchor" href="#段落语法"><span>段落语法</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>要创建段落，请使用空白行将一行或多行文本进行分隔。

ps:不要用空格（spaces）或制表符（ tabs）缩进段落。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="换行语法" tabindex="-1"><a class="header-anchor" href="#换行语法"><span>换行语法</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>在一行的末尾添加两个或多个空格，然后按回车键,即可创建一个换行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="强调语法" tabindex="-1"><a class="header-anchor" href="#强调语法"><span>强调语法</span></a></h1><h3 id="粗体-bold" tabindex="-1"><a class="header-anchor" href="#粗体-bold"><span>粗体（Bold）</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>要加粗文本，请在单词或短语的前后各添加两个星号（asterisks）或下划线（underscores）。如需加粗一个单词或短语的中间部分用以表示强调的话，请在要加粗部分的两侧各添加两个星号（asterisks）。
I just love **bold text**.    I just love &lt;strong&gt;bold text&lt;/strong&gt;.

建议ps:Markdown 应用程序在如何处理单词或短语中间的下划线上并不一致。为兼容考虑，在单词或短语中间部分加粗的话，请使用星号（asterisks）。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="斜体-italic" tabindex="-1"><a class="header-anchor" href="#斜体-italic"><span>斜体（Italic）</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>要用斜体显示文本，请在单词或短语前后添加一个星号（asterisk）或下划线（underscore）。要斜体突出单词的中间部分，请在字母前后各添加一个星号，中间不要带空格。
Italicized text is the *cat&#39;s meow*.    
Italicized text is the &lt;em&gt;cat&#39;s meow&lt;/em&gt;.

要同时用粗体和斜体突出显示文本，请在单词或短语的前后各添加三个星号或下划线。要加粗并用斜体显示单词或短语的中间部分，请在要突出显示的部分前后各添加三个星号，中间不要带空格。
This is really***very***important text.  
This text is &lt;strong&gt;&lt;em&gt;really important&lt;/em&gt;&lt;/strong&gt;.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="引用语法" tabindex="-1"><a class="header-anchor" href="#引用语法"><span>引用语法</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>要创建块引用，请在段落前添加一个 \`&gt;\` 符号。
&gt; Dorothy followed her through many of the beautiful rooms in her castle.

块引用可以包含多个段落。为段落之间的空白行添加一个 \`&gt;\` 符号。
&gt; Dorothy followed her through many of the beautiful rooms in her castle.
&gt;
&gt; The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

块引用可以嵌套。在要嵌套的段落前添加一个 \`&gt;&gt;\` 符号。
&gt; Dorothy followed her through many of the beautiful rooms in her castle.
&gt;
&gt;&gt; The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

块引用可以包含其他 Markdown 格式的元素。并非所有元素都可以使用，你需要进行实验以查看哪些元素有效。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="列表语法" tabindex="-1"><a class="header-anchor" href="#列表语法"><span>列表语法</span></a></h1><h3 id="有序列表" tabindex="-1"><a class="header-anchor" href="#有序列表"><span>有序列表</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>要创建有序列表，请在每个列表项前添加数字并紧跟一个英文句点。数字不必按数学顺序排列，但是列表应当以数字 1 起始。
1. First item  
2. Second item  
3. Third item  
4. Fourth item

1. First item  
8. Second item  
3. Third item  
5. Fourth item

1. First item  
2. Second item  
3. Third item  
    1. Indented item  
    2. Indented item  
4. Fourth item
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="无序列表" tabindex="-1"><a class="header-anchor" href="#无序列表"><span>无序列表</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>要创建无序列表，请在每个列表项前面添加破折号 (-)、星号 (*) 或加号 (+) 。缩进一个或多个列表项可创建嵌套列表。
- First item  
- Second item  
- Third item  
- Fourth item

* First item  
* Second item  
* Third item  
* Fourth item

+ First item  
+ Second item  
+ Third item  
+ Fourth item

ps:在列表中嵌套其他元素

要在保留列表连续性的同时在列表中添加另一种元素，请将该元素缩进四个空格或一个制表符
*   This is the first list item.
*   Here&#39;s the second list item.

    &gt; A blockquote would look great below the second list item.

*   And here&#39;s the third list item.


通常采用四个空格或一个制表符缩进。当它们被放在列表中时，请将它们缩进八个空格或两个制表符。
1.  Open the file.
2.  Find the following code block on line 21:

        &lt;html&gt;
          &lt;head&gt;
            &lt;title&gt;Test&lt;/title&gt;
          &lt;/head&gt;

3.  Update the title to match the name of your website.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="代码语法" tabindex="-1"><a class="header-anchor" href="#代码语法"><span>代码语法</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>要将单词或短语表示为代码，请将其包裹在反引号 (\`) 中。
At the command prompt, type \`nano\`.

转义反引号:
如果你要表示为代码的单词或短语中包含一个或多个反引号，则可以通过将单词或短语包裹在双反引号(\`\`)中。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code> &lt;html&gt; &lt;head&gt; &lt;/head&gt; &lt;/heml&gt;</code></p><h1 id="分割线语法" tabindex="-1"><a class="header-anchor" href="#分割线语法"><span>分割线语法</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>要创建分隔线，请在单独一行上使用三个或多个星号 (\`***\`)、破折号 (\`---\`) 或下划线 (\`___\`) ，并且不能包含其他内容。

ps:为了兼容性，请在分隔线的前后均添加空白行。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="链接语法" tabindex="-1"><a class="header-anchor" href="#链接语法"><span>链接语法</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>链接文本放在中括号内，链接地址放在后面的括号中，链接title可选。
超链接Markdown语法代码：\`[超链接显示名](超链接地址 &quot;超链接title&quot;)\`
对应的HTML代码：\`&lt;a href=&quot;超链接地址&quot; title=&quot;超链接title&quot;&gt;超链接显示名&lt;/a&gt;\`
这是一个链接 [Markdown语法](https://markdown.com.cn)。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="给链接增加title" tabindex="-1"><a class="header-anchor" href="#给链接增加title"><span>给链接增加Title</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>链接title是当鼠标悬停在链接上时会出现的文字，这个title是可选的，它放在圆括号中链接地址后面，跟链接地址之间以空格分隔。
这是一个链接 [Markdown语法](https://markdown.com.cn &quot;最好的markdown教程&quot;)。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="网址和email地址" tabindex="-1"><a class="header-anchor" href="#网址和email地址"><span>网址和Email地址</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>使用尖括号可以很方便地把URL或者email地址变成可点击的链接。
&lt;https://markdown.com.cn&gt;
&lt;fake@example.com&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="带格式化的链接" tabindex="-1"><a class="header-anchor" href="#带格式化的链接"><span>带格式化的链接</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>强调链接, 在链接语法前后增加星号。 要将链接表示为代码，请在方括号中添加反引号。
I love supporting the **[EFF](https://eff.org)**.
This is the *[Markdown Guide](https://www.markdownguide.org)*.
See the section on [\`code\`](#code).
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="图片语法" tabindex="-1"><a class="header-anchor" href="#图片语法"><span>图片语法</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>要添加图像，请使用感叹号 (\`!\`), 然后在方括号增加替代文本，图片链接放在圆括号里，括号里的链接后可以增加一个可选的图片标题文本。

插入图片Markdown语法代码：\`![图片alt](图片链接 &quot;图片title&quot;)\`。

对应的HTML代码：\`&lt;img src=&quot;图片链接&quot; alt=&quot;图片alt&quot; title=&quot;图片title&quot;&gt;\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="链接图片" tabindex="-1"><a class="header-anchor" href="#链接图片"><span>链接图片</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> 给图片增加链接，请将图像的Markdown 括在方括号中，然后将链接添加在圆括号中。

[![沙漠中的岩石图片](/assets/img/shiprock.jpg &quot;Shiprock&quot;)](https://markdown.com.cn)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="表格" tabindex="-1"><a class="header-anchor" href="#表格"><span>表格</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>要添加表，请使用三个或多个连字符（\`---\`）创建每列的标题，并使用管道（\`|\`）分隔每列。您可以选择在表的任一端添加管道。

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对齐" tabindex="-1"><a class="header-anchor" href="#对齐"><span>对齐</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>您可以通过在标题行中的连字符的左侧，右侧或两侧添加冒号（\`:\`），将列中的文本对齐到左侧，右侧或中心。

| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here&#39;s this   |
| Paragraph   | Text        | And more      |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="任务列表语法" tabindex="-1"><a class="header-anchor" href="#任务列表语法"><span>任务列表语法</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>任务列表使您可以创建带有复选框的项目列表。在支持任务列表的Markdown应用程序中，复选框将显示在内容旁边。要创建任务列表，请在任务列表项之前添加破折号\`-\`和方括号\`[ ]\`，并在\`[ ]\`前面加上空格。要选择一个复选框，请在方括号\`[x]\`之间添加 x 。

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43),d=[l];function s(r,c){return i(),n("div",null,d)}const o=e(a,[["render",s],["__file","MarkDown语法笔记.html.vue"]]),u=JSON.parse('{"path":"/%E6%9D%82%E8%AE%B0/MarkDown%E8%AF%AD%E6%B3%95%E7%AC%94%E8%AE%B0.html","title":"MarkDown语法笔记.md","lang":"zh-CN","frontmatter":{"category":["MD语法"],"description":"MarkDown语法笔记.md 标题语法 段落语法 换行语法 强调语法 粗体（Bold） 斜体（Italic） 引用语法 列表语法 有序列表 无序列表 代码语法 <html> <head> </head> </heml> 分割线语法 链接语法 给链接增加Title 网址和Email地址 带格式化的链接 图片语法 链接图片 表格 对齐 任务列表语法","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E6%9D%82%E8%AE%B0/MarkDown%E8%AF%AD%E6%B3%95%E7%AC%94%E8%AE%B0.html"}],["meta",{"property":"og:site_name","content":"ErWin的博客"}],["meta",{"property":"og:title","content":"MarkDown语法笔记.md"}],["meta",{"property":"og:description","content":"MarkDown语法笔记.md 标题语法 段落语法 换行语法 强调语法 粗体（Bold） 斜体（Italic） 引用语法 列表语法 有序列表 无序列表 代码语法 <html> <head> </head> </heml> 分割线语法 链接语法 给链接增加Title 网址和Email地址 带格式化的链接 图片语法 链接图片 表格 对齐 任务列表语法"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/assets/img/shiprock.jpg \\"Shiprock\\""}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-10T07:11:45.000Z"}],["meta",{"property":"article:author","content":"Mr.ErWin"}],["meta",{"property":"article:modified_time","content":"2024-04-10T07:11:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MarkDown语法笔记.md\\",\\"image\\":[\\"https://mister-hope.github.io/assets/img/shiprock.jpg \\\\\\"Shiprock\\\\\\"\\"],\\"dateModified\\":\\"2024-04-10T07:11:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.ErWin\\",\\"url\\":\\"https://gitee.com/destiny12327\\"}]}"]]},"headers":[{"level":3,"title":"粗体（Bold）","slug":"粗体-bold","link":"#粗体-bold","children":[]},{"level":3,"title":"斜体（Italic）","slug":"斜体-italic","link":"#斜体-italic","children":[]},{"level":3,"title":"有序列表","slug":"有序列表","link":"#有序列表","children":[]},{"level":3,"title":"无序列表","slug":"无序列表","link":"#无序列表","children":[]},{"level":3,"title":"给链接增加Title","slug":"给链接增加title","link":"#给链接增加title","children":[]},{"level":3,"title":"网址和Email地址","slug":"网址和email地址","link":"#网址和email地址","children":[]},{"level":3,"title":"带格式化的链接","slug":"带格式化的链接","link":"#带格式化的链接","children":[]},{"level":3,"title":"链接图片","slug":"链接图片","link":"#链接图片","children":[]},{"level":3,"title":"对齐","slug":"对齐","link":"#对齐","children":[]}],"git":{"createdTime":1712733105000,"updatedTime":1712733105000,"contributors":[{"name":"ma","email":"destiny0402@163.com","commits":1}]},"readingTime":{"minutes":6.02,"words":1805},"filePathRelative":"杂记/MarkDown语法笔记.md","localizedDate":"2024年4月10日","excerpt":"\\n<h1>标题语法</h1>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code># Heading level 1     &lt;h1&gt;Heading level 1&lt;/h1&gt;\\n## Heading level 2    &lt;h2&gt;Heading level 2&lt;/h2&gt;\\n### Heading level 3   &lt;h3&gt;Heading level 3&lt;/h3&gt;\\n#### Heading level 4  &lt;h4&gt;Heading level 4&lt;/h4&gt;\\n##### Heading level 5 &lt;h5&gt;Heading level 5&lt;/h5&gt;\\n###### Heading level 6&lt;h6&gt;Heading level 6&lt;/h6&gt;\\n</code></pre></div>","autoDesc":true}');export{o as comp,u as data};
