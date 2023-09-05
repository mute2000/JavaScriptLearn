//字符串
/*.indexOf()方法用于在字符串中搜索指定的子字符串，并返回子字符串首次出现的位置。如果未找到子字符串，则返回-1。 */
let a = "hello world";
let b = a.indexOf("o");
console.log(b);

//.charAt()方法用于获取字符串中指定索引位置的字符。它接受一个参数，即字符在字符串中的索引值。
let c = "hello world";
let d = c.charAt(4);
console.log(d);

//toString方法用于将对象或值转换为字符串。

//JSON.stringify方法用于将JavaScript对象或值转换为JSON字符串。
let obj = {
    name: "Alice",
    age: 30
};
console.log(JSON.stringify(obj));

//JSON.parse方法用于将JSON字符串解析为JavaScript对象或值。
let jsonStr = '{"name": "Alice", "age": 30}';
console.log(JSON.parse(jsonStr));
/*JSON.stringify(..) 工具在遇到 undefined、function、和 symbol 时将会自动地忽略它们。
如果在一个 array 中遇到这样的值，它会被替换为 null（这样数组的位置信息就不会改变）。如果在一个 object 的属性中遇到这样的值，这个属性会被简单地剔除掉。 */
JSON.stringify( undefined );					// undefined
JSON.stringify( function(){} );					// undefined

JSON.stringify( [1,undefined,function(){},4] );	// "[1,null,null,4]"
JSON.stringify( { a:2, b:function(){} } );		// "{"a":2}"

//数组
/*join方法用于将数组（或类数组对象）的所有元素连接成一个字符串。
您可以指定一个可选的分隔符作为参数。如果未提供分隔符，则默认使用逗号,。 */
let arr = ["apple", "banana", "orange"];
console.log(arr.join("-"));

//map方法用于对数组的每个元素执行指定的函数，并创建一个新数组，该数组包含应用函数后的结果。map方法不会修改原始数组。
let arr1 = [1, 2, 3];
let e = arr1.map(function(num){
    return num * 2;
});
console.log(e);
console.log(arr1);

//函数
//call方法用于调用一个函数，同时允许您指定函数的this值和参数。
function name() {
    console.log("Hello, " + this.name);
}

let person1 = {name: "John"};
let person2 = {name: "Pete"};

name.call(person1);

//apply方法用于调用一个函数，同时允许您指定函数的this值和参数数组。
function greet(greeting, punctuation) {
    console.log(greeting + " ," + this.name + punctuation);
}

let person3 = {name: "Mary"};
greet.apply(person3, ["Hello", "!"]);