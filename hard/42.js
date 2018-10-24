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
      if (height[j] >= height[i]) {
        let flag = Math.min(height[j], height[i])
        let num = nums.pop()
        let count = 0
        while(typeof num !== 'undefined') {
          if (num < flag) {
            count = count + (flag - num)
          }
          num = nums.pop()
        }
        result.push(count)
        i = j - 1
        break
      } else {
        max = height[j] >= max[1] ? [j, height[j]] : max
        nums.push(height[j])
      }
    }
    i += 1
  }
  return result.reduce((acc, n) => acc + n, 0)
};

console.log(trap([4,9,4,5,3,2]))
