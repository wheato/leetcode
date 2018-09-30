/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (!s || s.length < 1) return ''
  
  var maxStr = ''
  var expandString = function (s, left, right) {
    while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
      left -= 1;
      right += 1;
    }
    return s.slice(left + 1, right)
  }

  for (var i = 0; i < s.length; i++) {
    var str1 = expandString(s, i, i)
    var str2 = expandString(s, i, i + 1)
    var str = str1.length > str2.length ? str1 : str2
    maxStr = maxStr.length > str.length ? maxStr : str
  }

  return maxStr;
};

console.log(longestPalindrome('cbbd'))