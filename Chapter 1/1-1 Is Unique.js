/*
CTCI - 1.1

Is Unique:

Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

I:
O:
C:
E:
*/

//time complexity: linear O(n)
//space complexity: linear O(n) - if all characters are unique, we have to store every character

function buildCharMap(str) {
    let charMap = {};
    for (char of str) {
      if (!charMap[char]) {
        charMap[char] = 1;
      } else {
        charMap[char] ++;
      }
    }
    return charMap;
}

function isUnique (str) {
  const charMap = buildCharMap(str);
  for (let key in charMap) {
    if (charMap[key] > 1) {
      return false;
    } 
  }
  return true;
}

console.log(isUnique("tree"))
console.log(isUnique("cats"))
console.log(isUnique("!hflafi"))