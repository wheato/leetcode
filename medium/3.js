/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let curStr = {}
  let startIndex = 0
  let max = 0
  for (let i = 0; i < s.length; i ++) {
    // const index = curStr.indexOf(s[i])
    // if (index < 0) { // 不存在重复
    //   curStr += s[i]
    //   if (maxStr.length < curStr.length) {
    //     maxStr = curStr
    //   }
    // } else if (i - index === 1) { // 相差为1,之前的字符都无效
    //   curStr = s[i]
    // } else { // 其他的情况截取
    //   curStr = curStr.slice(index + 1)
    //   curStr += s[i]
    //   if (maxStr.length < curStr.length) {
    //     maxStr = curStr
    //   }
    // }

    // 第二种解法，看看速度
    const index = curStr[s[i].charCodeAt(0)]
    curStr[s[i].charCodeAt(0)] = i
    if (typeof index !== 'undefined') {
      if (i - index === 1) { // 相差为1,之前的字符都无效
        startIndex = i
      } else if (startIndex <= index) { // 其他的情况截取
        startIndex = index + 1
      }
    }
    max = Math.max(max, i - startIndex + 1)
  }
  return max
};

console.log(lengthOfLongestSubstring("bbb"))
