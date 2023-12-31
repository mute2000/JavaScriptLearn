//给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
//循环
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }

}
//哈希表法
var twoSum = function(nums, target) {
    let hashMap = new Map();
    for(let i = 0; i < nums.length; i++){

      let num = target - nums[i];
      if(hashMap.has(num)){
        return [hashMap.get(num), i];
      }else{
        hashMap.set(nums[i], i);
      }
    }
};