// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and 
// Bangla of a student.
// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively. 
// Output:
// Print the result in 2 decimal places.


var mathematics = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;
totalMarks = mathematics + biology + chemistry + physics + bangla;
avarageMarks = totalMarks / 5;
avarageMarks = avarageMarks.toFixed(2);
console.log(avarageMarks);