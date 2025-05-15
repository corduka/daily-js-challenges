// Write a function charFrequency(str) that takes a string
//  str and returns an object where:

// Each key is a character in the string (excluding whitespace).

// Each value is the number of times that character appears in the string.

// The counting should be case-insensitive (e.g., "A" and "a" are the same).

// The returned object’s keys should be sorted in alphabetical order.

let str = "I Love JavaScript"; 
let freq = {};

// Step 1: Normalize the string
str = str.toLowerCase();
str = str.replace(/\s/g, ''); // remove all whitespace

// Step 2: Count frequencies
for (let char of str) {
  freq[char] = freq[char] ? freq[char] + 1 : 1;
}

// Step 3: Sort alphabetically
let sortedFreq = Object.keys(freq)
  .sort()
  .reduce((acc, key) => {
    acc[key] = freq[key];
    return acc;
  }, {});

console.log(sortedFreq);


