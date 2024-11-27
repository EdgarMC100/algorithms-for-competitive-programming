class Solution(object):
    def twoSum(self, nums, target):
        pair_idx= {}
        for i, num in enumerate(nums):
            if target - num in pair_idx:
                return [pair_idx[target - num],i]
            pair_idx[num] = i