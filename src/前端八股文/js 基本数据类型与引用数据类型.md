# js中的基本类型和引用类型
## 1.JavaScript中的变量类型有哪些？

（1）基本类型（基本类型）：字符串（string）、数值（number）、布尔值（boolean）、undefined、null （这5种基本数据类型是按值访问的，因为可以操作保存在变量中的实际的值）、symbol (ECMAScript 2016新增了一种基本数据类型 )

（2）引用类型：对象（Object）、数组（Array）、函数（Function）、正则（RegExp）、日期（Date）、特殊的基本包装类型(String、Number、Boolean)以及单体内置对象(Global、Math)。

## 2.基本类型(值类型)和引用类型的区别

① 基本类型：
```
 1、占用空间固定，保存在栈中
 （当一个方法执行时，每个方法都会建立自己的内存栈，在这个方法内定义的变量将会逐个放入这块栈内存里，随着方法的执行结束，
 这个方法的内存栈也将自然销毁了。因此，所有在方法中定义的变量都是放在栈内存中的；栈中存储的是基础变量以及一些对象的引用变量，
 基础变量的值是存储在栈中，而引用变量存储在栈中的是指向堆中的数组或者对象的地址，这就是为何修改引用类型总会影响到其他指向这个地址  的引用变量）

 2、保存与复制的是值本身

 3、使用typeof检测数据的类型

 4、基本类型数据是值类型
```


② 引用类型：
```
 1、占用空间不固定，保存在堆中（当我们在程序中创建一个对象时，这个对象将被保存到运行时数据区中，以便反复利用（因为对象的创建成本通常较大）
 ，这个运行时数据区就是堆内存。堆内存中的对象不会随方法的结束而销毁，即使方法结束后，这个对象还可能被另一个引用变量所引用（方法的参数传递时很常见），
 则这个对象依然不会被销毁，只有当一个对象没有任何引用变量引用它时，系统的垃圾回收机制才会在核实的时候回收它。）

 2、保存与复制的是指向对象的一个指针

 3、使用instanceof检测数据类型

 4、使用new()方法构造出的对象是引用型
```

代码实例：

```
// 值类型：Number、string、bollean、undefined
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
typeof 'abc' // string
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

```

总结：
	① 基本类型的复制后，之间变量是互不影响的，因为他们在栈中都有自己开辟的空间，因此修改这些基本变量是互不影响的；而引用类型复制只是栈中开辟了一个储存另一份指向堆中引用变量的指针地址，并且它们都指向同一个引用变量，所以修改一个引用变量的值，两者都会同时修改；
	② 如果只是检测基本变量的类型是使用typeof就可以了，但如果涉及到引用变量的类型时就应该使用instanceof

进一步理解：

基本类型：
```js
function computed(count) {
          var num1 = count;
          count = 10; 
          return num1; 
         } 
 var count = 20; 
 var result = computed(count); 
 console.log(count); // 10	
 console.log(result); // 20
 console.log(num1); // error

```

结合基本类型在栈中的存储方式：首先在调用方法之前，栈中开辟了一个空间储存count并且值为20 ------- 执行函数computed中进行了赋值操作，将count赋值给num1，此时栈内存中就多了一个num1的基本变量，并且它的值为count就是20，然后count基本变量对应的值改为10，栈中就只会修改count变量对应的值，而num1对应的变量仍然为20 ------- 执行完函数computed返回的num1的值，因此var result = num1就是20，但此时栈里面num1其实就是上面提到的在方法内定义的变量将会逐个放入这块栈内存里，随着方法的执行结束,这个方法的内存栈也将自然销毁了，所以执行完后num1这个局部变量就会被回收销毁，而定义的全局变量count result则仍然存在栈内存中。


![[基本数据类型的赋值过程.png]]
引用类型：

```
function setName(obj) { 
         obj.name = "张三"; 
         var person1 = obj;
         person1.name = "李四";
         person2 = new Object();
         person2.name = "王五"
       } 
       
  var person = new Object(); 
  var person2;
  
  setName(person);
  setName(person2);
  console.log(person.name); // 李四
  console.log(person2.name); // 王五
  console.log(person1.name); // error

```

结合引用类型在栈堆中的存储方式：首先在调用方法之前，栈中开辟了两个空间储存person和person2，其中person为引用类型，因此对应的生成一个指针地址0x001指向堆中的空对象｛｝，而person2并不知道类型，因此先放着 ------- 分别执行函数setName中，一开始person的堆中的引用变量有了name值，其次在函数内部定义了局部变量person1，此时栈内存中就多了一个person1并且生成一个指针0x002，并且它也指向person的引用变量，然后person1修改了name的值，此时由于person的指针也是指向同一个堆内存变量，因此他们name的值都为李四，同理person2也有自己的指针指向自己的堆内存变量 ------- 每执行完函数是系统都会进行垃圾回收机制，此时就只有person1在外部是没有引用的，因此将其对应栈堆内存清除，而person person2外部有引用，因此不会随着方法执行完毕，而销毁；