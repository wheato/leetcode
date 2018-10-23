/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const charMap = {
    '{': '}',
    '[': ']',
    '(': ')'
  }
  const stack = []
  if (s.length % 2 !== 0) return false
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
      stack.push(s[i])
    } else {
      let pop = stack.pop()
      if (!pop || charMap[pop] !== s[i]) return false
    }
  }
  return !stack.length
};

console.log(isValid("(({}){})"))