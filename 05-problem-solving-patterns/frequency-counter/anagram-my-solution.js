/**
 * 문제: 두 문자열이 주어졌을 때, 두 문자열이 anagrams인지 확인하는 함수를 작성하라.
 * Anagrams란 두 문자열의 문자들이 동일한 빈도수로 구성되어 있는지 확인하는 것이다.
 *
 * 두 개의 문자열이 주어졌을 때, 두 번째 문자열이 첫 번째 문자열의 애너그램인지 확인하는 함수를 작성합니다. 애너그램은 다른 글자의 글자를 재배열하여 형성된 단어, 구 또는 이름입니다. (예시: cinema -> iceman)
 *
 * Note: Time Complexity - O(n)
 *
 * Input: 'aaz', 'zza'
 * Output: false
 *
 * Input: 'anagram', 'nagaram'
 * Output: true
 *
 */

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let counter1 = {};
  let counter2 = {};

  for (let char of str1) {
    const normalisedChar = char.toLowerCase();
    counter1[normalisedChar] = (counter1[normalisedChar] || 0) + 1;
  }
  for (let char of str2) {
    const normalisedChar = char.toLowerCase();
    counter2[normalisedChar] = (counter2[normalisedChar] || 0) + 1;
  }

  for (let key in counter1) {
    if (!(key in counter2)) {
      return false;
    }
    if (counter1[key] !== counter2[key]) {
      return false;
    }
  }

  return true;
}

validAnagram("aaz", "zza");
validAnagram("Anagram", "nagaram");
