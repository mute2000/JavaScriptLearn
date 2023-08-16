let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1) ,3000);
}).then(function(result){
    console.log(result);
    return result * 2;
}).then(function(result){
    console.log(result);
    return result * 2;
}).then(function(result){
    console.log(result);
    return result * 2;
})