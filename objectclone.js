//基本数据类型

let a = 2;
let b = a;

a = 3;

console.log(a); // 3
console.log(b); // 2

//引用数据类型

//当一个对象变量被复制 —— 引用被复制，而该对象自身并没有被复制。

let user = { name: 'John' };
let admin = user;

admin.name = 'Pete'; // 通过 "admin" 引用来修改

console.log(user.name); // 'Pete'，修改能通过 "user" 引用看到

//但是，如果我们想要复制一个对象，那该怎么做呢？.
//1.将 users 中所有的属性拷贝到其中
let users = {
    name: "John",
    age: 30
  };
  
  let clone = {}; // 新的空对象
  
  // 将 users 中所有的属性拷贝到其中
  for (let key in users) {
    clone[key] = users[key];
  }
  
  // 现在 clone 是带有相同内容的完全独立的对象
  clone.name = "Pete"; // 改变了其中的数据
  
  console.log(users.name); // 原来的对象中的 name 属性依然是 John

//2.使用 Object.assign() 方法