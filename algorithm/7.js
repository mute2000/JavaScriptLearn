//请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
//1.遍历
var replaceSpace = function(s) {
    let res = '';
    for(let i = 0; i < s.length; i++){
        if(s[i] === " "){
            res += "%20";
        }else{
            res += s[i];
        }
    }
    return res;
};
//2.正则表达式
var replaceSpace = function(s) {
    return s.replace(/ /g, "%20");
};