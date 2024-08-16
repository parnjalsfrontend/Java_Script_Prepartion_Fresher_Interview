/*function secondLargestNumber(arr) {
    if (arr.length < 2) {
        throw new Error("Array must contain at least two elements");
    }

    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
            secondLargest = arr[i];
        }
    }

    if (secondLargest === -Infinity) {
        throw new Error("There is no second largest number");
    }

    return secondLargest;
}

// Example usage:
const arr = [10, 20, 4, 45, 99];
console.log(secondLargestNumber(arr)); // Output: 45*/

/*function myarray(arr){

    if(arr.length>2){
        return 'must be contain two alphabetic order'
    }
    let first = Infinity;
    let second = -Infinity;

    for(let i =0;i<arr.length;i++){
        if(arr[i]>first){
            arr[i]=first;
            second=first;
        }else if(arr[i]> second && arr[i] !== first){
            second = arr[i]
        }
    }
    if(second === -Infinity){
        console.log("Not Available")
    }
    return second;
}
const arr = [12,13,14,15,20];
console.log(myarray(arr));*/

/*function myarray(arr){
     if(arr.length < 2){
         return "Must be More than two alphabetic number"
     }
     let first = Infinity;
     let second = -Infinity;
     for(let i= 0 ; i<arr.length ; i++){
        if(arr[i] > first){
             second = first;
             arr[i] = first;
             }else if(arr[i]>second && arr[i] !== first){
                arr[i] = second;
             }
             if(arr[i] === -Infinity){
                throw new error("Not Available for second largest Number")
             }
     }
     return second;
}

const a = [12,15,16,20,24];
console.log(myarray(arr));*/