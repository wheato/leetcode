/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (!p) return !s
  if (p.length === 1) return (s.length === 1 && (s[0] === p[0] || p[0] === '.'))
  if (p[1] !== '*') {
    if (!s) return false
    return (s[0] === p[0] || p[0] === '.') && isMatch(s.slice(1), p.slice(1)) 
  }
  while (s && (s[0] === p[0] || p[0] === '.')) {
    if (isMatch(s, p.slice(2))) return true
    s = s.slice(1)
  }
  return isMatch(s, p.slice(2))
};

console.log(isMatch('mississippi', 'mis*is*p*.'))
