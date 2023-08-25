a = 21;

b = a * 2;

console.log(b);
//这段代码在vscode中运行结果为42，在浏览器运行结果为42 undefined
/*原因：这是因为 console.log() 函数本身没有返回值。在 JavaScript 中，当一个函数没有返回值时，它的返回值默认为 undefined。
当你在浏览器的控制台（Console）中运行这段代码时，控制台会自动输出函数的返回值。
在VSCode中运行 JavaScript 代码时，通常使用的是 Node.js 环境。在 Node.js 环境中，console.log() 函数只会输出传入的参数，而不会输出函数的返回值*/


//隐式转换
let c = 23;

c *= 2;

console.log(c);
//最后一行代码中包含隐式转换，c 变量的值是一个 number 类型。当我们使用 console.log( c ) 将其输出到控制台时，console.log() 函数会在内部将 number 类型的值转换为 string 类型，以便以文本形式显示在控制台上。

//JavaScript中的toFixed()方法, parseInt()函数，parseFloat()函数。

/*toFixed()方法
toFixed() 方法是 JavaScript 中 Number 对象的一个方法，用于将数字格式化为指定小数位数的字符串。
toFixed() 方法接受一个参数，表示要保留的小数位数。参数必须是一个介于 0 到 20（包含 0 和 20）之间的整数。如果不提供参数，或者参数值不在这个范围内，将抛出一个 RangeError 异常。
RangeError 异常是 JavaScript 中的一种错误类型，表示数值变量或参数超出其有效范围。当您尝试使用超出预期范围的数值时，JavaScript 会抛出 RangeError 异常。
toFixed() 方法的返回值类型是 string 类型。*/
let num = 123.456;

console.log(num.toFixed());
console.log(num.toFixed(1));
console.log(num.toFixed(2));
console.log(num.toFixed(4));

//parseFloat()函数
//parseFloat() 函数是 JavaScript 中的一个全局函数，用于将字符串解析为浮点数。当您需要从字符串中提取数值信息时，这个函数非常有用。

console.log(parseFloat(num));
//parseFloat() 函数会忽略字符串前面的空白字符。
console.log(parseFloat("    123.456"));
//如果字符串中包含无效的数字字符，parseFloat() 函数会解析直到遇到第一个无效字符为止。
console.log(parseFloat("123abc"));
//如果字符串以一个无效的数字字符开始，parseFloat() 函数会返回 NaN。
console.log(parseFloat("abc123"));

//parseInt()函数
/*parseInt() 函数是 JavaScript 中的一个全局函数，用于将字符串解析为整数。当您需要从字符串中提取整数信息时，这个函数非常有用。
parseInt() 函数接受两个参数。第一个参数是要解析的字符串，第二个参数是可选的基数（radix），表示要使用的数制（例如：10 表示十进制，16 表示十六进制）。如果不提供基数，parseInt() 函数会根据字符串的格式自动推断数制。
parseInt() 函数的规则和 parseFloat() 函数类似。*/

console.log(parseInt("123")); // 输出 123
console.log(parseInt("42.3")); // 输出 42
console.log(parseInt("0xA")); // 输出 10（十六进制）
console.log(parseInt("1010", 2)); // 输出 10（二进制）

//循环
for (let i = 0; i <= 9; i++) {
    console.log(i);
    
}

let i = 0;
while (i <= 9) {
    console.log(i);
    i++;
}

do {
    console.log(i);
    i++;
} while (i <= 9);

//作用域
//词法作用域规则说，在一个作用域中的代码既可以访问这个作用域中的变量，又可以访问任何在它外面的作用域的变量。

//练习题
/*写一个程序来计算你购买手机的总价。你将不停地购买手机直到你的银行账户上的钱都用光（提示：循环！）。你还将为每个手机购买配件，只要你的花费低于你心理预算。
在你计算完购买总价之后，加入税费，然后用合适的格式打印出计算好的购买总价。
最后，将总价与你银行账户上的余额作比较，来看看那你是否买的起。
你应当为“税率”，“手机价格”，“配件价格”和“花费预算”设置一些常数，也为你的“银行账户余额”设置一个变量。
你应当为税费的计算和价格的格式化 —— 使用一个“$”并四舍五入到小数点后两位 —— 定义函数。*/
/*const TAX = 0.08;
const PHONE_PRICE = 500;
const ACCESSORY_PRICE = 50;
const BUDGET = 4000;
let accountBalance = 12000;
let amount = 0;

function tax(amount) {
    return amount * TAX;
}

function totalPrice(amount) {
    return "$" + amount.toFixed(2);
}

while (amount < accountBalance) {
    amount = amount + PHONE_PRICE;

    if (amount < BUDGET) {
        amount = amount + ACCESSORY_PRICE;
    }
    
}

amount = amount + amount * TAX;

console.log(amount);

if (amount < accountBalance) {
    console.log("I can afford it");
}else {
    console.log("I can't afford it");
}*/

const TAX = 0.08;
const PHONE_PRICE = 500;
const ACCESSORY_PRICE = 50;
const BUDGET = 4000;
let accountBalance = 12000;
let amount = 0;

function tax(amount) {
    return amount * TAX;
}

function totalPrice(amount) {
    return "$" + amount.toFixed(2);
}

while (amount < accountBalance) {
    let currentCost = PHONE_PRICE;

    if (amount + currentCost + ACCESSORY_PRICE < BUDGET) {
        currentCost += ACCESSORY_PRICE;
    }

    currentCost += tax(currentCost);

    if (amount + currentCost > accountBalance) {
        break;
    }

    amount += currentCost;
}

console.log("购买总价:", totalPrice(amount));

if (amount <= accountBalance) {
    console.log("I can afford it");
} else {
    console.log("I can't afford it");
}

//立即被调用的函数表达式（IIFE）
//IIFE可以有返回值
/*(function IIFE() {
    return "IIFE";
})();*/


//.call()方法
//.call() 方法是一个非常有用的函数原型方法，它允许您在指定的上下文中调用一个函数，同时可以传递给该函数一组参数。.call() 方法的主要用途是改变函数内部的 this 指向。
//语法：functionName.call(thisArg, arg1, arg2, ...);functionName 是要调用的函数。thisArg 是在函数内部作为 this 使用的对象。arg1, arg2, ... 是传递给函数的参数列表。
//继承
function animal(name){
    this.name = name;
}

function dog(name) {
    animal.call(this, name);
}

let myDog = new dog("Rex");
console.log(myDog.name);
//借用方法
let person1 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
  
let person2 = {
    firstName: "Alice",
    lastName: "Smith"
};
  
console.log(person1.fullName.call(person2));

//Object.create()方法
//Object.create() 方法用于创建一个新对象，并将其原型设置为指定的对象。这是一种实现原型继承的方法。
//语法:Object.create(proto, [propertiesObject]);proto 是新创建的对象的原型对象。propertiesObject（可选）是一个包含新对象的属性描述符的对象。

let person = {
    sayHello: function() {
        console.log("Hello, " + this.name);
    }
}

let student = Object.create(person);
student.name = "Alice";
student.sayHello();