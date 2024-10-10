# 8kyu - Convert a Boolean to String

## Description
`Implement a function which convert the given boolean value into its string representation. Note: Only valid inputs will be given.`

**Link:** https://www.codewars.com/kata/551b4501ac0447318f0009cd

## My Solutions

### 1) Using if ... else
```js
function booleanToString(b){
  if (b === true){
    return 'true'
  } else {
    return 'false'
  }
}
```

### 2) Using ternary operator
```js
function booleanToString(b){
  return b === true ? 'true' : 'false'
  }
  ```

  ### 3) Using `.toString()`
  ```js
  //simplest solution in my opinion
  function booleanToString(b){
    return b.toString()
  }
```

  ### 4) Not really a full solution, but as you'll usually see on codewars...
  ```js
  const booleanToString = b => //whatever our solution is
  
  //eg. b.toString()
  ```