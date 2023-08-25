
var a = 2;
function foo() {
	console.log( this.a );
}


foo(); 

/*判定this
现在，我们可以按照优先顺序来总结一下从函数调用的调用点来判定 的规则了。按照这个顺序来问问题，然后在第一个规则适用的地方停下。this

函数是通过 被调用的吗（new 绑定）？如果是， 就是新构建的对象。

var bar = new foo()

函数是通过 或 被调用（明确绑定），甚至是隐藏在 硬绑定 之中吗？如果是， 就是那个被明确指定的对象。

var bar = foo.call( obj2 )

函数是通过环境对象（也称为拥有者或容器对象）被调用的吗（隐含绑定）？如果是， 就是那个环境对象。this

var bar = obj1.foo()

否则，使用默认的 （默认绑定）。如果在 下，就是 ，否则是 对象。

var bar = foo()

以上，就是理解对于普通的函数调用来说的 绑定规则 所需的全部。是的......几乎是全部。 */

//使用 this._a_ 而不是 this.a 的原因是为了避免无限递归。当我们在 getter 和 setter 方法中使用 this.a 时，我们实际上是在调用这些方法本身，这将导致无限递归和栈溢出错误。

let myObject = {
get a() {
return this._a_;
},

set a(val) {
this._a_ = val * 2;
}
};

myObject.a = 2;

myObject.a; 

//枚举（一种特殊的数据类型，允许开发者定义一组命名的常量。这些常量通常表示某种特定类型的一组可能值）

let myObject = { };

Object.defineProperty(
	myObject,
	"a",
	{ enumerable: true, value: 2 }
);

Object.defineProperty(
	myObject,
	"b",
	{ enumerable: false, value: 3 }
);

//propertyIsEnumerable(..) 测试一个给定的属性名是否直 接存 在于对象上
myObject.propertyIsEnumerable( "a" );
myObject.propertyIsEnumerable( "b" ); 

//Object.keys(..) 返回一个所有可枚举属性的数组，而 Object.getOwnPropertyNames(..) 返回一个 所有 属性的数组，不论能不能枚举。
Object.keys( myObject ); 
Object.getOwnPropertyNames( myObject );

//
let anotherObject = {
	a: 2
};

let myObject = Object.create( anotherObject );

anotherObject.a; 
myObject.a; 

anotherObject.hasOwnProperty( "a" );
//myObject 不具有自身属性 a，因为它是从其原型 anotherObject 继承的 
myObject.hasOwnProperty( "a" ); 

myObject.a++; 

anotherObject.a; 
myObject.a; 

myObject.hasOwnProperty( "a" ); 