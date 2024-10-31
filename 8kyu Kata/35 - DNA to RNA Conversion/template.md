# 8kyu - Calculate BMI

## Description
```js
/*
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
*/
```

**Link:** https://www.codewars.com/kata/5556282156230d0e5e000089/

## My Solutions
1. 
```js
function DNAtoRNA(dna) {
  let rna = dna.split('').map(acid => {
    if (acid.includes('T')){
      return 'U'
    } else {
      return acid
    }
  }).join('')
  return rna
}
```

2. 
```js
function DNAtoRNA(dna) {
  return dna.split('').map(acid => {
   return acid.includes('T') ? 'U' : acid
  }).join('')
}
```

3. 
```js
const DNAtoRNA = dna => dna.split('').map(acid => acid.includes('T') ? 'U' : acid).join('')
```