/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const len = nums1.length + nums2.length;
  const isOdd = !!(len % 2)
  let midnum = isOdd ? Math.ceil(len / 2) : len / 2
  let i = 0, j = 0
  let a, b

  if (nums1.length === 0) {
    return isOdd ? nums2[midnum - 1] : (nums2[midnum] + nums2[midnum - 1]) / 2
  } else if (nums2.length === 0) {
    return isOdd ? nums1[midnum - 1] : (nums1[midnum] + nums1[midnum - 1]) / 2
  }
  while (midnum > 0 && i < nums1.length && j < nums2.length) {
    a = nums1[i]
    b = nums2[j]

    if ( a >= b) {
      j++
    } else {
      i++
    }
    midnum -= 1
  }
  if (midnum > 0) {
    if (i >= nums1.length) { // 左列已到尽头
      b = nums2[j + (midnum)]
      a = nums2[j + (midnum - 1)] ? Math.max(nums2[j + (midnum - 1)], nums1[nums1.length - 1]) : nums1[nums1.length - 1]
    }
    if (j >= nums2.length) { // 右列已到尽头
      b = nums1[i + (midnum)]
      a = nums1[i + (midnum - 1)] ? Math.max(nums1[i + (midnum - 1)], nums2[nums2.length - 1]) : nums2[nums2.length - 1]
    }
    return isOdd ? Math.min(a, b) : (a + b) / 2
  }
  if (isOdd) {
    return Math.min(a, b)
  } else {
    if (a > b) {
      a = b
      if (j < nums2.length) {
        b = Math.min(nums2[j], nums1[i])
      } else {
        b = nums1[i]
      }
    } else if (b > a) {
      if (i < nums1.length) {
        b = Math.min(nums1[i], nums2[j])
      }
    }
    return (a + b) / 2
  }
};
console.log(findMedianSortedArrays([2,3,4], [1]))
