/*
CTCI - 1.2

Check Permutation:

Given two strings, write a method to decide if one is a permuation of the other.

I: strings
O: boolean
C: efficient
E: symbols, spaces
*/

//time complexity: linear O(n)
//space complexity: linear O(n)

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

function isPermutation(str1, str2){
    const charMapStr1 = buildCharMap(str1)
    const charMapStr2 = buildCharMap(str2)

    //object comparison
    if (Object.keys(charMapStr1).length !== Object.keys(charMapStr2).length) {
        return false;
    } 
    for (let key in charMapStr1) {
        if (charMapStr1[key] !== charMapStr2[key]) {
            return false;
        }
    }
    return true;
}

console.log(isPermutation("trees", "this"))
console.log(isPermutation("shit", "this"))
console.log(isPermutation("!hfsihtoe", "tTids"))





