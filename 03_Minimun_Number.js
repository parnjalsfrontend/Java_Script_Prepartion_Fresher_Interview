/*function myarray(arr){
 let min = infinity;
 let secondmin = infinity;
 for(let i=0;i<arr.length;i++){
     if(arr[i]< min){
        secondmin = min;
        min = arr[i]
     }else if(arr[i]<secondmin && arr[i] !== min){
        secondmin = arr[i]
     }
 }
 if(secondmin === infinity){
    throw new Error("No Second Minimun Required")
 }
 return secondmin
}*/

function myarray(arr){
    if(arr>2){
        throw new Error('Array should be More than 2 character')
    }
    let max = Infinity;
    let secondmax = Infinity

    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
            secondmax = max;
        }else if(arr[i] > secondmax && arr[i] !== max){
            secondmax = arr[i];
        }
        if(secondmax === Infinity){
            throw new Error("Not available second maximum number");
        }
    }
    return secondmax;
}
const boom = [2,4,8,9,10];
const result = myarray[boom];
console.log(result);

function min(arr){
     let mc = arr[0]
     for(let i = 0;i<arr.length;i++){
         if(arr[i]>min){
            console.log(arr[i])
         }
     }
}