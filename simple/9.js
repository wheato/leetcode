/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false
  if (x < 10) return true

  s = x.toString().split('')
  s = s.reverse().join('')

  return parseInt(s) === x
};

console.log(isPalindrome(224422))