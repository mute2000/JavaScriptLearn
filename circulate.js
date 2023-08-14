//使用 for 循环输出从 2 到 10 的偶数。

let arr = [];

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        arr.push(i);
    }
  }

console.log(arr);

/*编写一个提示用户输入大于 100 的数字的循环。如果用户输入其他数值 —— 请他重新输入。
循环一直在请求一个数字，直到用户输入了一个大于 100 的数字、取消输入或输入了一个空行为止。
在这我们假设用户只会输入数字。在本题目中，不需要对非数值输入进行特殊处理。*/

let num;

while (true) {
    num = 101;

    if (num > 100 || num === '' || num === null) {
        break;
    }
}

console.log(num);

//写一个可以输出 2 到 10 之间的所有素数的代码。
function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num !== 1;
  }
  
  for (let i = 2; i <= 10; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
  
