/**
 * 문제)
 * 두 배열이 주어졌을 때, 두 배열의 요소들이 서로 제곱된 값으로 이루어져 있는지 확인하라.
 * 두 배열을 받는 same이라는 함수를 작성하라.
 * 이 함수는 배열의 모든 값의 제곱에 해당하는 값이 두번째 배열에 존재하면 true를 반환한다.
 * 순서는 상관없지만 값의 빈도는 모두 같아야 한다.
 */

// naive solution
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } // 1. 길이 확인
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2); // indexOf는 반복문을 사용하므로 O(n)의 시간복잡도를 가진다.
    if (correctIndex === -1) {
      return false;
    } // 2. 제곱되는 값이 존재하는지 확인.
    arr2.splice(correctIndex, 1); // 2-1. 값이 존재하면 배열에서 제거
    console.log(arr2);
  }
  return true;
}

// 최종적으로 O(n^2)의 시간복잡도를 가진다.

same([1, 2, 3, 2], [9, 1, 4, 4]);
