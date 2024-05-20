/**
 * 숫자로 구성되어 있고 정렬된 배열을 인자로 받는  sumZero 함수는 두 원소의 합이 0이 되는 첫번째 두 원소쌍을 찾아야 한다. 없다면 undefined를 반환한다.
 *
 * sumZero([-3, -2, -1, 0, 1, 2, 3]) => [-3, 3]
 * sumZero([-2, 0, 1, 3]) => undefined
 * sumZero([1, 2, 3]) => undefined
 *
 */

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
