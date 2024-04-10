import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as i,a}from"./app-0RY1_pBP.js";const s={},n=a(`<h1 id="设置多个git账户-md" tabindex="-1"><a class="header-anchor" href="#设置多个git账户-md"><span>设置多个git账户.md</span></a></h1><blockquote><p>使用场景：在多个平台（GitHub，gitee，gitlab等）有项目，需要设置多个账户 需要清楚，我们在第一次设置的name，email，一般设置的时全局的（global），这两个参数只是作为git操作人的标识，在git平台中是没有实际意义的（既与git平台的登录账号没有关系，暂时是这么认为的。）它除了可以设置全局还可以设置本地（local）。全局或本地的配置信息都在文件config（无后缀名）中。</p></blockquote><h3 id="_1、删除git全局配置" tabindex="-1"><a class="header-anchor" href="#_1、删除git全局配置"><span>1、删除git全局配置</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>查看全局或局部的用户名和邮箱
git config --global user.name
git config --global user.email

git config --global --list
--global 可以换成--local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将他们删除</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git config --global --unset user.name &quot;你的名字&quot;
git config --global --unset user.email &quot;你的邮箱&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、生成新的ssh-keys" tabindex="-1"><a class="header-anchor" href="#_2、生成新的ssh-keys"><span>2、生成新的SSH keys</span></a></h3><p>使用cmd或Git Bash Here（鼠标右键打开）</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>ssh-keygen -t rsa -C &quot;自己git账号的邮箱&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>PS C:\\Users\\ma&gt; ssh-keygen -t rsa -C &quot;destiny0402@163.com&quot; Generating public/private rsa key pair. Enter file in which to save the key (C:\\Users\\你电脑的名字/.ssh/id_rsa):（//可以在这里设置你想保存的地址，id_rsa建议重命名成又标识的） Created directory &#39;C:\\Users\\你电脑的名字/.ssh&#39;. Enter passphrase (empty for no passphrase):（设置密码，enter跳过） Enter same passphrase again:（确定密码，enter跳过） Your identification has been saved in C:\\Users你电脑的名字/.ssh/id_rsa. Your public key has been saved in C:\\Users\\你电脑的名字/.ssh/id_rsa.pub. The key fingerprint is: SHA256:（生成的SHA256 可以与git平台上配置ssh公钥的SHA256进行对比。）</p><p>进入指定目录（默认是C:\\Users\\你电脑的名字/.ssh/id_rsa），查看生成的两个文件id_rsa和id_rsa.pub</p><h3 id="_3、将公钥配置到代码管理平台" tabindex="-1"><a class="header-anchor" href="#_3、将公钥配置到代码管理平台"><span>3、将公钥配置到代码管理平台</span></a></h3><blockquote><p>每个管理平台配置都差不多，在设置-ssh公钥中，粘贴id_rsa.pub中的内容</p></blockquote><h3 id="_4、创建config文件" tabindex="-1"><a class="header-anchor" href="#_4、创建config文件"><span>4、创建config文件</span></a></h3><blockquote><p>注意1：没有后缀，可以先创建config.txt，编辑完之后把后缀删掉 注意2：最好用EditPlus等编辑工具打开，避免出编码问题 注意3：尽量手敲，如果直接复制，注意删除一下前后空格。（下面有示例）</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Host 任意主机别名1，后面会用到,建议gitee.com
    HostName gitee.com
    IdentityFile ~/.ssh/自己的ssh key的文件1
    PreferredAuthentications publickey
    User git平台账号用户名
    
Host 任意主机别名2，后面会用到，建议github.com
    HostName github.com
    IdentityFile ~/.ssh/自己的ssh key的文件2
    PreferredAuthentications publickey
    User git平台账号用户名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><s>配置文件中的 HostName 是远程仓库的访问地址，这里可以是 IP，也可以是域名。Host 是用来拉取的仓库的别名，配不配置都行。如果 HostName 没配置的话，那就必须把 Host 配置为仓库 IP 地址或者域名，而非别名。</s></p><h3 id="_5、测试是否成功" tabindex="-1"><a class="header-anchor" href="#_5、测试是否成功"><span>5、测试是否成功</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>ssh -T git@github.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6、第一次使用" tabindex="-1"><a class="header-anchor" href="#_6、第一次使用"><span>6、第一次使用</span></a></h3><p>clone项目时，复制ssh的链接</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git@github.com:XXXX/test.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中的github.com改成配置文件中的Host，所以在设置config时建议将Host设置成域名。（正常应该时不需要这么麻烦的，但是根据上面删除线的提示我没有成功。）</p>`,23),l=[n];function d(r,o){return t(),i("div",null,l)}const u=e(s,[["render",d],["__file","设置多个git账户.html.vue"]]),m=JSON.parse('{"path":"/%E6%9D%82%E8%AE%B0/%E8%AE%BE%E7%BD%AE%E5%A4%9A%E4%B8%AAgit%E8%B4%A6%E6%88%B7.html","title":"设置多个git账户.md","lang":"zh-CN","frontmatter":{"description":"设置多个git账户.md 使用场景：在多个平台（GitHub，gitee，gitlab等）有项目，需要设置多个账户 需要清楚，我们在第一次设置的name，email，一般设置的时全局的（global），这两个参数只是作为git操作人的标识，在git平台中是没有实际意义的（既与git平台的登录账号没有关系，暂时是这么认为的。）它除了可以设置全局还可以设置...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E6%9D%82%E8%AE%B0/%E8%AE%BE%E7%BD%AE%E5%A4%9A%E4%B8%AAgit%E8%B4%A6%E6%88%B7.html"}],["meta",{"property":"og:site_name","content":"ErWin的博客"}],["meta",{"property":"og:title","content":"设置多个git账户.md"}],["meta",{"property":"og:description","content":"设置多个git账户.md 使用场景：在多个平台（GitHub，gitee，gitlab等）有项目，需要设置多个账户 需要清楚，我们在第一次设置的name，email，一般设置的时全局的（global），这两个参数只是作为git操作人的标识，在git平台中是没有实际意义的（既与git平台的登录账号没有关系，暂时是这么认为的。）它除了可以设置全局还可以设置..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-10T07:11:45.000Z"}],["meta",{"property":"article:author","content":"Mr.ErWin"}],["meta",{"property":"article:modified_time","content":"2024-04-10T07:11:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设置多个git账户.md\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-10T07:11:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.ErWin\\",\\"url\\":\\"https://gitee.com/destiny12327\\"}]}"]]},"headers":[{"level":3,"title":"1、删除git全局配置","slug":"_1、删除git全局配置","link":"#_1、删除git全局配置","children":[]},{"level":3,"title":"2、生成新的SSH keys","slug":"_2、生成新的ssh-keys","link":"#_2、生成新的ssh-keys","children":[]},{"level":3,"title":"3、将公钥配置到代码管理平台","slug":"_3、将公钥配置到代码管理平台","link":"#_3、将公钥配置到代码管理平台","children":[]},{"level":3,"title":"4、创建config文件","slug":"_4、创建config文件","link":"#_4、创建config文件","children":[]},{"level":3,"title":"5、测试是否成功","slug":"_5、测试是否成功","link":"#_5、测试是否成功","children":[]},{"level":3,"title":"6、第一次使用","slug":"_6、第一次使用","link":"#_6、第一次使用","children":[]}],"git":{"createdTime":1712733105000,"updatedTime":1712733105000,"contributors":[{"name":"ma","email":"destiny0402@163.com","commits":1}]},"readingTime":{"minutes":2.61,"words":784},"filePathRelative":"杂记/设置多个git账户.md","localizedDate":"2024年4月10日","excerpt":"\\n<blockquote>\\n<p>使用场景：在多个平台（GitHub，gitee，gitlab等）有项目，需要设置多个账户\\n需要清楚，我们在第一次设置的name，email，一般设置的时全局的（global），这两个参数只是作为git操作人的标识，在git平台中是没有实际意义的（既与git平台的登录账号没有关系，暂时是这么认为的。）它除了可以设置全局还可以设置本地（local）。全局或本地的配置信息都在文件config（无后缀名）中。</p>\\n</blockquote>\\n<h3>1、删除git全局配置</h3>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>查看全局或局部的用户名和邮箱\\ngit config --global user.name\\ngit config --global user.email\\n\\ngit config --global --list\\n--global 可以换成--local\\n</code></pre></div>","autoDesc":true}');export{u as comp,m as data};
