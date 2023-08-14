//在一个函数内部，我们可以使用 new.target 属性来检查它是否被使用 new 进行调用了。
function User() {
    console.log(new.target);
}

User();

new User();