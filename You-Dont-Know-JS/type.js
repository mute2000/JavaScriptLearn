//函数实际上是对象（object）的“子类型”。特别地，一个函数（function）被称为“可调用对象” —— 一个拥有 [[Call]] 内部属性、允许被调用的对象。
function a(b, c) {
    return b + c;   
}

console.log(a.length);

//在 JavaScript 中，变量没有类型 -- 值才有类型
let b = 1;
let c = "ser";

console.log(typeof b);
console.log(typeof c);

console.log(typeof typeof c);

//
let d;

console.log(typeof d);  // undefined
console.log(typeof l);  // undefined
//当我们执行 typeof l 时，即使 l 是一个未声明变量，也不会有错误被抛出。这是 typeof 的一种特殊的安全防卫行为。

//检查一个变量是否为null
let e = null;
let test = (!e && typeof e === "object");

console.log(test);

//
let a1 = 45.3000;
console.log(a1);