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
const wordDict = new Set([...loadDictionary(filePath)]);

function wordBreak(s, wordDict) {
    const n = s.length;
    const DP = new Array(n + 1).fill(false);
    DP[0] = true;
    const result = [];
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (DP[j] && wordDict.has(s.substring(j, i))) {
                DP[i] = true;
                break;
            }
        }
    }
    if (!DP[n]) {
        return 'String cannot be segmented';
    }
    let i = n;
    while (i > 0) {
        for (let j = 0; j < i; j++) {
            if (DP[j] && wordDict.has(s.substring(j, i))) {
                result.push(s.substring(j, i));
                i = j;
                break;
            }
        }
    }
    return result.reverse().toString().replace(/,/g, ' ');
}

console.log(wordBreak('intoworld', wordDict));
console.log(wordBreak('somehowdoyourself', wordDict));
console.log(wordBreak('iamsmart', wordDict));
console.log(wordBreak('iamgentleman', wordDict));
console.log(wordBreak('teamworkontheweekend', wordDict));
