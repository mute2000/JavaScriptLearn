/*假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？ */
var climbStairs = function(n) {
    let l = 0;
    let r = 0;
    let num = 1;

    for(let i = 1; i <= n; i++){
        l = r;
        r = num;
        num = l + r;
    }
    return num;
};