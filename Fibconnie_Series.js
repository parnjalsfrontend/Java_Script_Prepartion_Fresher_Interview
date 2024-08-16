// Fibconnie Series of java script
/*function fibseries(n){
    let fibconni = [0,1]

    for(let i = 2 ; i<n ; i++){
        fibconni[i] = fibconni[i-1] + fibconni[i-2];
    }

    return fibconni;
}

let n = 10;

console.log(fibseries(n));*/

/*function fib(n){

     let fibconni = [0,1];
     for(let i = 2 ; i<n ; i++){
        fibconni[i] = fibconni[i-1] + fibconni[i-2];
     }
     return fibconni;
}*/

/*function fib(n){
    let fibconnie = [0,1];

    for(let i = 2 ; i < n ; i++){
        fibconnie[i] = fibconnie[i-1] + fibconnie[i-2];
    }
    return fibconnie;
}
let n = 12;
console.log(fib(n));*/

function fibconni(fib){
     let fibr = [0,1];
     for(let i = 2 ;i<fib ; i++){
         fibr[i] = fibr[i-1] + fibr[i-2];
     }
     return fibr;
}
let n= 12;
console.log(fibconni(n));

