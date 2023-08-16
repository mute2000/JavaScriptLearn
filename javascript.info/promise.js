/*函数 delay(ms) 应该返回一个 promise。这个 promise 应该在 ms 毫秒后被 resolve，所以我们可以向其中添加 .then */
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));

}
  
delay(3000).then(() => console.log("done"));

// 在 new Promise()的时候，Promise的执行器就会立马执行，但是调用resolve()会触发异步操作，传入的then()方法的函数会被添加到任务队列并异步执行
let promise = new Promise((resolve, reject) => {
    console.log(1);
    resolve()
})
promise.then(() => console.log(3))
    
console.log(2)