# 8kyu - Training JS #7: if..else and ternary operator


## Description
```js
/*
Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

number of hotdogs	price per unit (cents)
n < 5	100
n >= 5 and n < 10	95
n >= 10	90
You can use if..else or ternary operator to complete it.
*/
```

**Link:** https://www.codewars.com/kata/57202aefe8d6c514300001fd/javascript

## My Solution
```js

function saleHotdogs(n){
  let price
  if (n < 5) {
     price = 100 
    } else if (n >=5 && n < 10) {
     price = 95 
  } else if (n >= 10){
     price = 90
  } 
  return price * n
}
```