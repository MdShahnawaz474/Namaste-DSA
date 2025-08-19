
// Replace maxArr with the max number of the arr array
const arr = [10,20,30,100,101,4,2];
let maxArr = arr[0];

for(let i = 1; i <= arr.length ; i++){
    if(maxArr<arr[i]){
        maxArr=arr[i];
    }
}

console.log(maxArr);
// 101