/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  if (nums.length < 3) return null
  let result
  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    let start = i + 1
    let end = nums.length - 1
    while (start < end) {
      const a = nums[i]
      const b = nums[start]
      const c = nums[end]
      console.log(a, b, c)
      if (typeof result === 'undefined') {
        result = a + b + c
      } else if ( Math.abs(a + b + c - target) < Math.abs(result - target) ) {
        result = a + b + c
      }
      if (result === target) return result
      if (a + b + c > target) end -= 1
      if (a + b + c < target) start += 1
    }
  }
  return result
};

console.log(threeSumClosest([1,2,4,8,16,32,64,128], 82))