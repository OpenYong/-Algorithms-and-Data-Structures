/**
 * 문제) 정렬된 숫자 배열이 주어졌을 때, 배열 내에서 고유한 숫자의 개수를 세어 반환하는 countUniqueValues 함수를 작성하세요.
 *
 * 예시)
 * Input: countUniqueValues([1, 1, 1, 1, 1, 2])
 * Output: 2
 *
 * Input: countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
 * Output: 7
 *
 * Input: countUniqueValues([])
 * Output: 0
 */

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let count = 1;
  let left = (right = 0);

  while (right < arr.length) {
    if (left === right) {
      right++;
      continue;
    }

    if (arr[left] !== arr[right]) {
      count++;
      left = right;
      continue;
    }

    right++;
  }

  return count;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
