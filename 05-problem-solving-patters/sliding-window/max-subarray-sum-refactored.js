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

/**
 * Sliding Window 패턴으로 접근한다.
 * 1. 초기 합 계산: 처음 `num`개의 요소 합을 계산하여 `maxSum`과 `tempSum`에 저장한다.
 * 2. 슬라이딩 윈도우: 배열을 순회하면서 윈도우를 오른쪽으로 한 칸씩 이동한다. 이동할 때마다 `tempSum`에서 이전 윈도우의 첫 요소를 빼고, 새 윈도우의 마지막 요소를 더한다.
 * 3. 최대값 갱신: `maxSum`을 현재 `tempSum`과 비교하여 더 큰 값으로 갱신한다.
 */

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 19
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
