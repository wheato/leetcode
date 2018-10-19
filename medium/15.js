/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let results = []
  if (nums.length < 3) return []
  nums = nums.sort()
  const acc = function (arr, list) {
    if (arr.length + list.length < 3) return
    for (let i = 0; i < list.length; i++) {
      if (typeof list[i-1] !== 'undefined' && list[i] === list[i-1]) continue
      if (arr.length < 2) {
        acc(arr.concat([list[i]]), list.slice(i + 1))
      } else if ( arr[0] + arr[1] + list[i] === 0) {
        results.push(arr.concat([list[i]]))
      } else if ( arr[0] + arr[1] + list[i] > 0) {
        return
      }
    }
  }
  for (let i = 0; i < nums.length - 2; i++) {
    if (typeof nums[i-1] !== 'undefined' && nums[i] === nums[i-1]) continue
    if (nums[i] > 0) return results
    acc([nums[i]], nums.slice(i + 1))
  }
  return results
};

console.log(threeSum([0, 0, 0, 0]))