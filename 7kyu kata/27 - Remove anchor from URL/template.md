# 7kyu - Remove anchor from URL


## Description
```js
/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
```

**Link:** https://www.codewars.com/kata/51f2b4448cadf20ed0000386/javascript

## My Solution
```js
function removeUrlAnchor(url){
  return url.split('#').shift();
}
```