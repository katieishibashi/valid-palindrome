/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function (s) {
  if (!s) {
    return true;
  }
  let regex = /[a-z|\d]/gmi;
    var strArr = s.match(regex);

  // return if there are no valid characters
  if (strArr === null) {
    return true;
  }
  // return true if there is only one characters
  if (strArr.length === 1) {
    return true;
  }
  let str = strArr.join('').toLowerCase();

  // otherwise, do the two pointers
  let left = 0;
  let right = str.length - 1;
  let isValid = true;

  while (left < right) {
    if (str[left] !== str[right]) {
      isValid = false;
      break;
    } else {
      left++;
      right--;
    }
  }
  return isValid;
};
