function twoSum(nums: number[], target: number): number[] | undefined {
    let pair_idx: Record<string,number> = {}
    let numsLength: number = nums.length
    for(let idx = 0;  idx < numsLength; idx++){
        const pair_idx_keys:string[] = Object.keys(pair_idx)
        const sub_result = target - nums[idx]
        if(pair_idx_keys.includes(String(sub_result))){
            return [pair_idx[sub_result],idx]
        }
        pair_idx[nums[idx]] = idx
    }
};