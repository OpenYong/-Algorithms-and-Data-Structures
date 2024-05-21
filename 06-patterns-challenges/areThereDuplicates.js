/**
 * 가변적인 수의 인수(a variable number of arguments)를 받아들이고 전달된 인자 중 중복이 있는지 확인하는 areThereDuplicates라는 함수를 구현합니다.
 * 빈도 카운터 패턴 또는 다중 포인터 패턴을 사용하여 이 문제를 해결할 수 있습니다.
 *
 * 제약 조건:
 * Time - O(n)
 * Space - O(n)
 *
 * 보너스:
 * Time - O(n log n)
 * Space - O(1)
 */

// 빈도수 솔루션
function areThereDuplicates(...params) {
  let counter = {};
  for (const val of params) {
    counter[val] = (counter[val] || 0) + 1;
    if (counter[val] > 1) return true;
  }

  return false;
}

areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates("a", "b", "c", "a"); // true

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));

// 다중 포인터 솔루션
function areThereDuplicates2(...args) {
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}
