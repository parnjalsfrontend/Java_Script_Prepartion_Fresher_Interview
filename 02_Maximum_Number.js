/*function myarray(arr){
    let max = arr[0]

    for(let i =0 ;i<arr.length;i++){
         if(arr[i]>max){
            console.log(arr[i])
         }
    }
    return max;
}*/

function myarray(arr){
   let max = arr[0];

   for(let i =0;i<arr.length ; i++){   // find the length of the Array
     if(arr[i]>max){     // Find the Maximum of the arrray ,
         console.log(arr[i])
     }
   }
}