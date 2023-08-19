/*function foo(str, a) {
    eval(str);
    console.log(a, b);
}

let a = 1;
let b = 2;

foo(a, b);*/

//eval函数
function foo(str, a) {
    eval(str);
    console.log(a, b);
}

let b = 2;

foo("let b = 3;", 1);

function s(str) {
    eval(str);
    console.log(a);
}

foo("let a = 2");

//with函数

/*function foo1(obj) {
    with(obj){
        a = 2;
    }
}

let o1 = {
    a: 3
};

let o2 = {
    b: 3
};

foo(o1);
console.log(o1.a);
foo(o2);
console.log(o2.a);
console.log(a);*/

//隐藏于普通作用域
function name1(a) {
    q = a + name2(a * 2);
    console.log(q * 3);
}

function name2(a) {
    return a - 1;
}

let q;

name1(2);

//函数作为作用域
/*let w = 2;
function foo2() {
    let w = 3
    console.log(w);
}

foo2();
console.log(w);*/

//IIFE
let w = 2;
(function foo2() {
    let w = 3
    console.log(w);
})();

console.log(w);

undefined = true;
(function IIFE(undefined) {
    let a;
    if (a === undefined) {
        console.log("undefined is safe");
    }
})();

//块作用域
/*let a3 = true;

if (a3) {
    let bar = a3 * 2;
    bar = something(bar);
    console.log(bar);
}

console.log(bar);*/

//
y = 2;
var y;

console.log(y);

console.log(x);

var x = 10;

d();
function d() {
    let a = 3;
    console.log(a);
}

