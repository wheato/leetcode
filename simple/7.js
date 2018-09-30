/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var n = x < 0 ? -1 : 1
  var s = (x * n).toString()
  s = (s.split('').reverse()).join('');
  var start = 0
  while(s[start] === '0') {
    start += 1
  }
  s = s.slice(start)
  var num =  Number(s) * n
  return num > Math.pow(2, 31) - 1 || num < Math.pow(-2, 31) - 1 ? 0 : num
};

console.log(reverse(-120))