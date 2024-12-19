# 7kyu - Odd-Even String Sort

## Description
```js
/*
Given a string s, your task is to return another string such that even-indexed and odd-indexed characters of s are grouped and the groups are space-separated. Even-indexed group comes as first, followed by a space, and then by the odd-indexed part.

Examples
input:    "CodeWars" => "CdWr oeas"
           ||||||||      |||| ||||
indices:   01234567      0246 1357
Even indices 0, 2, 4, 6, so we have "CdWr" as the first group.
Odd indices are 1, 3, 5, 7, so the second group is "oeas".
And the final string to return is "Cdwr oeas".

Notes
Tested strings are at least 8 characters long.
*/
```

**Link:** https://www.codewars.com/kata/580755730b5a77650500010c/javascript

## My Solution
```js
function sortMyString(S) {
 let even = S.split('').filter((str, ind) => ind % 2 === 0).join('')
 let odd = S.split('').filter((str, ind) => ind % 2 !== 0).join('')
 return [even, odd].join(' ')
}
```