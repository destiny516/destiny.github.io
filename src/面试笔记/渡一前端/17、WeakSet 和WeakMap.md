---
category:
  - JS基础
---
# 17、WeakSet 和WeakMap.md
## 从对象开始说起



首先我们从大家都熟悉的对象开始说起。

```js
const algorithm = { site: "leetcode" };
console.log(algorithm.site); // leetcode

for (const key in algorithm) {
  console.log(key, algorithm[key]);
}

// site leetcode
delete algorithm.site;
console.log(algorithm.site); // undefined
```

在上面的代码中，我们有一个 *algorithm* 对象，它的 *key* 和 *value* 是一个字符串类型的值，之后通过点（ . ）进行值的访问。

另外，*for-in* 循环也很适合在对象中循环。可以使用中括号（ [ ] ）访问其键对应的值。但是不能使用 *for-of* 循环，因为对象是不可迭代的。

对象的属性可以用 *delete* 关键字来删除。



好的，我们已经快速讨论了有关对象的一些事项：

- 如何添加属性
- 如何遍历对象
- 如何删除属性

## *Map*

*Map* 是 *JavaScript* 中新的集合对象，其功能类似于对象。但是，与常规对象相比，存在一些主要差异。

首先，让我们看一个创建 *Map* 对象的简单示例。

### 添加属性

首先，通过 *Map* 构造函数，我们可以创建一个 *Map* 实例对象出来，如下：

```js
const map = new Map();
// Map(0) {}
```

*Map* 有一种特殊的方法可在其中添加称为 *set* 的属性。它有两个参数：键是第一个参数，值是第二个参数。

```js
map.set('name', 'john');
// Map(1) {"name" => "john"}
```

但是，它不允许你在其中添加现有数据。如果 *Map* 对象中已经存在与新数据的键对应的值，则不会添加新数据。

```js
map.set('phone', 'iPhone');
// Map(2) {"name" => "john", "phone" => "iPhone"}
map.set('phone', 'iPhone');
// Map(2) {"name" => "john", "phone" => "iPhone"}
```

但是可以用其他值覆盖现有数据。

```js
map.set('phone', 'Galaxy');
// Map(2) {"name" => "john", "phone" => "Galaxy"}
```

二维数组和 *Map* 对象之间可以很方便的相互转换。例如：

```js
var arr = [
    [1, 2],
    [3, 4],
    [5, 6],
];

var map = new Map(arr);
console.log(map); //Map { 1 => 2, 3 => 4, 5 => 6 }
console.log(Array.from(map)); //[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
```

关于 *Map* 和 *Object* 的区别，可以参阅下表：

![image-20210930183632548](https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-30-103632.png)

|      | Map                                     | Object                                                                          |
| ---- | --------------------------------------- | ------------------------------------------------------------------------------- |
| 额外的键 | Map默认情况下不包含任何键，只包含插入的键                  | 一个Object有一个圆形，原型链上的键名有可能和自己在对象上设置的键名产生冲突，ES5可以使用Object。create（null），创建一个没有原型的对象 |
| 键的类型 | 一个Map的键可以是任意值，包含函数，对象或者任意基本类型           | 一个Object的键必须是一个String或者Symbol                                                   |
| 键的顺序 | Map中的key是有序的，因此当迭代的时候，一个Map对象以插入的顺序返回键值 | 一个Object的键是无序的                                                                  |
| size | 通过size属性获取                              | Object的size只能手动计算                                                               |
| 迭代   | 可迭代，可以直接被迭代                             | 需要某种方式获取到键才能被迭代                                                                 |
| 性能   | 有频繁增删键值的情况下表现更好                         | 未作出优化                                                                           |
## weakMap

**差异 *1*：*key* 必须是对象**

可以将任何值作为键传入 *Map* 对象，但 *WeakMap* 不同，它只接受一个对象作为键，否则，它将返回一个错误。

```js
const John = { name: 'John' };
const weakMap = new WeakMap();
weakMap.set(John, 'student');
// WeakMap {{...} => "student"}
weakMap.set('john', 'student');
// Uncaught TypeError: Invalid value used as weak map key
```

**差异 *2*：并非 *Map* 中的所有方法都支持**

*WeakMap* 可以使用的方法如下：

- *delete*
- *get*
- *has*
- *set*

还有一个最大的不同是 *WeakMap* 不支持迭代对象的方法（foreach等方法）。


**差异 *3*：当 *GC* 清理引用时，数据会被删除**

这是和 *Map* 相比最大的不同。

例如：

```js
let John = { major: "math" };

const map = new Map();
const weakMap = new WeakMap();

map.set(John, 'John');
weakMap.set(John, 'John');

John = null;
/* John 被垃圾收集 */
```

当 *John* 对象被垃圾回收时，*Map* 对象将保持引用链接，而 *WeakMap* 对象将丢失链接。

## *Set*

*Set* 也非常类似于 *Map*，但是 *Set* 对于单个值更有用。

### 添加属性
使用 *add* 方法可以添加属性。

```js
const set = new Set();

set.add(1);
set.add('john');
set.add(BigInt(10));
// Set(4) {1, "john", 10n}
```

与 *Map* 一样，*Set* 也不允许添加相同的值。

```js
set.add(5);
// Set(1) {5}

set.add(5);
// Set(1) {5}
```


对于原始数据类型（*boolean、number、string、null、undefined*），如果储存相同值则只保存一个，对于引用类型,引用地址完全相同则只会存一个。

- *+0* 与 *-0* 在存储判断唯一性的时候是恒等的，所以不可以重复。
- *undefined* 和 *undefined* 是恒等的，所以不可以重复。
- *NaN* 与 *NaN* 是不恒等的，但是在 *Set* 中只能存一个不能重复。


### 遍历对象



由于 *Set* 是一个可迭代的对象，因此可以使用 *for-of* 或 *forEach* 语句。

```js
for (const val of set) {
  console.dir(val);
}
// 1
// 'John'
// 10n
// 5

set.forEach(val => console.dir(val));
// 1
// 'John'
// 10n
// 5

```

### 删除属性

这一部分和 *Map* 的删除完全一样。如果数据被成功删除，它返回 *true*，否则返回 *false*。

当然也可以使用 clear 方法清空 *Set* 集合。

```js
set.delete(5); 
// true
set.delete(function(){});
// false;

set.clear();
```

如果你不想将相同的值添加到数组表单中，则 *Set* 可能会非常有用。

```js
/* With Set */
const set = new Set();
set.add(1);
set.add(2);
set.add(2);
set.add(3);
set.add(3);
// Set {1, 2, 3}

// Converting to Array
const arr = [ ...set ];
// [1, 2, 3]

Object.prototype.toString.call(arr);
// [object Array]

/* Without Set */
const hasSameVal = val => ar.some(v === val);
const ar = [];

if (!hasSameVal(1)) ar.push(1);
if (!hasSameVal(2)) ar.push(2);
if (!hasSameVal(3)) ar.push(3);
```

### 应用场景



接下来来看一下 *Set* 常见的应用场景：

```js
//数组去重
...new Set([1,1,2,2,3])

//并集
var arr1 = [1, 2, 3]
var arr2 = [2, 3, 4]
var newArr = [...new Set([...arr1, ...arr2])]
//交集
var arr1 = [1, 2, 3]
var arr2 = [2, 3, 4]
var set1 = new Set(arr1)
var set2 = new Set(arr2)
var newArr = []
set1.forEach(item => {
    set2.has(item) ? newArr.push(item) : ''
})
console.log(newArr)
//差集
var arr1 = [1, 2, 3]
var arr2 = [2, 3, 4]
var set1 = new Set(arr1)
var set2 = new Set(arr2)
var newArr = []
set1.forEach(item => {
    set2.has(item) ? '' : newArr.push(item)
})
set2.forEach(item => {
    set1.has(item) ? '' : newArr.push(item)
})
console.log(newArr)
```

## *WeakSet*

*WeakSet* 和 *Set* 区别如下：

- *WeakSet* 只能储存对象引用，不能存放值，而 *Set* 对象都可以
- *WeakSet* 对象中储存的对象值都是被弱引用的，即垃圾回收机制不考虑 *WeakSet* 对该对象的引用，如果没有其他的变量或者属性引用这个对象值，则这个对象将会被垃圾回收掉。（不考虑该对象还存在与 *WeakSet* 中），所以 *WeakSet* 对象里有多少个成员元素，取决于垃圾回收机制有没有运行，运行前后成员个数可能不一致，遍历结束之后，有的成员可能取不到，被垃圾回收了。因此 *ES6* 规定，*WeakSet* 对象是无法被遍历的，也没有办法拿到它包含的所有元素。



*WeakSet* 能够使用的方法如下：

- *add(value)* 方法：在 *WeakSet* 中添加一个元素。如果添加的元素已存在，则不会进行操作。
- *delete(value)* 方法：删除元素 *value*
- *has(value)* 方法：判断 *WeakSet* 对象中是否包含 *value*
- *clear( )* 方法：清空所有元素



下面来看一下 *WeakSet* 的代码示例，与 *WeakMap* 一样，*WeakSet* 也将丢失对内部数据的访问链接（如果内部数据已被垃圾收集）。

```js
let John = { major: "math" };

const set = new Set();
const weakSet = new WeakSet();

set.add(John);
// Set {{...}}
weakSet.add(John);
// WeakSet {{...}}

John = null;
/* John 被垃圾收集 */
```

一旦对象 *John* 被垃圾回收，*WeakSet* 就无法访问其引用 *John* 的数据。而且 *WeakSet* 不支持 *for-of* 或 *forEach*，因为它不可迭代。

## 比较总结



- *Map*
  - 键名唯一不可重复
  - 类似于集合，键值对的集合，任何值都可以作为一个键或者一个值
  - 可以遍历，可以转换各种数据格式，方法 *get、set、has、delete*
- *WeakMap*
  - 只接受对象为键名，不接受其他类型的值作为键名，键值可以是任意
  - 键名是拖引用，键名所指向的对象，会被垃圾回收机制回收
  - 不能遍历，方法 *get、set、has、delete*

- *Set*
  - 成员唯一，无序且不会重复
  - 类似于数组集合，键值和键名是一致的（只有键值。没有键名）
  - 可以遍历，方法有 *add、delete、has*
- *WeakSet*
  - 只能存储对应引用，不能存放值
  - 成员都是弱引用，会被垃圾回收机制回收
  - 不能遍历，方法有 *add、delete、has*
