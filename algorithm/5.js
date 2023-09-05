//给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
var inorderTraversal = function(root) {
    let arr = [];
    let stack = [];
    while(root || stack.length) {
        while(root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        arr.push(root.val);
        root = root.right;
    }
    return arr;
};