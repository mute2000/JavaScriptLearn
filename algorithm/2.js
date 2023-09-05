/*给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。 */
var isValid = function(s) {
    let stack = [];
    let obj = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    };

    for(let i = 0; i < s.length; i++){
        let char = s[i];

        if(obj[char]){
            stack.push(char);
        }else{
            let right = stack.pop();

            if(obj[right] != char){
                return false;
            }
        }  
    }
    return stack.length === 0;
};