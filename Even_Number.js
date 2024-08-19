/*let number = [10,20,30,40,50,60];
function checkevenodd(arr){
    arr.forEach(element => {
        if(number % 2 === 0){
            console.log(number + " is even");
        }else{
            console.log(number + "odd");
        }
    });
}
checkevenodd(number);*/

// Create an array of numbers
/*let numbers = [10, 23, 42, 57, 68, 79, 90, 101];

// Function to check if a number is even or odd
function checkEvenOdd(arr) {
    arr.forEach(number => {
        if (number % 2 === 0) {
            console.log(number + " is even");
        } else {
            console.log(number + " is odd");
        }
    });
}

// Call the function with the array
checkEvenOdd(numbers);*/

/*let number = [23 , 26 , 29 , 31 , 33 , 56]
function check(arr){
     arr.forEach(number => {
        if(number % 2 === 0){
            console.log(number + "Is Even");
        }else{
             console.log(number + "Odd")
        }
     });
}
check(number);
*/

// Number for create in array and it is divisble by 2 and 3

// Define the range of numbers
/*let start = 1;
let end = 50;

// Create an array to store the numbers divisible by 2 or 3
let divisible = [];

// Loop through the range of numbers
for (let i = start; i <= end; i++) {
  // Check if the number is divisible by 2 or 3
  if (i % 2 === 0 || i % 3 === 0) {
    divisible.push(i);
  }
}

// Output the array
console.log(divisible);*/

/*let start = 1;
let end = 50;

let divisble = [];

for(let i=start;i<=end ;i++){
     if(i%2 ===0 || i%3 === 0){
        divisble.push(i)
     }
}
console.log(divisble);*/
let Number = [12, 13, 14, 18, 19, 21];
function even(arr) {
  arr.forEach((Number) => {
    if (Number % 2 === 0) {
      console.log(Number + "Is Even");
    } else {
      console.log(Number + "Is Odd");
    }
  });
  even(Number);
}
