function twoSum(nums, target){
    let l = 0
    let r = nums.length - 1
    while(l < r){
        let curSum = nums[l] + nums[r];
        if(curSum < target){
            l += 1;
        }else if(curSum > target){
            r -= 1;
        }else{
            return [l + 1, r + 1]
        }
    }
    return []
 }

 console.log(twoSum([1,3,4,5,7,10,11],9))