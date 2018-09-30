/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  const arrs = []
  if (numRows === 1) return s
  for (let i = 0; i < numRows; i++) {
    arrs.push([])
  }

  for (let i = 0, a = 0, b = 0, d = 0; i < s.length; i++) {
    arrs[a][b] = s[i]

    // director
    if (a === numRows - 1) {
      d = 1
    }
    if (a === 0) {
      d = 0
    }
    if (d === 0) {
      a += 1
    }
    if (d === 1) {
      a -= 1
      b += 1
    }
  }

  return arrs.map(line => line.join('')).join('')
};

console.log(convert('AB', 1))
