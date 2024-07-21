/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => x===Number(x.toString().split("").reverse().join("")) ? true : false
;

console.log(isPalindrome(121))