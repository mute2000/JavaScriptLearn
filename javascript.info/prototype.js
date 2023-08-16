/*使用 __proto__ 来分配原型，以使得任何属性的查找都遵循以下路径：pockets → bed → table → head。例如，pockets.pen 应该是 3（在 table 中找到），bed.glasses 应该是 1（在 head 中找到）。
回答问题：通过 pockets.glasses 或 head.glasses 获取 glasses，哪个更快？必要时需要进行基准测试。*/
/* let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};
*/

let head = {
  glasses: 1
};
  
let table = {
    pen: 3,
    __proto__: head
  };
  
let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
  };
  
  let pockets = {
    money: 2000,
    __proto__: bed
  };

console.log(pockets.pen);
console.log(bed.glasses);

let a = {
  money: 2000,
  __proto__
};

/*我们有两只仓鼠：speedy 和 lazy 都继承自普通的 hamster 对象。
当我们喂其中一只的时候，另一只也吃饱了。为什么？如何修复它？ */
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

speedy.eat("apple");
alert( speedy.stomach ); 
alert( lazy.stomach ); 

//因为上面的代码中的两个仓鼠都继承自普通的 hamster 对象，所以它们吃饱了。如果想要修复这个问题，你需要将两只仓鼠都添加一个属于自己的 stomach 属性。