// Multiple Pointer - averagePair

// 목표: averagePair라는 함수를 작성하세요. 이 함수는 정렬된 정수 배열과 목표 평균이 주어졌을 때, 배열 내에서 평균이 목표 평균과 같은 두 정수의 쌍이 존재하는지 확인합니다. 목표 평균과 일치하는 쌍이 여러 개 있을 수 있습니다.

// 보너스 제약조건:
// 	•	시간 복잡도: O(N)
// 	•	공간 복잡도: O(1)

// 예시 입력 및 출력:
// averagePair([1, 2, 3], 2.5) // true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) // true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1) // false
// averagePair([], 4) // false

function averagePair(arr, avrageNum) {
  if (arr.length === 0) return false;

  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx < rightIdx) {
    if ((arr[leftIdx] + arr[rightIdx]) / 2 === avrageNum) {
      return true;
    } else if ((arr[leftIdx] + arr[rightIdx]) / 2 < avrageNum) {
      leftIdx++;
    } else {
      rightIdx--;
    }
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));
// true
// true
// false
// false
