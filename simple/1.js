/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // find the target index
  // for (let i = 0; i < nums.length; i++) {
  //   let last = target - nums[i]
  //   let index = nums.findIndex((n, index) => n === last && index !== i)
  //   if (index > -1) {
  //     return [i, index]
  //   }
  // }
  const hash = {}
  nums.forEach((n, index) => {
    hash[n] = index
  })
  for (let i = 0; i < nums.length; i++) {
    let last = target - nums[i]
    if (typeof hash[last] !== 'undefined' && hash[last] !== i) {
      return [i, hash[last]]
    }
  }
};

console.log(twoSum([3, 2, 4], 6))