//给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
//1.异或
var singleNumber = function(nums) {
    let res = 0;
    for(let i = 0; i < nums.length; i++){
        res ^= nums[i];
    }
    return res;
};
//哈希表
var singleNumber = function(nums) {
    const countMap = new Map();
    for (const num of nums) {
      countMap.set(num, (countMap.get(num) || 0) + 1);
    }
    for (const [num, count] of countMap.entries()) {
      if (count === 1) {
        return num;
      }
    }
}; 