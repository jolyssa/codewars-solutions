# 7kyu - Complementary DNA

## Description
```js
/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/
```

**Link:** https://www.codewars.com/kata/554e4a2f232cdd87d9000038/javascript

## My Solutions

1. With else/else if
```js
function dnaStrand(dna){
  let pair = dna.split('').map(el => {
    if (el == 'A') {
      return 'T'
    } else if (el == 'T') {
      return 'A'
    } else if (el == 'C') {
      return 'G'
    } else if (el == 'G') {
      return 'C'
    }
  }).join('')

  return pair
}
```
I could've also used el.includes('A') in the map method for the same result.

2. With ternary operator
```js
const dnaStrand = dna => dna.split('').map(el => 
     el == 'A' ? 'T' :
     el == 'T' ? 'A' :
     el == 'C' ? 'G' : 
     el == 'G' ? 'C' :
     el
    
  ).join('')
  ```
  