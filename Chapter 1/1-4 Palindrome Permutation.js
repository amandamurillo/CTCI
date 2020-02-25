/*
CTCI - 1.4

Palindrome Permutation:

Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.The palindrome does not need to be limited to dictionary words.

EXAMPLE: 

I: string
O: Boolean
C: optimize
E: empty string, spaces between and in front and at end, more than two of same char, even and odd chars
*/

//time complexity: linear
//space complexity: linear

    //if even: there must be two of every char
    //if odd: there must be only one unique char
  
    //use hash table to store letters
    //if we see the same letter again, delete from hash

    //check hash at the end: odd - 1 key left, even - no keys left
    //skip spaces

    let palPerm = (str) => {

    let charMap = {};
    let charCount = 0;
  
    for (let i = 0; i < str.length; i++) {
      let c = str[i];
      if (c === ' ') {
        continue;
      }
      if (charMap[c]) {
        delete charMap[c];
      } else {
        charMap[c] = true;
      }
      charCount++;
    }

    if (charCount % 2 === 0) {
      return Object.keys(charMap).length === 0;
    } else {
      return Object.keys(charMap).length === 1;
    }
  }

  //test cases
  console.log(
    palPerm('taco cat') === true,
    palPerm('atco cat') === true,
    palPerm(' rac  ecar rara ') === true,
    palPerm('chirpingmermaid') === false,
    palPerm('aabbc') === true,
    palPerm('aaaabbbbcc') === true,
    palPerm('aabc') === false,
    palPerm('') === true
  );