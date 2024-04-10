# 常用npm命令.md
>本记录使用的是npm cli 9.x 版本，参考网址是[npm中文文档](https://nodejs.cn/npm/cli/v9/)，只是总结了我工作中会用到或者在看了注释之后感觉会用到的部分命令，所以这个文档不是完整的。

# npm cache
>操作包缓存
```
npm cache add <package-spec>
npm cache clean [<key>]
npm cache ls [<name>@<version>]
npm cache verify
```
* -add: 将指定的包添加到本地缓存。此命令主要供 npm 内部使用，但它可以提供一种将数据显式添加到本地安装缓存的方法。
- clean: 删除缓存文件夹中的所有数据。请注意，这通常是不必要的，因为 npm 的缓存是自我修复的并且可以抵抗数据损坏问。(如果要使用，后面加--force或-f)
- verify: 验证缓存文件夹的内容，垃圾收集任何不需要的数据，并验证缓存索引和所有缓存数据的完整性。
# npm ci
此命令与 [`npm install`](https://nodejs.cn/npm/cli/v9/commands/npm-ci/##c78ebdcd71c64edead90d2247d4a5a8c) 类似，不同之处在于它旨在用于自动化环境，例如测试平台、持续集成和部署——或任何您希望确保对依赖项进行全新安装的情况。

使用 `npm install` 和 `npm ci` 的主要区别是：

- 项目必须有一个现有的 `package-lock.json` 或 `npm-shrinkwrap.json`。
- 如果包锁中的依赖项与 `package.json` 中的依赖项不匹配，`npm ci` 将退出并出错，而不是更新包锁。
- `npm ci` 一次只能安装整个项目：无法使用此命令添加单个依赖项。
- 如果 `node_modules` 已经存在，它将在 `npm ci` 开始安装之前自动删除。
- 它永远不会写入 `package.json` 或任何包锁：安装基本上是冻结的。
# npm doctor
>检查您的环境
```
npm doctor [ping] [registry] [versions] [environment] [permissions] [cache] 
```
`npm doctor` 运行一组检查以确保您的 npm 安装具有管理 JavaScript 包所需的内容。npm 主要是一个独立的工具，但它确实有一些必须满足的基本要求：

- Node.js 和 git 必须可由 npm 执行。
- 主 npm 注册表 `registry.npmjs.com` 或其他使用注册表 API 的服务可用。
- npm 使用的目录 `node_modules`（本地和全局）存在并且可以由当前用户写入。
- npm 缓存存在，并且其中的包 tarball 没有损坏。
# npm explore
>浏览已安装的包
```
npm explore <pkg> [ -- <command>]
```
# npm help-search
>获取有关 npm 的帮助
```
npm help-search <text> 在文档中查找属于
```

# npm init
>创建一个 package.json 文件

# npm install
>安装一个包

此命令安装一个包和它所依赖的任何包。如果包有一个包锁，或者一个 npm 收缩封装文件，或者一个纱线锁文件，依赖项的安装将由它驱动，遵循以下优先顺序：
- `npm-shrinkwrap.json`
- `package-lock.json`
- `yarn.lock`

**默认情况下，`npm install` 将任何指定的包保存到 `dependencies` 中。此外，您可以使用一些额外的标志来控制它们的保存位置和方式：**
- `-D, --save-dev`：包将出现在您的 `devDependencies` 中。

-  `npm install [<@scope>/]<name>@<version>`：
安装指定版本的包。如果版本尚未发布到注册表，这将失败。
```
npm install sax@0.1.1 
npm install @myorg/privatepackage@1.5.0
```
- `-f` 或 `--force` 参数将强制 npm 获取远程资源，即使磁盘上存在本地副本。

### 配置

- save 
>默认值：`true`，除非在使用 `npm update` 时默认为 `false`
>类型：布尔值

将已安装的包作为依赖项保存到 `package.json` 文件中。
与 `npm rm` 命令一起使用时，从 `package.json` 中删除依赖关系。
如果设置为 `false`，也会阻止写入 `package-lock.json`。

- save-exact
>默认值：false
>类型：布尔值

保存到 package.json 的依赖项将使用精确的版本进行配置，而不是使用 npm 的默认 semver 范围运算符。

- global
> 默认值：false
> 类型：布尔值

在 "global" 模式下运行，以便将包安装到 `prefix` 文件夹而不是当前工作目录。

- 包安装到 `{prefix}/lib/node_modules` 文件夹，而不是当前工作目录。
- bin 文件链接到 `{prefix}/bin`
- 手册页链接到 `{prefix}/share/man`

# npm ls

>列出已安装的包

# npm uninstall
>删除一个包

# npm undate
>更新包   别名: up, upgrade, udpate

# npm view
>查看注册表信息
```
npm view connect //要从注册表中查看有关 `connect` 包的信息
npm view connect versions //要显示 `connect` 包版本历史
```