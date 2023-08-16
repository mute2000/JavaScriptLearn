//柯里化是一种函数的转换，它是指将一个函数从可调用的 f(a, b, c) 转换为可调用的 f(a)(b)(c)
/*使用柯里化技术将一个接受多个参数的函数转换为一系列接受单个参数的函数。在这个示例中，创建了一个名为 curry 的函数，该函数接受一个函数 f 作为参数，并返回一个柯里化版本的函数。
然后，您定义了一个名为 sum 的函数，该函数接受两个参数 a 和 b，并返回它们的和。最后，您使用 curry 函数将 sum 函数转换为柯里化版本的 curriedSum 函数， */

function curry(f) {
    return function(a){
        return function(b){
            return f(a,b);
        }
    }
    
}

function sum(a, b) {
    return a + b;
}

let curriedSum = curry(sum);

console.log(curriedSum(1)(2));
console.log(curriedSum(3, 4));