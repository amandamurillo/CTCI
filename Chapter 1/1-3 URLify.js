/*
CTCI - 1.3

URLify:

Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.

EXAMPLE:

Input: "Mr. John Smith"
Output : "Mr.%20John%20Smith"

I: string, number
O: string
C: efficiency
E: empty string, spaces in front, middle, end
*/

//time complexity: 2N - linear
//space complexity: storing three variables- constant

// function URLify(string) {
//     return string.trim().replace(/\s/g, '%20');
// }


//first loop:  counts the number of non space characters in the string
//subtract number of chars from true length n to see how many spaces we are allowed to replace with a %20

//second loop: if we see a space and there are still spaces left, append %20 to output string
//otherwise copy current character
//when you run out of spaces, append the empty string instead.

function URLify(str, n = string.length) {
    let out = '';
    let chars = 0;

    for (let i = 0; i < str.length; i++) {
        let c = str[i];
        if (c !== " ") {
            chars ++;
        }
    }

    let spaces = n - chars;

    for (let i = 0; i < str.length; i++) {
        let c = str[i];
        if ( c === " " && spaces > 0) {
            out += "%20";
            spaces--;
        } else if (c !== " ") {
            out += c;
        }
    }
    //if n is not yet reached and there are still spaces left
    while (spaces > 0) {
        out += "%20"
        spaces--;
    }

    return out;
}




console.log(URLify("Mr. John Smith", 14))
console.log(URLify("this", 4))
console.log(URLify("       hi", 9))