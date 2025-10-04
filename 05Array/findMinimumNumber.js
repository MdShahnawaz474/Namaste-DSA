
// Find the minimum array of the arr and replace the it to min arr;

const arr = [10,20,122,123,12,3,102];

let minArr = arr[0];

for(let i = 1; i<= arr.length ; i++){
    if(minArr>arr[i]){
        minArr = arr[i];
    }
}

console.log(minArr);
