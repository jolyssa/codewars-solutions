# 8kyu - A Needle in the Haystack



## Description
```js
/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
*/
```

**Link:** https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/javascript

## My Solutions

1. Using a for loop.

```js
function findNeedle(haystack) {
  for (i = 0; i < haystack.length; i++) {
    if (haystack[i] === 'needle') {
    //could also say if (haystack.indexOf('needle'))
      return `found the needle at position ${haystack.indexOf('needle')}`
    }
  }
}
```

2. Slight variation of the for loop.

```js
function findNeedle(haystack) {
  for (i = 0; i < haystack.length; i++) {
    if (haystack[i] === 'needle') {
      return `found the needle at position ` + i
    }
  }
}
```

3. Lastly, you can omit the for loop all together and simply write:

```js
function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`
}
```