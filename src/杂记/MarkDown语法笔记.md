---
category:
  - MD语法
---
# MarkDown语法笔记.md

# 标题语法
```
# Heading level 1     <h1>Heading level 1</h1>
## Heading level 2    <h2>Heading level 2</h2>
### Heading level 3   <h3>Heading level 3</h3>
#### Heading level 4  <h4>Heading level 4</h4>
##### Heading level 5 <h5>Heading level 5</h5>
###### Heading level 6<h6>Heading level 6</h6>
```

```
不同的 Markdown 应用程序处理 `#` 和标题之间的空格方式并不一致。为了兼容考虑，请用一个空格在 `#` 和标题之间进行分隔。
```
# 段落语法
```
要创建段落，请使用空白行将一行或多行文本进行分隔。

ps:不要用空格（spaces）或制表符（ tabs）缩进段落。
```
# 换行语法
```
在一行的末尾添加两个或多个空格，然后按回车键,即可创建一个换行
```
# 强调语法
### 粗体（Bold）
```
要加粗文本，请在单词或短语的前后各添加两个星号（asterisks）或下划线（underscores）。如需加粗一个单词或短语的中间部分用以表示强调的话，请在要加粗部分的两侧各添加两个星号（asterisks）。
I just love **bold text**.    I just love <strong>bold text</strong>.

建议ps:Markdown 应用程序在如何处理单词或短语中间的下划线上并不一致。为兼容考虑，在单词或短语中间部分加粗的话，请使用星号（asterisks）。
```
### 斜体（Italic）
```
要用斜体显示文本，请在单词或短语前后添加一个星号（asterisk）或下划线（underscore）。要斜体突出单词的中间部分，请在字母前后各添加一个星号，中间不要带空格。
Italicized text is the *cat's meow*.    
Italicized text is the <em>cat's meow</em>.

要同时用粗体和斜体突出显示文本，请在单词或短语的前后各添加三个星号或下划线。要加粗并用斜体显示单词或短语的中间部分，请在要突出显示的部分前后各添加三个星号，中间不要带空格。
This is really***very***important text.  
This text is <strong><em>really important</em></strong>.
```
# 引用语法
```
要创建块引用，请在段落前添加一个 `>` 符号。
> Dorothy followed her through many of the beautiful rooms in her castle.

块引用可以包含多个段落。为段落之间的空白行添加一个 `>` 符号。
> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

块引用可以嵌套。在要嵌套的段落前添加一个 `>>` 符号。
> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

块引用可以包含其他 Markdown 格式的元素。并非所有元素都可以使用，你需要进行实验以查看哪些元素有效。

```
# 列表语法
### 有序列表
```
要创建有序列表，请在每个列表项前添加数字并紧跟一个英文句点。数字不必按数学顺序排列，但是列表应当以数字 1 起始。
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
```
### 无序列表
```
要创建无序列表，请在每个列表项前面添加破折号 (-)、星号 (*) 或加号 (+) 。缩进一个或多个列表项可创建嵌套列表。
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
*   Here's the second list item.

    > A blockquote would look great below the second list item.

*   And here's the third list item.


通常采用四个空格或一个制表符缩进。当它们被放在列表中时，请将它们缩进八个空格或两个制表符。
1.  Open the file.
2.  Find the following code block on line 21:

        <html>
          <head>
            <title>Test</title>
          </head>

3.  Update the title to match the name of your website.
```
# 代码语法
```
要将单词或短语表示为代码，请将其包裹在反引号 (`) 中。
At the command prompt, type `nano`.

转义反引号:
如果你要表示为代码的单词或短语中包含一个或多个反引号，则可以通过将单词或短语包裹在双反引号(``)中。
```
`
    <html>
		<head>
		</head>
	</heml>
`
# 分割线语法
```
要创建分隔线，请在单独一行上使用三个或多个星号 (`***`)、破折号 (`---`) 或下划线 (`___`) ，并且不能包含其他内容。

ps:为了兼容性，请在分隔线的前后均添加空白行。
```
# 链接语法
```
链接文本放在中括号内，链接地址放在后面的括号中，链接title可选。
超链接Markdown语法代码：`[超链接显示名](超链接地址 "超链接title")`
对应的HTML代码：`<a href="超链接地址" title="超链接title">超链接显示名</a>`
这是一个链接 [Markdown语法](https://markdown.com.cn)。
```

### 给链接增加Title
```
链接title是当鼠标悬停在链接上时会出现的文字，这个title是可选的，它放在圆括号中链接地址后面，跟链接地址之间以空格分隔。
这是一个链接 [Markdown语法](https://markdown.com.cn "最好的markdown教程")。
```

### 网址和Email地址
```
使用尖括号可以很方便地把URL或者email地址变成可点击的链接。
<https://markdown.com.cn>
<fake@example.com>
```

### 带格式化的链接
```
强调链接, 在链接语法前后增加星号。 要将链接表示为代码，请在方括号中添加反引号。
I love supporting the **[EFF](https://eff.org)**.
This is the *[Markdown Guide](https://www.markdownguide.org)*.
See the section on [`code`](#code).
```
# 图片语法
```
要添加图像，请使用感叹号 (`!`), 然后在方括号增加替代文本，图片链接放在圆括号里，括号里的链接后可以增加一个可选的图片标题文本。

插入图片Markdown语法代码：`![图片alt](图片链接 "图片title")`。

对应的HTML代码：`<img src="图片链接" alt="图片alt" title="图片title">`
```
### 链接图片
```
 给图片增加链接，请将图像的Markdown 括在方括号中，然后将链接添加在圆括号中。

[![沙漠中的岩石图片](/assets/img/shiprock.jpg "Shiprock")](https://markdown.com.cn)
```

# 表格
```
要添加表，请使用三个或多个连字符（`---`）创建每列的标题，并使用管道（`|`）分隔每列。您可以选择在表的任一端添加管道。

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

```
### 对齐
```
您可以通过在标题行中的连字符的左侧，右侧或两侧添加冒号（`:`），将列中的文本对齐到左侧，右侧或中心。

| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |
```
# 任务列表语法
```
任务列表使您可以创建带有复选框的项目列表。在支持任务列表的Markdown应用程序中，复选框将显示在内容旁边。要创建任务列表，请在任务列表项之前添加破折号`-`和方括号`[ ]`，并在`[ ]`前面加上空格。要选择一个复选框，请在方括号`[x]`之间添加 x 。

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

```

