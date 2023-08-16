//一个函数一般来说是一段被命名的代码，它可以使用名称来被"调用"，而每次调用它内部的代码就会运行。
function print1() {
    //.toFixed()方法用于将数字四舍五入到指定的小数位数
    console.log(amount.toFixed(3));
}

let amount = 99.999;
print1();

amount *= 2;

print1();

//函数可以选择性地接收参数值（也就是参数）—— 你传入的值。而且它们还可以选择性地返回一个值。
function printAmount(amt) {
	console.log( amt.toFixed( 2 ) );
}

function formatAmount() {
	return "$" + amount1.toFixed( 2 );
}

let amount1 = 99.99;

printAmount( amount1 * 2 );

amount1 = formatAmount();
console.log( amount1 );	

//闭包
function out() {
    let a = 1;
    function inner() {
        let b = 2;
        console.log(a + b);       
    }
    inner();
    console.log(a);
    
}

out();

/*写一个程序来计算你购买手机的总价。你将不停地购买手机直到你的银行账户上的钱都用光（提示：循环！）。你还将为每个手机购买配件，只要你的花费低于你心理预算。

在你计算完购买总价之后，加入税费，然后用合适的格式打印出计算好的购买总价。

最后，将总价与你银行账户上的余额作比较，来看看那你是否买的起。

你应当为"税率"，"手机价格"，"配件价格"和"花费预算"设置一些常数，也为你的"银行账户余额"设置一个变量。

你应当为税费的计算和价格的格式化 —— 使用一个"$"并四舍五入到小数点后两位 —— 定义函数。

加分挑战： 试着在这个程序中利用输入，也许是使用在前面的"输入"中讲过的。比如，你可能会提示用户输入它们的银行账户余额。发挥创造力好好玩儿吧！ */
/*
这是我第一遍自己尝试写的解法，中间的错误有常量没有用const声明，while循环中添加了return导致下面的代码无法执行，total += tax();忘了传参，没有break语句。
let taxRate = 0.06;
let phonePrice = 1000;
let accessoryPrice = 100;
let budget = 5000;
let balance = 6500;
let total = 0;

function tax(total) {
    return total * taxRate;    
}

function print(total) {
    return "$" + total.toFixed( 2 );    
}

while (total < balance) {
    total += phonePrice;
    if (total < budget) {
        total += accessoryPrice;        
    } else {
        console.log("You don't have enough budget");
    }
}

total += tax();

console.log(print(total));
*/

//这是通过看过答案和chatgtp后修改的代码
const taxRate = 0.06;
const phonePrice = 1000;
const accessoryPrice = 100;
const budget = 5000;
let balance = 6500;
let total = 0;

function tax(total) {
    return total * taxRate;    
}

function print(total) {
    return "$" + total.toFixed( 2 );    
}

while (total < balance) {
    total += phonePrice;
    if (total < budget) {
        total += accessoryPrice;        
    } else {
        console.log("You don't have enough budget");
    }
}

total += tax(total);

console.log(print(total));

