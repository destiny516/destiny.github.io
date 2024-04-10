---
star: true
category:
- JS基础
---
# 20、Node事件循环
## *Node.js* 与浏览器的事件循环有何区别？

### 进程与线程

我们经常说 *JavaScript* 是一门单线程语言，指的是一个进程里只有一个主线程，那到底什么是线程？什么是进程？

进程是 *CPU* 资源分配的最小单位，而线程是 *CPU* 调度的最小单位。

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-15-032136.png" alt="image-20211015112136231" style="zoom:50%;" />



- 进程好比图中的工厂，有单独的专属自己的工厂资源。

- 线程好比图中的工人，多个工人在一个工厂中协作工作，工厂与工人是 *1:n* 的关系。也就是说**一个进程由一个或多个线程组成，线程是一个进程中代码的不同执行路线**。

- 工厂的空间是工人们共享的，这象征**一个进程的内存空间是共享的，每个线程都可用这些共享内存**。

- 多个工厂之间独立存在。

接下来我们回过头来看多进程和多线程的概念：

- 多进程：在同一个时间里，同一个计算机系统中如果允许两个或两个以上的进程处于运行状态。多进程带来的好处是明显的，比如你可以听歌的同时，打开编辑器敲代码，编辑器和听歌软件的进程之间丝毫不会相互干扰。

- 多线程：程序中包含多个执行流，即在一个程序中可以同时运行多个不同的线程来执行不同的任务，也就是说允许单个程序创建多个并行执行的线程来完成各自的任务。

### 浏览器内核

简单来说浏览器内核是通过取得页面内容、整理信息（应用 *CSS* ）、计算和组合最终输出可视化的图像结果，通常也被称为渲染引擎。

浏览器内核是多线程，在内核控制下各线程相互配合以保持同步，一个浏览器通常由以下常驻线程组成：

- *GUI* 渲染线程
- *JavaScript* 引擎线程
- 定时触发器线程
- 事件触发线程
- 异步 *http* 请求线程
#### *GUI* 渲染线程

- 主要负责页面的渲染，解析 *HTML*、*CSS*，构建 *DOM* 树，布局和绘制等。
- 当界面需要重绘或者由于某种操作引发回流时，将执行该线程。
- 该线程与 *JS* 引擎线程互斥，当执行 *JS* 引擎线程时，*GUI* 渲染会被挂起，当任务队列空闲时，主线程才会去执行 *GUI* 渲染。
#### *JavaScript* 引擎线程

- 该线程当然是主要负责处理  *JavaScript*  脚本，执行代码。
- 也是主要负责执行准备好待执行的事件，即定时器计数结束，或者异步请求成功并正确返回时，将依次进入任务队列，等待 *JS* 引擎线程的执行。
- 当然，该线程与 *GUI* 渲染线程互斥，当 *JS* 引擎线程执行 *JavaScript* 脚本时间过长，将导致页面渲染的阻塞。
#### 定时触发器线程

- 负责执行异步定时器一类的函数的线程，如：*setTimeout、setInterval*。
- 主线程依次执行代码时，遇到定时器，会将定时器交给该线程处理，当计数完毕后，事件触发线程会将计数完毕后的事件加入到任务队列的尾部，等待 *JS* 引擎线程执行。
#### 事件触发线程

- 主要负责将准备好的事件交给 *JS* 引擎线程执行。
比如 *setTimeout* 定时器计数结束， *ajax* 等异步请求成功并触发回调函数，或者用户触发点击事件时，该线程会将整装待发的事件依次加入到任务队列的队尾，等待 *JS* 引擎线程的执行。

#### 异步 *http* 请求线程

- 负责执行异步请求一类的函数的线程，如：*Promise、fetch、ajax* 等。
- 主线程依次执行代码时，遇到异步请求，会将函数交给该线程处理，当监听到状态码变更，如果有回调函数，事件触发线程会将回调函数加入到任务队列的尾部，等待 *JS* 引擎线程执行。


### 浏览器中的事件循环

#### 宏任务和微任务

事件循环中的异步队列有两种：宏任务（ *macro* ）队列和微任务（ *micro* ）队列。

**宏任务队列有一个，微任务队列只有一个**。

- 常见的宏任务有：*setTimeout、setInterval、requestAnimationFrame、script*等。
- 常见的微任务有：*new Promise( ).then(回调)、MutationObserver* 等。

#### 事件循环流程

一个完整的事件循环过程，可以概括为以下阶段：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-15-041213.png" alt="image-20211015121213384" style="zoom:50%;" />

- 一开始执行栈空，我们可以把**执行栈认为是一个存储函数调用的栈结构，遵循先进后出的原则**。微任务队列空，宏任务队列里有且只有一个 *script* 脚本（整体代码）。

- 全局上下文（ *script* 标签）被推入执行栈，同步代码执行。在执行的过程中，会判断是同步任务还是异步任务，通过对一些接口的调用，可以产生新的宏任务与微任务，它们会分别被推入各自的任务队列里。同步代码执行完了，*script* 脚本会被移出宏任务队列，这个过程本质上是队列的宏任务的执行和出队的过程。

- 上一步我们出队的是一个宏任务，这一步我们处理的是微任务。但需要注意的是：当一个宏任务执行完毕后，会执行所有的微任务，也就是将整个微任务队列清空。

- 执行渲染操作，更新界面

- 检查是否存在 *Web worker* 任务，如果有，则对其进行处理

- 上述过程循环往复，直到两个队列都清空

宏任务和微任务的执行流程，总结起来就是：

**当某个宏任务执行完后，会查看是否有微任务队列。如果有，先执行微任务队列中的所有任务，如果没有，会读取宏任务队列中排在最前的任务，执行宏任务的过程中，遇到微任务，依次加入微任务队列。栈空后，再次读取微任务队列里的任务，依次类推。**


##### 题目示例1
```js
console.log('script start');
setTimeout(function() {
    console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
    console.log('promise1');
}).then(function() {
    console.log('promise2');
});

console.log('script end');
```

上面的代码输出的结果为：

```js
script start
script end
promise1
promise2
setTimeout
```

##### 题目示例2
```js
Promise.resolve().then(()=>{
  console.log('Promise1')
  setTimeout(()=>{
    console.log('setTimeout2')
  },0)
})
setTimeout(()=>{
  console.log('setTimeout1')
  Promise.resolve().then(()=>{
    console.log('Promise2')
  })
},0)
```

上面的代码输出的结果为：

```js
Promise1
setTimeout1
Promise2
setTimeout2
```


### *Node.js* 中的事件循环



#### *Node.js* 事件循环介绍



*Node.js* 中的事件循环和浏览器中的是完全不相同的东西。

*Node.js* 采用 *V8* 作为 *JS* 的解析引擎，而 *I/O* 处理方面使用了自己设计的 *libuv*，*libuv* 是一个基于事件驱动的跨平台抽象层，封装了不同操作系统一些底层特性，对外提供统一的 *API*，事件循环机制也是它里面的实现。

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-15-041258.png" alt="image-20211015121258759" style="zoom:50%;" />



可以看出 *Node.JS* 的事件循环比浏览器端复杂很多。*Node.js* 的运行机制如下:

- *V8* 引擎解析 *JavaScript* 脚本。
- 解析后的代码，调用 *Node API*。
- *libuv* 库负责 *Node API* 的执行。它将不同的任务分配给不同的线程，形成一个事件循环，以异步的方式将任务的执行结果返回给 *V8* 引擎。
- *V8* 引擎再将结果返回给用户。



整个架构图如下所示：

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-29-080543.png" alt="image-20211029160543365" style="zoom:50%;" />

#### 事件循环的 *6* 个阶段



其中 *libuv* 引擎中的事件循环分为 *6* 个阶段，它们会按照顺序反复运行。每当进入某一个阶段的时候，都会从对应的回调队列中取出函数去执行。当队列为空或者执行的回调函数数量到达系统设定的阈值，就会进入下一阶段。

<img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-15-054611.jpg" alt="node" style="zoom: 90%;" />

从上图中，大致看出 *Node.js* 中的事件循环的顺序：

外部输入数据 –-> 轮询阶段（ *poll* ）-–> 检查阶段（ *check* ）-–> 关闭事件回调阶段（ *close callback* ）–-> 定时器检测阶段（ *timer* ）–-> *I/O* 事件回调阶段（ *I/O callbacks* ）-–>闲置阶段（ *idle、prepare* ）–->轮询阶段（按照该顺序反复运行）...

以上 *6* 个阶段所做的事情如下：

- *timers* 阶段：这个阶段执行 *timer*（ *setTimeout、setInterval* ）的回调
- *I/O callbacks* 阶段：处理一些上一轮循环中的少数未执行的 *I/O* 回调
- *idle、prepare* 阶段：仅 *Node.js* 内部使用
- *poll* 阶段：获取新的 *I/O* 事件, 适当的条件下 *Node.js* 将阻塞在这里
- *check* 阶段：执行 *setImmediate( )* 的回调
- *close callbacks* 阶段：执行 *socket* 的 *close* 事件回调

注意：**上面六个阶段都不包括 *process.nextTick( )***

接下去我们详细介绍 *timers、poll、check* 这 *3* 个阶段，因为日常开发中的绝大部分异步任务都是在这 *3* 个阶段处理的。



***timer* 阶段**



*timers* 阶段会执行 *setTimeout* 和 *setInterval* 回调，并且是由 *poll* 阶段控制的。同样，**在 *Node.js* 中定时器指定的时间也不是准确时间，只能是尽快执行**。



***poll* 阶段**



*poll* 是一个至关重要的阶段，这一阶段中，系统会做两件事情：

- 回到 *timer* 阶段执行回调
- 执行 *I/O* 回调

并且在进入该阶段时如果没有设定了 *timer* 的话，会发生以下两件事情：

- 如果 *poll* 队列不为空，会遍历回调队列并同步执行，直到队列为空或者达到系统限制
- 如果 *poll* 队列为空时，会有两件事发生：
  - 如果有 *setImmediate* 回调需要执行，*poll* 阶段会停止并且进入到 *check* 阶段执行回调
  - 如果没有 *setImmediate* 回调需要执行，会等待回调被加入到队列中并立即执行回调，这里同样会有个超时时间设置防止一直等待下去

当然设定了 *timer* 的话且 *poll* 队列为空，则会判断是否有 *timer* 超时，如果有的话会回到 *timer* 阶段执行回调。

假设 *poll* 被堵塞，那么即使 *timer* 已经到时间了也只能等着，这也是为什么上面说定时器指定的时间并不是准确的时间。例如：

```js
const start = Date.now();
setTimeout(function f1() {
    console.log("setTimeout", Date.now() - start);
}, 200);

const fs = require('fs');

fs.readFile('./index.js', 'utf-8', function f2() {
    console.log('readFile');
    const start = Date.now();
    // 强行延时 500 毫秒
    while (Date.now() - start < 500) { }
})
```



***check* 阶段**

*setImmediate( )* 的回调会被加入 *check* 队列中，从事件循环的阶段图可以知道，*check* 阶段的执行顺序在 *poll* 阶段之后。

我们先来看个例子：

```js
console.log('start')
setTimeout(() => {
  console.log('timer1')
  Promise.resolve().then(function() {
    console.log('promise1')
  })
}, 0)
setTimeout(() => {
  console.log('timer2')
  Promise.resolve().then(function() {
    console.log('promise2')
  })
}, 0)
Promise.resolve().then(function() {
  console.log('promise3')
})
console.log('end')
// 输出结果：start => end => promise3 => timer1 => promise1 => timer2 => promise2
```

一开始执行同步任务，依次打印出 *start end*，并将 *2* 个 *timer* 依次放入 *timer* 队列，之后会立即执行微任务队列，所以打印出 *promise3*。

然后进入 *timers* 阶段，执行 *timer1* 的回调函数，打印 *timer1*，发现有一个 *promise.then* 回调将其加入到微任务队列并且立即执行，之后同样的步骤执行 *timer2*，打印 *timer2* 以及 *promise2*。