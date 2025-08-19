 const arr=[10,20,30,4,2,0,8,2];

 let temp = new Array(arr.length);
let j =0; 
 for(let i = arr.length-1; i>=0; i--){
    temp[j] = arr[i];
    j++;
 }

 console.log(temp);
 console.log(j);
 
 
//[ 2,  8,  0,  2,  4, 30, 20, 10]