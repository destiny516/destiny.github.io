---
category:
  - JS基础
---
# 9、this 指向总结.md

## *this* 指向总结
*this* 可以用在构造函数之中，表示实例对象。除此之外，*this* 还可以用在别的场合。**但不管是什么场合，*this* 都有一个共同点：它总是返回一个对象**。

- 在函数体中，非显式或隐式地简单调用函数时，在严格模式下，函数内的 *this* 会被绑定到 *undefined* 上，在非严格模式下则会被绑定到全局对象 *window/global* 上。
- 一般使用 *new* 方法调用构造函数时，构造函数内的 *this* 会被绑定到新创建的对象上。
- 一般通过 *call/apply/bind* 方法显式调用函数时，函数体内的 *this* 会被绑定到指定参数的对象上。
- 一般通过上下文对象调用函数时，函数体内的 *this* 会被绑定到该对象上。
- 在箭头函数中，*this* 的指向是由外层（函数或全局）作用域来决定的。
### 全局环境中的 *this*

例题 *1*：

```js
function f1() {
    console.log(this);
}

function f2() {
    'use strict'
    console.log(this);
}

f1(); // window or global
f2(); // undefined
```

这种情况相对简单、直接，函数在浏览器全局环境下被简单调用，在非严格模式下 *this* 指向 *window*，在通过 *use strict* 指明严格模式的情况下指向 *undefined*。

虽然上面的题目比较基础，但是需要注意上面题目的变种，例如

例题 *2*：

```js
const foo = {
    bar : 10,
    fn : function(){
        console.log(this); // window or global
        console.log(this.bar); // undefined
    }
}
var fn1 = foo.fn;
fn1();
```

^977b9c

这里的 *this* 仍然指向 *window*。虽然 *fn* 函数在 *foo* 对象中作为该对象的一个方法，但是在赋值给 *fn1* 之后，*fn1* 仍然是在 *window* 的全局环境下执行的。因此上面的代码仍然会输出 *window* 和 *undefined*。

还是上面这道题目，如果改成如下的形式

例题 *3*：

```js
const foo = {
    bar : 10,
    fn : function(){
        console.log(this); // { bar: 10, fn: [Function: fn] }
        console.log(this.bar); // 10
    }
}
foo.fn();
```

这时，*this* 指向的是最后调用它的对象，在 *foo.fn( )* 语句中，this 指向的是 *foo* 对象。

### 上下文对象调用中的 *this*


如果一个函数是以对象的方法的形式被调用的，那么**this** 只想该对象
```js
const student = {
    name: 'zhangsan',
    fn: function () {
        return this;
    }
}
console.log(student.fn() === student); // true
```

在上面的代码中，*this* 指向当前的对象 *student*，所以最终会返回 *true*。

当存在更复杂的调用关系时，如以下代码中的嵌套关系，*this* 将指向最后调用它的对象，例如

```js
const student = {
    name: 'zhangsan',
    son: {
        name: 'zhangxiaosan',
        fn: function () {
            return this.name
        }
    }
}
console.log(student.son.fn()); // zhangxiaosan
```
```js
const o1 = {
    text: 'o1',
    fn: function () {
        return this.text;
    }
}

const o2 = {
    text: 'o2',
    fn: function () {
        return o1.fn();
    }
}

const o3 = {
    text: 'o3',
    fn: function () {
        var fn = o1.fn;
        return fn();//相当于普通函数形式调用
    }
}

console.log(o1.fn()); // o1
console.log(o2.fn()); // o1
console.log(o3.fn()); // undefined
```
[[#^977b9c | 参考]]

### *this* 指向绑定事件的元素

*DOM* 元素绑定事件时，事件处理函数里面的 *this* 指向绑定了事件的元素。

这个地方一定要注意它和 *target* 的区别，*target* 是指向触发事件的元素。

```js
// this 是绑定事件的元素
// target 是触发事件的元素 和 srcElememnt 等价
let colorList = document.getElementById("color-list");
colorList.addEventListener("click", function (event) {
  console.log('this:', this);
  console.log('target:', event.target);
  console.log('srcElement:', event.srcElement);
})
```

### 改变 *this* 指向

#### 1. *call、apply、bind* 方法修改 *this* 指向
由于 *JavaScript*  中 *this* 的指向受函数运行环境的影响，指向经常改变，使得开发变得困难和模糊，所以在封装 *sdk* 或者写一些复杂函数的时候经常会用到 *this* 指向绑定，以避免出现不必要的问题。

*call、apply、bind* 基本都能实现这一功能，起到确定 *this* 指向的作用

#### ***Function.prototype.call( )***

*call* 方法可以指定 *this* 的指向（即函数执行时所在的的作用域），然后再指定的作用域中，执行函数。

```js
var obj = {};
var f = function(){
	return this;
};
console.log(f() === window);  // this 指向 window
console.log(f.call(obj) === obj) // 改变this 指向 obj
```

*call* 方法的参数，应该是对象 *obj*，如果参数为空或 *null、undefind*，则默认传参全局对象。

```js
var n = 123;
var obj = { n: 456 };

function a() {
  console.log(this.n);
}

a.call() // 123
a.call(null) // 123
a.call(undefined) // 123
a.call(window) // 123
a.call(obj) // 456
```


如果 *call* 传参不是以上类型，则转化成对应的包装对象(Number().Boolean())，然后传入方法。

```js
var f = function () {
  return this;
};

f.call(5); // Number {[[PrimitiveValue]]: 5}
```


*call* 可以接受多个参数，第一个参数是 *this* 指向的对象，之后的是函数回调所需的参数。
（之后的参数会传递给前面的方法）

```js
function add(a, b) {
  return a + b;
}

add.call(this, 1, 2) // 3
```

*call* 方法的一个应用是调用对象的原生方法。
```js
var obj = {};
obj.hasOwnProperty('toString') // false
obj.toString()//[object object]

//通过上面的例子
//obj能调用toString，但是toString这个方法并不是她自身所拥有的，这是来自他的原型对象上面


// 覆盖掉继承的 hasOwnProperty 方法
obj.hasOwnProperty = function () {
  return true;
};
obj.hasOwnProperty('toString') // true
Object.prototype.hasOwnProperty.call(obj, 'toString') // false
//如果hasOwnProperty被覆盖，可以使用call调用原生的方法。 
```
上面代码中 *hasOwnProperty* 是 *obj* 继承来的方法，用来判断对象是否包含自身特点（非继承）属性，但是 *hasOwnProperty* 并不是保留字，如果被对象覆盖，会造成结果错误。

*call* 方法可以解决这个问题，它将 *hasOwnProperty* 方法的原始定义放到 *obj* 对象上执行，这样无论 *obj* 上有没有同名方法，都不会影响结果。

#### ***Function.prototype.apply( )***

*apply* 和 *call* 作用类似，也是改变 *this* 指向，然后调用该函数，唯一区别是 *apply* 接收数组作为函数执行时的参数。语法如下：

```js
func.apply(thisValue, [arg1, arg2, ...])
```

利用这一特性，可以实现很多小功能。比如，输出数组的最大值：

```js
var a = [24,30,2,33,1]
Math.max.apply(null,a)  //33
```
#### ***Function.prototype.bind( )***

*bind* 用于将函数体内的 *this* 绑定到某个对象，然后返回一个新函数

  ```js
var d = new Date();
d.getTime() // 1481869925657

var print = d.getTime;
print() // Uncaught TypeError: this is not a Date object.
```

报错是因为 *d.getTime* 赋值给 *print* 后，*getTime* 内部的 *this* 指向方式变化，已经不再指向 *date* 对象实例了。（而是指向了最外一层 window或global）
示例一
```js
var d = new Date()
var fn = d.getTime.bind(d)//d.getTime方法的bind绑定到d身上
fn()
```

示例二
*bind* 接收的参数就是所要绑定的对象

```js
var counter = {
  count: 0,
  inc: function () {
    this.count++;
  }
};

var func = counter.inc.bind(counter);
func();
counter.count // 1
```

绑定到其他对象

```js
var counter = {
  count: 0,
  inc: function () {
    this.count++;
  }
};

var obj = {
  count: 100
};
var func = counter.inc.bind(obj);
func();
obj.count // 101
```

*bind* 还可以接收更多的参数，将这些参数绑定到原函数的参数

```js
var add = function (x, y) {
  return x * this.m + y * this.n;
}

var obj = {
  m: 2,
  n: 2
};

var newAdd = add.bind(obj, 5);
newAdd(5) // 20
```

上面代码中，*bind* 方法除了绑定 *this* 对象，还将 *add* 函数的第一个参数 *x* 绑定成 *5*，然后返回一个新函数 *newAdd*，这个函数只要再接受一个参数 *y* 就能运行了。

#### 2. 箭头函数的 *this* 指向

当我们的 *this* 是以函数的形式调用时，*this* 指向的是全局对象。

不过对于箭头函数来讲，却比较特殊。箭头函数的 *this* 指向始终为外层的作用域。