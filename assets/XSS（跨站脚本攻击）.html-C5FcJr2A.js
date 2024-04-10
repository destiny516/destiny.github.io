import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as i,a as o}from"./app-0RY1_pBP.js";const n={},a=o('<h1 id="xss-跨站脚本攻击-md" tabindex="-1"><a class="header-anchor" href="#xss-跨站脚本攻击-md"><span>XSS（跨站脚本攻击）.md</span></a></h1><p>XSS（跨站脚本攻击）是一种常见的Web应用程序安全漏洞，攻击者可以通过在受害者浏览器中执行恶意脚本来窃取用户信息、篡改页面内容或进行其他恶意行为。</p><p>XSS攻击基于Web应用程序的不合理信任机制，攻击者利用应用程序对用户输入数据的不加过滤和验证，将带有恶意脚本的输入提交到服务器，在服务器返回给用户浏览器的页面中插入并执行恶意脚本，从而实现攻击目的。</p><h3 id="xss攻击可以分为以下三种类型" tabindex="-1"><a class="header-anchor" href="#xss攻击可以分为以下三种类型"><span>XSS攻击可以分为以下三种类型：</span></a></h3><ol><li><p>反射型XSS：攻击者构造出恶意URL，欺骗用户点击并向服务器发送请求，服务器将恶意脚本携带在响应中，让用户的浏览器执行该脚本。</p></li><li><p>存储型XSS：攻击者将带有恶意脚本的数据存储到服务器端，当用户浏览该网页时，服务器将恶意脚本返回给用户浏览器并执行。</p></li><li><p>DOM Based XSS：攻击者利用客户端脚本在DOM中修改了页面内容，导致页面存在漏洞。</p></li></ol><h3 id="为了避免xss攻击-可以采取以下预防措施" tabindex="-1"><a class="header-anchor" href="#为了避免xss攻击-可以采取以下预防措施"><span>为了避免XSS攻击，可以采取以下预防措施：</span></a></h3><ol><li><p>输入验证和过滤：对用户输入数据进行过滤和验证，防止恶意脚本的注入。建议使用白名单机制，只允许特定格式的数据输入，禁止一些危险字符的输入，如&lt;, &gt;, &amp;等。</p></li><li><p>输出转义：对页面输出的数据进行HTML转义，将特殊字符转换为实体，防止浏览器将其识别为HTML标签，从而避免恶意脚本的执行。</p></li><li><p>CSP（内容安全策略）：通过限制页面中可执行的脚本来源，来防范XSS攻击。CSP可以通过HTTP头或页面中的meta标签等方式进行配置。</p></li><li><p>Cookie安全属性设置：设置Cookie的HttpOnly属性和Secure属性，防止攻击者窃取用户的Cookie，并利用Cookie进行XSS攻击。</p></li></ol><p>总之，XSS攻击是一种常见的Web应用程序安全漏洞，可以通过输入验证和过滤、输出转义、CSP等预防措施来避免。建议Web应用程序开发人员和管理员加强安全意识，积极采取措施保护用户信息和系统安全。</p>',8),p=[a];function r(l,S){return t(),i("div",null,p)}const m=e(n,[["render",r],["__file","XSS（跨站脚本攻击）.html.vue"]]),d=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E5%85%AB%E8%82%A1%E6%96%87/XSS%EF%BC%88%E8%B7%A8%E7%AB%99%E8%84%9A%E6%9C%AC%E6%94%BB%E5%87%BB%EF%BC%89.html","title":"XSS（跨站脚本攻击）.md","lang":"zh-CN","frontmatter":{"description":"XSS（跨站脚本攻击）.md XSS（跨站脚本攻击）是一种常见的Web应用程序安全漏洞，攻击者可以通过在受害者浏览器中执行恶意脚本来窃取用户信息、篡改页面内容或进行其他恶意行为。 XSS攻击基于Web应用程序的不合理信任机制，攻击者利用应用程序对用户输入数据的不加过滤和验证，将带有恶意脚本的输入提交到服务器，在服务器返回给用户浏览器的页面中插入并执行恶...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E5%89%8D%E7%AB%AF%E5%85%AB%E8%82%A1%E6%96%87/XSS%EF%BC%88%E8%B7%A8%E7%AB%99%E8%84%9A%E6%9C%AC%E6%94%BB%E5%87%BB%EF%BC%89.html"}],["meta",{"property":"og:site_name","content":"ErWin的博客"}],["meta",{"property":"og:title","content":"XSS（跨站脚本攻击）.md"}],["meta",{"property":"og:description","content":"XSS（跨站脚本攻击）.md XSS（跨站脚本攻击）是一种常见的Web应用程序安全漏洞，攻击者可以通过在受害者浏览器中执行恶意脚本来窃取用户信息、篡改页面内容或进行其他恶意行为。 XSS攻击基于Web应用程序的不合理信任机制，攻击者利用应用程序对用户输入数据的不加过滤和验证，将带有恶意脚本的输入提交到服务器，在服务器返回给用户浏览器的页面中插入并执行恶..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-10T07:11:45.000Z"}],["meta",{"property":"article:author","content":"Mr.ErWin"}],["meta",{"property":"article:modified_time","content":"2024-04-10T07:11:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"XSS（跨站脚本攻击）.md\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-10T07:11:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.ErWin\\",\\"url\\":\\"https://gitee.com/destiny12327\\"}]}"]]},"headers":[{"level":3,"title":"XSS攻击可以分为以下三种类型：","slug":"xss攻击可以分为以下三种类型","link":"#xss攻击可以分为以下三种类型","children":[]},{"level":3,"title":"为了避免XSS攻击，可以采取以下预防措施：","slug":"为了避免xss攻击-可以采取以下预防措施","link":"#为了避免xss攻击-可以采取以下预防措施","children":[]}],"git":{"createdTime":1712733105000,"updatedTime":1712733105000,"contributors":[{"name":"ma","email":"destiny0402@163.com","commits":1}]},"readingTime":{"minutes":2.08,"words":623},"filePathRelative":"前端八股文/XSS（跨站脚本攻击）.md","localizedDate":"2024年4月10日","excerpt":"\\n<p>XSS（跨站脚本攻击）是一种常见的Web应用程序安全漏洞，攻击者可以通过在受害者浏览器中执行恶意脚本来窃取用户信息、篡改页面内容或进行其他恶意行为。</p>\\n<p>XSS攻击基于Web应用程序的不合理信任机制，攻击者利用应用程序对用户输入数据的不加过滤和验证，将带有恶意脚本的输入提交到服务器，在服务器返回给用户浏览器的页面中插入并执行恶意脚本，从而实现攻击目的。</p>\\n<h3>XSS攻击可以分为以下三种类型：</h3>\\n<ol>\\n<li>\\n<p>反射型XSS：攻击者构造出恶意URL，欺骗用户点击并向服务器发送请求，服务器将恶意脚本携带在响应中，让用户的浏览器执行该脚本。</p>\\n</li>\\n<li>\\n<p>存储型XSS：攻击者将带有恶意脚本的数据存储到服务器端，当用户浏览该网页时，服务器将恶意脚本返回给用户浏览器并执行。</p>\\n</li>\\n<li>\\n<p>DOM Based XSS：攻击者利用客户端脚本在DOM中修改了页面内容，导致页面存在漏洞。</p>\\n</li>\\n</ol>","autoDesc":true}');export{m as comp,d as data};
