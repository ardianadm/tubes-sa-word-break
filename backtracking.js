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
