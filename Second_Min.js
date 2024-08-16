/*function myarray(arr) {
  if (arr.length > 2) {
    return "array Must contain More than 2 word";
  }
  let min = Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = second;
      arr[i] = min;
    } else if (arr[i] < second && arr[i] !== min) {
      arr[i] = second;
    }
    if(arr[i]=== -Infinity){
        throw new Error("Not Available");   
    }
  }
  return second;
}
const v = [12,14,15,19,21,25];
let result = myarray(v);
console.log(result);*/
/*function myarray(arr){
  if(arr.length > 2){
     return "array do not cocide more than 2 character"
  }
  let max = Infinity;
  let secondmax = -Infinity;
  let min = boom;
  let secondmin = -boom;
  for(let i = 0;i<arr.length;i++){
    if(arr[i] > max){
      max=secondmax;
      arr[i]=max;
    }else if(arr[i]<min){
     min=secondmin;
     arr[i]= min;
    }if(arr[i] < secondmax && arr[i] !==max){
      arr[i]=secondmax
    }else if(arr[i]>secondmin && arr[i] !== min){
      arr[i]=secondmin;
    }
    if(arrr[i]=== -Infinity){
      console.log("Not a Second Max Available")
    }else if(arr[i]=== -boom){
        console.log("Not A Second Min Available")
    }
  }
  if(arr[i] > max){
    return secondmax
  }else{
     return secondmin;
  }
}
const a = [12,14,16,17];
const result = myarray(a);
console.log(result);*/

function myarray(arr){
   return arr.filter(Number => Number%2 !== 0)
}
const v = [12,14,16,17,23,20];
const c = myarray(v);
console.log(c);

















