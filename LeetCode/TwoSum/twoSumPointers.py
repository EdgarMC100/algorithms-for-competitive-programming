from typing import List
class Solution:
    def twoSum(self, numbers: List[int], target:int) -> List[int]:
        l, r = 0, len(numbers) - 1
        while l < r:
            curSum = numbers[l] + numbers[r]
            if curSum > target:
                r -= 1
            elif curSum < target:
                l += 1
            else:
                return [l+1, r+1]
        return []

solution = Solution()
# print(solution.twoSum([1,2,3,5],9))
print(solution.twoSum([1,3,4,5,7,10,11],9))

