/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let num = parseInt(str)
  if (isNaN(num)) return 0
  if (num < Math.pow(-2, 31)) return Math.pow(-2, 31)
  if (num > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1
  return num
};
