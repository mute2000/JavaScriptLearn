//找出数组中重复的数字。

var findRepeatNumber = function(nums) {
    let HashMap = new Map();
    for(let i = 0; i < nums.length; i++){
        if(HashMap.has(nums[i])){
            return nums[i];
        }else{
            HashMap.set(nums[i], 1);
        }
    }

};