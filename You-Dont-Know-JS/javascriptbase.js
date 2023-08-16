//值与类型
let a = null;

//这是JavaScript中一个bug
console.log(typeof a); // object

//数组
let arr = [1];
let arr1 = [
	"hello world",
	42,
	true
];

console.log(typeof arr);
console.log(typeof arr1);

//函数
function foo() {
	return 42;
}

foo.bar = "hello world";

console.log(typeof foo);
console.log(typeof foo());
console.log(typeof foo.bar);

//Truthy 与 Falsy
/*在JavaScript中“falsy”的明确列表如下：

"" （空字符串）
0
null, undefined
false*/
//注意：一个非值仅在实际上被强制转换为一个时才遵循这个“truthy”/“falsy”强制转换

//函数作为值（可以向一个传递一个值（参数值），而且 一个函数本身可以是一个值，它能够赋值给变量，传递给其他函数，或者从其它函数中返回）
let _ = function() {
    
}

//IIFE(立即被调用的函数表达式)

let a1 = 10;

(function IIFE() {
    let a1 = 20;
    console.log(a1);
})();

console.log(a1);

let a2 = 10;

function asd() {
    let a2 = 20;
    console.log(a2);
}

console.log(a2);


