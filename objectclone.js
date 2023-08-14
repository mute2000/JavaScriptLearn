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
  
  let clone = {}; 
  

  for (let key in users) {
    clone[key] = users[key];
  }
  

  clone.name = "Pete"; 
  
  console.log(users.name); 

//2.使用 Object.assign() 方法

let user1 = { name: "John" };
let q = { age: 30 };
let w = { city: "New York" };

Object.assign(user1, q, w);

console.log(user1);

//如果被拷贝的属性的属性名已经存在，那么它会被覆盖

let user2 = { name: "John" };

Object.assign(user2, { name: "Pete" });

console.log(user2);

//简单克隆
let user3 = { name: "John" };

let copy = Object.assign({}, user3);

console.log(copy);