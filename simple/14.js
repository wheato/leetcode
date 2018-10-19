/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var current = 0
  var prefix = ''
  if (strs.length < 1) return prefix
  strs = strs.sort((a, b) => a.length - b.length)
  while(strs[0][current]) {
    for (var i = 1; i < strs.length; i++) {
      if (strs[0][current] !== strs[i][current]) return prefix
    }
    prefix += strs[0][current]
    current += 1
  }
  return prefix
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
