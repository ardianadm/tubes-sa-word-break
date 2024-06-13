const fs = require('fs');
const path = require('path');

function loadDictionary(filePath) {
    try {
        const rawData = fs.readFileSync(filePath, 'utf8');
        const dictionary = JSON.parse(rawData);
        return dictionary;
    } catch (err) {
        console.error('Error loading dictionary:', err);
        return {};
    }
}
const filePath = path.join(__dirname, 'dictionary.json');
const dict = loadDictionary(filePath);

function wordBreak(n, dict, s) {
    let ans = '';
    wordBreakUtil(n, s, dict, ans);
}
function wordBreakUtil(n, s, dict, ans) {
    for (let i = 1; i <= n; i++) {
        let prefix = s.substring(0, i);

        if (dict.includes(prefix)) {
            if (i == n) {
                ans += prefix;
                console.log(ans + ' ');
                return;
            }
            wordBreakUtil(n - i, s.substring(i, n), dict, ans + prefix + ' ');
        }
    }
}

let str1 = 'intoworld';
let n1 = str1.length;
wordBreak(n1, dict, str1);
let str2 = 'somehowdoyourself';
let n2 = str2.length;
wordBreak(n2, dict, str2);
let str3 = 'iamsmart';
let n3 = str3.length;
wordBreak(n3, dict, str3);
let str4 = 'iamgentleman';
let n4 = str4.length;
wordBreak(n4, dict, str4);
let str5 = 'teamworkontheweekend';
let n5 = str5.length;
wordBreak(n5, dict, str5);






// const fs = require('fs');
// const path = require('path');

// function loadDictionary(filePath) {
//     try {
//         const rawData = fs.readFileSync(filePath, 'utf8');
//         const dictionary = JSON.parse(rawData);
//         if (!Array.isArray(dictionary)) {
//             throw new Error("Dictionary should be an array of words.");
//         }
//         return dictionary;
//     } catch (err) {
//         console.error("Error loading dictionary:", err);
//         return [];
//     }
// }

// const filePath = path.join(__dirname, 'index2.json');
// const dict = loadDictionary(filePath);

// function wordBreak(s, dict) {
//     let result = [];
//     wordBreakUtil(s, dict, '', result);
//     return result;
// }

// function wordBreakUtil(s, dict, ans, result) {
//     if (s.length === 0) {
//         result.push(ans.trim());
//         return;
//     }

//     for (let i = 1; i <= s.length; i++) {
//         let prefix = s.substring(0, i);
//         if (dict.includes(prefix)) {
//             wordBreakUtil(s.substring(i), dict, ans + prefix + ' ', result);
//         }
//     }
// }

// let str1 = 'intoworld';
// console.log('\n===== First Test =====');
// console.time('First Test Time');
// let results1 = wordBreak(str1, dict);
// results1.forEach(res => console.log(res));
// console.timeEnd('First Test Time');

// let str2 = 'somehowdoyourself';
// let str3 = 'iamsmart';
// let str4 = 'iamgentleman';
// let str5 = 'teamworkontheweekend';

// console.log(wordBreak('somehowdoyourself', wordDict));
// console.log(wordBreak('iamsmart', wordDict));
// console.log(wordBreak('iamgentleman', wordDict));
// console.log(wordBreak('teamworkontheweekend', wordDict));

// console.log('\n===== Second Test =====');
// console.time('Second Test Time');
// let results2 = wordBreak(str2, dict);
// results2.forEach(res => console.log(res));
// console.timeEnd('Second Test Time');

// console.log('\n===== Third Test =====');
// console.time('Third Test Time');
// let results3 = wordBreak(str3, dict);
// results3.forEach(res => console.log(res));
// console.timeEnd('Third Test Time');

// console.log('\n===== Fourth Test =====');
// console.time('Fourth Test Time');
// let results4 = wordBreak(str4, dict);
// results4.forEach(res => console.log(res));
// console.timeEnd('Fourth Test Time');

// console.log('\n===== Fifth Test =====');
// console.time('Fifth Test Time');
// let results5 = wordBreak(str5, dict);
// results5.forEach(res => console.log(res));
// console.timeEnd('Fifth Test Time');

// const fs = require('fs');
// const path = require('path');

// // Function to load dictionary from a JSON file
// function loadDictionary(filePath) {
//   try {
//     const rawData = fs.readFileSync(filePath, 'utf8');
//     const dictionary = JSON.parse(rawData);
//     return new Set(dictionary); // Ensure the dictionary is a set
//   } catch (err) {
//     console.error("Error loading dictionary:", err);
//     return new Set();
//   }
// }

// // Define the file path and load the dictionary
// const filePath = path.join(__dirname, 'index2.json');
// const wordDict = loadDictionary(filePath);

// // Function to segment the string using the dictionary
// function wordBreak(s, wordDict) {
//   const n = s.length;
//   const DP = new Array(n + 1).fill(false);
//   DP[0] = true;
//   const result = [];

//   // Fill the DP table
//   for (let i = 1; i <= n; i++) {
//     for (let j = 0; j < i; j++) {
//       if (DP[j] && wordDict.has(s.substring(j, i))) {
//         DP[i] = true;
//         break;
//       }
//     }
//   }

//   if (!DP[n]) {
//     return "String cannot be segmented";
//   }

//   // Reconstruct the segmented string
//   let i = n;
//   while (i > 0) {
//     for (let j = 0; j < i; j++) {
//       if (DP[j] && wordDict.has(s.substring(j, i))) {
//         result.push(s.substring(j, i));
//         i = j;
//         break;
//       }
//     }
//   }

//   return result.reverse().join(' '); // Correct the result to join with space
// }

// // Example usage and additional test cases with timing
// function testWordBreak(sentence) {
//   console.time(sentence);
//   const result = wordBreak(sentence, wordDict);
//   console.timeEnd(sentence);
//   console.log(result);
// }

// testWordBreak('intoworld');
// testWordBreak('somehowdoyourself');
// testWordBreak('iamsmart');
// testWordBreak('iamgentleman');
// testWordBreak('teamworkontheweekend');

// const fs = require('fs');
// const path = require('path');

// function loadDictionary(filePath) {
//     try {
//         const rawData = fs.readFileSync(filePath, 'utf8');
//         const dictionary = JSON.parse(rawData);
//         return dictionary;
//     } catch (err) {
//         console.error("Error loading dictionary:", err);
//         return {};
//     }
// }

// const filePath = path.join(__dirname, 'index2.json');
// const dict = loadDictionary(filePath);

// function wordBreak(n, dict, s) {
//     let ans = '';
//     wordBreakUtil(n, s, dict, ans);
// }

// function wordBreakUtil(n, s, dict, ans) {
//     for (let i = 1; i <= n; i++) {
//         let prefix = s.substring(0, i);

//         if (dict.includes(prefix)) {
//             if (i == n) {
//                 ans += prefix;
//                 console.log(ans + ' ');
//                 return;
//             }
//             wordBreakUtil(n - i, s.substring(i, n), dict, ans + prefix + ' ');
//         }
//     }
// }

// let str1 = 'intoworld'; // for first test case
// let str2 = 'somehowdoyourself'; // for second test case
// let str3 = 'iamsmart'; // for second test case
// let str4 = 'iamgentleman'; // for second test case
// let str5 = 'teamworkontheweekend'; // for second test case
// let n1 = str1.length; // length of first string
// let n2 = str2.length; // length of second string
// let n3 = str3.length; // length of second string
// let n4 = str4.length; // length of second string
// let n5 = str5.length; // length of second string

// console.log('\n===== First Test =====');
// wordBreak(n1, dict, str1);

// console.log('\n===== Second Test =====');
// wordBreak(n2, dict, str2);

// console.log('\n===== Third Test =====');
// wordBreak(n3, dict, str3);

// console.log('\n===== Forth Test =====');
// wordBreak(n4, dict, str4);

// console.log('\n===== Fifth Test =====');
// wordBreak(n5, dict, str5);

// // List of strings in dictionary
// //   let dict = [ 'mobile', 'samsung', 'sam', 'sung', 'man', 'mango', 'icecream', 'and',
// //     'go', 'i', 'love', 'ice', 'cream' ];

// // var dictionary = [
// //     "mobile",
// //     "samsung",
// //     "sam",
// //     "sung",
// //     "man",
// //     "sam",
// //     "mango",
// //     "icecream",
// //     "and",
// //     "go",
// //     "i",
// //     "like",
// //     "ice",
// //     "cream",
// //   ];

// //   function dictionaryContains(word) {
// //     var size = dictionary.length;
// //     for (var i = 0; i < size; i++) if (dictionary[i] === word) return true;

// //     return false;
// //   }

// //   var wb, isValid, stringTarget;
// //   function wordBreak(str) {
// //     var size = str.length;
// //     wb = Array(size + 1).fill(false);
// //     if (size === 0) return true;

// //     for (var i = 1; i <= size; i++) {
// //       if (wb[i] === false && dictionaryContains(str.substring(0, i)))
// //         wb[i] = true;

// //       if (wb[i] === true) {
// //         if (i === size) return (isValid = true);

// //         for (j = i + 1; j <= size; j++) {
// //           if (wb[j] === false && dictionaryContains(str.substring(i, j)))
// //             wb[j] = true;

// //           if (j === size && wb[j] === true) return (isValid = true);
// //         }
// //       }
// //     }

// //     return (isValid = false);
// //   }

// //   function printRanges(array) {
// //     let str = "";
// //     let start = 0;
// //     if (!isValid) return "No valid words";
// //     for (let i = 0; i < array.length; i++) {
// //       if (array[i]) {
// //         str = str + stringTarget.substring(start - 1, i) + " ";
// //         start = i + 1;
// //       }
// //     }
// //     return str;
// //   }
// //   stringTarget = "intoworld";
// // //   console.log(dictionary);
// //   console.log(wordBreak(stringTarget));
// //   console.log(printRanges(wb));
