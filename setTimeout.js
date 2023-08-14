//编写一个函数 printNumbers(from, to)，使其每秒输出一个数字，数字从 from 开始，到 to 结束

function printNumbers(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
      console.log(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }
  
printNumbers(5, 10);

function printNumbers(from, to) {
    let current = from;
  
    setTimeout(function go() {
      console.log(current);
      if (current < to) {
        setTimeout(go, 1000);
      }
      current++;
    }, 1000);
  }
  
printNumbers(5, 10);