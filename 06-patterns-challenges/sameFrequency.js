/**
 * sameFrequency라는 함수를 작성하세요. 두 개의 양의 정수가 주어졌을 때, 두 숫자의 자릿수가 같은 빈도를 갖는지 구합니다.
 */

function sameFrequency(int1, int2) {
  if (int1.toString().length !== int2.toString().length) return false;

  let counter1 = {};
  let counter2 = {};

  for (const num of int1.toString()) {
    counter1[num] = (counter1[num] || 0) + 1;
  }
  for (const num of int2.toString()) {
    counter2[num] = (counter2[num] || 0) + 1;
  }
  for (const key in counter1) {
    if (counter1[key] !== counter2[key]) return false;
  }

  return true;
}

console.log(sameFrequency(182322, 281123));
