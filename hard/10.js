/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const transPattern = function (p) {
    const t = []
    let str = ''
    for (let i = 0; i < p.length; i++) {
      str += p[i]
      if (p[i] === '*') {
        str.slice(0, -2) && t.push(str.slice(0, -2))
        t.push(str.slice(-2))
        str = ''
      }
    }
    str.length > 0 && t.push(str)
    return t
  }
  const hasStar = function (s) {
    return s.length === 2 && s[1] === '*'
  }
  const matchBefore = function (s, start, end, t) {
    let str = s.slice(start, end)
    let i = 0, j = 0
    if(!str) return true
    while (j < t.length && i < str.length) {
    }
    
  }
  const t = transPattern(p)
  if (!s) {
    for (let x = 0; x < t.length; x++) {
      if(!hasStar(t[x])) return false
    }
    return true
  }
  let i = 0, j = 0
  while(j < t.length && i < s.length) {
    if (!hasStar(t[j])) { // 包含模式符
      let index = s.slice(i).indexOf(t[j])
      if (t[j] === '.') index = 0
      if (index === -1) return false
      if (j === 0 && i === 0 && index > 0) return false
      i = i + t[j].length + index
    } else {

    }
    j += 1
  }
};

console.log(isMatch('aasdf asdf asdf asdf as', '"aasdf.*asdf.*asdf.*asdf.*s"'))
