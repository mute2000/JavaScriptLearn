let x = 3;
let n = 2;

function pow(x, n) {
    for (let i = 0; i < n; i++) {
        if (n < 1) {
            return false;
        } else {
            return x ** n;
        }
    }
}

console.log(pow(x, n));

function sum(a) {
    return function sum2(b) {
        return a + b;
    } 
}

console.log(sum(1)(2));

function sum1(a) {
    let currentSum = a;
  
    function innerSum(b) {
      currentSum += b;
      return innerSum;
    }
  
    innerSum.toString = function () {
      return currentSum;
    };
  
    return innerSum;
  }
  
  console.log(sum1(1)(2)(3));