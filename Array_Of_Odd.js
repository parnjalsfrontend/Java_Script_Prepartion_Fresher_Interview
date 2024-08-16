function Odd(arr){
     return arr.filter(Number => Number % 2 !== 0)
}

const negative = [11,12,13,14,16,17,19,21,23];
const getOdd = Odd(negative);
console.log(getOdd);