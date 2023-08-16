/*Promise.all 接受一个可迭代对象（通常是一个数组项为 promise 的数组），并返回一个新的 promise。
当所有给定的 promise 都 resolve 时，新的 promise 才会 resolve，并且其结果数组将成为新 promise 的结果。 */

Promise.all([
    new Promise(resolve => {
        setTimeout(() => resolve(1) ,3000);
    }),
    new Promise(resolve => {
        setTimeout(() => resolve(2) ,2000);
    }),
    new Promise(resolve => {
        setTimeout(() => resolve(3) ,1000);
    })
]).then(console.log());
