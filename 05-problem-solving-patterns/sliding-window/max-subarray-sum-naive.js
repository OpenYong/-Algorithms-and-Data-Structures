/**
 * 문제)
 * 정수 배열과, 숫자 n을 매개변수로 받는 maxSubarraySum 함수를 작성한다.
 * 함수는 배열에서 n개의 연속된 요소의 합의 최대값을 구한다.
 *
 * Input)
 * maxSubarraySum([2,6,9,2,1,8,5,6,3],3) -> 19
 * maxSubarraySum([1,2,5,2,8,1,5],2) -> 10
 * maxSubarraySum([1,2,5,2,8,1,5],4) -> 17
 * maxSubarraySum([4,2,1,6],1) -> 6
 * maxSubarraySum([4,2,1,6,2],4) -> 13
 *
 */

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 19
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
