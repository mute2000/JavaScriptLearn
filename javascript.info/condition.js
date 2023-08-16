/*使用 if..else 结构，实现提问 “What’s the “official” name of JavaScript?” 的代码。
如果访问者输入了 “ECMAScript”，输出就提示 “Right!”，否则 —— 输出：“You don’t know? “ECMAScript”!”*/

let question;

if (question === "ECMAScript") {
    console.log("Correct!");
}else {
    console.log("“You do not know? “ECMAScript”!”");
}

/*使用 if..else 语句，编写代码实现通过 prompt 获取一个数字并用 alert 显示结果：
如果这个数字大于 0，就显示 1，
如果这个数字小于 0，就显示 -1，
如果这个数字等于 0，就显示 0。
在这个任务中，我们假设输入永远是一个数字。*/
let num;

if (num > 0) {
    console.log(1);
} else if (num < 0) {
    console.log(-1);
} else {
    console.log(0);
}

//使用条件运算符 '?' 重写下面的 if 语句
/*let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}*/

let result = (a + b < 4) ? result = "Below" : result = "Over";

//使用 '?' 重写 'if..else' 语句
/*let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}*/

let message = (login == 'Employee') ? "Hello" :
(login == 'Director') ? "Greetings" :
(login == '') ? "No login" :
'';
