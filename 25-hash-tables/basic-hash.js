function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

// 이 함수의 문제점들
// - 오직 string만 해시처리한다.
// - 상수 값의 시간을 가지지 않는다는 점.
// - 랜덤 데이터가 나오게 된다. (데이터가 뭉침)
