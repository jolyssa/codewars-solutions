# 8kyu - Hello, Name or World!

## Description
```js
/*
Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"
*/
```

**Link:** https://www.codewars.com/kata/57e3f79c9cb119374600046b/javascript

## My Solution
```js
function hello(name) {
  return name ? `Hello, ${name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase()}!` : `Hello, World!`
}
```