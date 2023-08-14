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