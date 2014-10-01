// Question 1: Calculate the average price of all items.
var priceArray = [];

var prices = items.forEach( function(item) {

  var itemPrices = item.price;
  priceArray.push(itemPrices);

});

var sum = priceArray.reduce(function(a,b) {
  return a + b;
})

var average = sum / items.length;

console.log('The average price is ' + average.toFixed(2));

// Question 2: 
