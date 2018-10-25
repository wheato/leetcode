/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let result = []
  if (height.length < 3) return 0
  for (let i = 0; i < height.length - 2;) {
    let nums = []
    let max = [0, 0] // [index, value]
    if (height[i] === 0) {
      i += 1
      continue
    }
    for(j = i + 1; j < height.length; j++) {
      max = height[j] >= max[1] ? [j, height[j]] : max
      nums.push(height[j])
      if (height[j] >= height[i]) {
        break
      }
    }
    if (max[0] - i > 1) {
      let num = nums.pop()
      while (num !== max[1]) {
        num = nums.pop()
      }
      let flag = Math.min(num, height[i])
      let count = 0
      while(typeof num !== 'undefined') {
        if (flag > num) {
          count = count + (flag - num)
        }
        num = nums.pop()
      }
      result.push(count)
      i = max[0] - 1
    } else {
      i += 1
    }
  }
  return result.reduce((acc, n) => acc + n, 0)
};

// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
console.log(trap([4,2,3,4,1,1,5]))
