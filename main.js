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

console.log('Q1 : The average price is ' + average.toFixed(2));

// Question 2: Get an array of items that cost between $14.00 and $18.00 USD

var itemTitles = [];
var arrForRange = items.forEach( function(x){
  if (x.price > 14 && x.price < 18) {
    itemTitles.push('title :' + x.title);
  };
});

console.log(itemTitles);

// Question 3: Find the item with a "GBP" currency code and print its name and price.
var currencyCode = [];
var currencyGBP = items.filter( function(y) {
  if (y.currency_code === "GBP") {
    currencyCode.push(y.title + " costs \u00A3" + y.price);
  }
})

console.log(currencyCode);

// Question 4: Find which items are made of wood.
var madeWithWood = [];
var woodItem = items.forEach( function(z) {
  if (z.materials == "wood") {
    madeWithWood.push(z.description);
  }
});

console.log(madeWithWood);

// Question 5: Find which items are made of eight or more materials.
var moreThanEight = [];
var lotsOfMats = items.filter( function(m) {
  var mats = m.materials;
  if (mats.length >= 8) {
    console.log(m.title, m.materials);
  }
});
