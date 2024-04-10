import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as s,a}from"./app-x8bEfOWx.js";const i={},t=a(`<h1 id="js中的基本类型和引用类型" tabindex="-1"><a class="header-anchor" href="#js中的基本类型和引用类型"><span>js中的基本类型和引用类型</span></a></h1><h2 id="_1-javascript中的变量类型有哪些" tabindex="-1"><a class="header-anchor" href="#_1-javascript中的变量类型有哪些"><span>1.JavaScript中的变量类型有哪些？</span></a></h2><p>（1）基本类型（基本类型）：字符串（string）、数值（number）、布尔值（boolean）、undefined、null （这5种基本数据类型是按值访问的，因为可以操作保存在变量中的实际的值）、symbol (ECMAScript 2016新增了一种基本数据类型 )</p><p>（2）引用类型：对象（Object）、数组（Array）、函数（Function）、正则（RegExp）、日期（Date）、特殊的基本包装类型(String、Number、Boolean)以及单体内置对象(Global、Math)。</p><h2 id="_2-基本类型-值类型-和引用类型的区别" tabindex="-1"><a class="header-anchor" href="#_2-基本类型-值类型-和引用类型的区别"><span>2.基本类型(值类型)和引用类型的区别</span></a></h2><p>① 基本类型：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> 1、占用空间固定，保存在栈中
 （当一个方法执行时，每个方法都会建立自己的内存栈，在这个方法内定义的变量将会逐个放入这块栈内存里，随着方法的执行结束，
 这个方法的内存栈也将自然销毁了。因此，所有在方法中定义的变量都是放在栈内存中的；栈中存储的是基础变量以及一些对象的引用变量，
 基础变量的值是存储在栈中，而引用变量存储在栈中的是指向堆中的数组或者对象的地址，这就是为何修改引用类型总会影响到其他指向这个地址  的引用变量）

 2、保存与复制的是值本身

 3、使用typeof检测数据的类型

 4、基本类型数据是值类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>② 引用类型：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> 1、占用空间不固定，保存在堆中（当我们在程序中创建一个对象时，这个对象将被保存到运行时数据区中，以便反复利用（因为对象的创建成本通常较大）
 ，这个运行时数据区就是堆内存。堆内存中的对象不会随方法的结束而销毁，即使方法结束后，这个对象还可能被另一个引用变量所引用（方法的参数传递时很常见），
 则这个对象依然不会被销毁，只有当一个对象没有任何引用变量引用它时，系统的垃圾回收机制才会在核实的时候回收它。）

 2、保存与复制的是指向对象的一个指针

 3、使用instanceof检测数据类型

 4、使用new()方法构造出的对象是引用型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码实例：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// 值类型：Number、string、bollean、undefined
var a = 100
var b = a
a = 200
console.log(b) // 100 保存与复制的是值本身
 
 
// 引用类型：对象、数组、函数、null(空指针)
// 可以扩展属性
var a = {age:20}
var b = a
b.age = 21 
console.log(a.age) // 21 

/**
* 利用typeof来区分基本类型
* typeof 区分不出来引用类型（除了函数）
*/ 
typeof undefined // undefined
typeof &#39;abc&#39; // string
typeof 123 // number
typeof true // boolean

typeof {} // object
typeof [] // object
typeof null // object
typeof console.log //function

/**
* 用instanceof来区分引用类型
* 如果变量是给定引用类型（根据它的原型链来识别）的实例，那么instanceof 操作符就会返回 true
*/ 
console.log(person instanceof Object); // 变量 person 是 Object 吗？
console.log(colors instanceof Array); // 变量 colors 是 Array 吗？
console.log(pattern instanceof RegExp); // 变量 pattern 是 RegExp 吗？

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结： ① 基本类型的复制后，之间变量是互不影响的，因为他们在栈中都有自己开辟的空间，因此修改这些基本变量是互不影响的；而引用类型复制只是栈中开辟了一个储存另一份指向堆中引用变量的指针地址，并且它们都指向同一个引用变量，所以修改一个引用变量的值，两者都会同时修改； ② 如果只是检测基本变量的类型是使用typeof就可以了，但如果涉及到引用变量的类型时就应该使用instanceof</p><p>进一步理解：</p><p>基本类型：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token parameter">count</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">var</span> num1 <span class="token operator">=</span> count<span class="token punctuation">;</span>
          count <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> 
          <span class="token keyword">return</span> num1<span class="token punctuation">;</span> 
         <span class="token punctuation">}</span> 
 <span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span> 
 <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span> 
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10	</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 20</span>
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// error</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结合基本类型在栈中的存储方式：首先在调用方法之前，栈中开辟了一个空间储存count并且值为20 ------- 执行函数computed中进行了赋值操作，将count赋值给num1，此时栈内存中就多了一个num1的基本变量，并且它的值为count就是20，然后count基本变量对应的值改为10，栈中就只会修改count变量对应的值，而num1对应的变量仍然为20 ------- 执行完函数computed返回的num1的值，因此var result = num1就是20，但此时栈里面num1其实就是上面提到的在方法内定义的变量将会逐个放入这块栈内存里，随着方法的执行结束,这个方法的内存栈也将自然销毁了，所以执行完后num1这个局部变量就会被回收销毁，而定义的全局变量count result则仍然存在栈内存中。</p><p>![[基本数据类型的赋值过程.png]] 引用类型：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>function setName(obj) { 
         obj.name = &quot;张三&quot;; 
         var person1 = obj;
         person1.name = &quot;李四&quot;;
         person2 = new Object();
         person2.name = &quot;王五&quot;
       } 
       
  var person = new Object(); 
  var person2;
  
  setName(person);
  setName(person2);
  console.log(person.name); // 李四
  console.log(person2.name); // 王五
  console.log(person1.name); // error

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结合引用类型在栈堆中的存储方式：首先在调用方法之前，栈中开辟了两个空间储存person和person2，其中person为引用类型，因此对应的生成一个指针地址0x001指向堆中的空对象｛｝，而person2并不知道类型，因此先放着 ------- 分别执行函数setName中，一开始person的堆中的引用变量有了name值，其次在函数内部定义了局部变量person1，此时栈内存中就多了一个person1并且生成一个指针0x002，并且它也指向person的引用变量，然后person1修改了name的值，此时由于person的指针也是指向同一个堆内存变量，因此他们name的值都为李四，同理person2也有自己的指针指向自己的堆内存变量 ------- 每执行完函数是系统都会进行垃圾回收机制，此时就只有person1在外部是没有引用的，因此将其对应栈堆内存清除，而person person2外部有引用，因此不会随着方法执行完毕，而销毁；</p>`,19),l=[t];function o(c,r){return e(),s("div",null,l)}const u=n(i,[["render",o],["__file","js 基本数据类型与引用数据类型.html.vue"]]),v=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E5%85%AB%E8%82%A1%E6%96%87/js%20%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E4%B8%8E%E5%BC%95%E7%94%A8%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html","title":"js中的基本类型和引用类型","lang":"zh-CN","frontmatter":{"description":"js中的基本类型和引用类型 1.JavaScript中的变量类型有哪些？ （1）基本类型（基本类型）：字符串（string）、数值（number）、布尔值（boolean）、undefined、null （这5种基本数据类型是按值访问的，因为可以操作保存在变量中的实际的值）、symbol (ECMAScript 2016新增了一种基本数据类型 ) （2...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/%E5%89%8D%E7%AB%AF%E5%85%AB%E8%82%A1%E6%96%87/js%20%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E4%B8%8E%E5%BC%95%E7%94%A8%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html"}],["meta",{"property":"og:site_name","content":"ErWin的博客"}],["meta",{"property":"og:title","content":"js中的基本类型和引用类型"}],["meta",{"property":"og:description","content":"js中的基本类型和引用类型 1.JavaScript中的变量类型有哪些？ （1）基本类型（基本类型）：字符串（string）、数值（number）、布尔值（boolean）、undefined、null （这5种基本数据类型是按值访问的，因为可以操作保存在变量中的实际的值）、symbol (ECMAScript 2016新增了一种基本数据类型 ) （2..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-10T07:11:45.000Z"}],["meta",{"property":"article:author","content":"Mr.ErWin"}],["meta",{"property":"article:modified_time","content":"2024-04-10T07:11:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"js中的基本类型和引用类型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-10T07:11:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.ErWin\\",\\"url\\":\\"https://gitee.com/destiny12327\\"}]}"]]},"headers":[{"level":2,"title":"1.JavaScript中的变量类型有哪些？","slug":"_1-javascript中的变量类型有哪些","link":"#_1-javascript中的变量类型有哪些","children":[]},{"level":2,"title":"2.基本类型(值类型)和引用类型的区别","slug":"_2-基本类型-值类型-和引用类型的区别","link":"#_2-基本类型-值类型-和引用类型的区别","children":[]}],"git":{"createdTime":1712733105000,"updatedTime":1712733105000,"contributors":[{"name":"ma","email":"destiny0402@163.com","commits":1}]},"readingTime":{"minutes":5.3,"words":1591},"filePathRelative":"前端八股文/js 基本数据类型与引用数据类型.md","localizedDate":"2024年4月10日","excerpt":"\\n<h2>1.JavaScript中的变量类型有哪些？</h2>\\n<p>（1）基本类型（基本类型）：字符串（string）、数值（number）、布尔值（boolean）、undefined、null （这5种基本数据类型是按值访问的，因为可以操作保存在变量中的实际的值）、symbol (ECMAScript 2016新增了一种基本数据类型 )</p>\\n<p>（2）引用类型：对象（Object）、数组（Array）、函数（Function）、正则（RegExp）、日期（Date）、特殊的基本包装类型(String、Number、Boolean)以及单体内置对象(Global、Math)。</p>","autoDesc":true}');export{u as comp,v as data};
