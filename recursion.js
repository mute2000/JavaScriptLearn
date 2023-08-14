//编写一个函数 sumTo(n) 计算 1 + 2 + ... + n 的和
//循环
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
    
}

console.log(sumTo(100));

//递归
function sum(n) {
    if (n == 1) {
        return 1;
    } else {
        return n + sum(n - 1);
    }
    
}

console.log(sum(100));

//公式

function sum1(n) {
    return n * (n + 1) / 2;
}

console.log(sum1(100));

//编写一个函数 factorial(n) 使用递归调用计算 n!

function factorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));

//编写一个函数 fib(n) 返回第 n 个斐波那契数

function fib(n) {
    if (n == 1 || n == 2) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
    
}

console.log(fib(3));

function fib1(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }

console.log(fib1(77));

//编写一个可以逐个输出链表元素的函数 printList(list)
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

function printList(list) {
    let a = list;
    while (a) {
        console.log(a.value);
        a = a.next;
    }
}

printList(list);

function printList1(list) {
    console.log(list.value);
    if (list.next) {
        printList1(list.next);
    }
}

printList1(list);

//反转链表
let list1 = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

function printReverseList(list1) {
    let arr = [];
    let a = list1;

    while (a) {
        arr.push(a.value);
        a = a.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);        
    }
    
}

printReverseList(list1);
