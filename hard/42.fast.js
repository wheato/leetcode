
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let max = 0
  let deep = []
  let result = 0
  for (let i = 0; i < height.length; i ++) {
    deep.push(max)
    max = Math.max(max, height[i])
  }
  max = 0
  for (let i = height.length - 1; i > -1; i--) {
    let min = Math.min(max, deep[i])
    if (min > height[i]) {
      result = result + (min - height[i])
    }
    max = Math.max(max, height[i])
  }
  return result;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))


// [ 0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3 ]
// [ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]