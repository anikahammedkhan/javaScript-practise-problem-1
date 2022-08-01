// Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to 
// help Harry calculate how much money the shopkeeper will return.
// Input:
// The first line of the input is the taka Harry’s mom gave him. 
// The second line is the cost of 1 kg of oranges and 1 kg of apples.
// Output:
// Print the result.


var momGive = 1000;
var applePerKg = 150;
var orangePerKg = 120;
orangePrice = orangePerKg * 2;
applePrice = applePerKg * 3;
totalPrice = applePrice + orangePrice;
shopkeeperReturn = momGive - totalPrice;
console.log(shopkeeperReturn);