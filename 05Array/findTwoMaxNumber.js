
const arr = [10,29,123,12,134,133];
let maxArr = arr[0];
let secondMax = arr[0]
for (let i =0; i<= arr.length; i++){
    if(maxArr<arr[i]){
        maxArr= arr[i];
    }else if(arr[i]>secondMax && arr[i]!== maxArr){
        secondMax =  arr[i];
    }
}
    
console.log(maxArr);
console.log('Second Max Err ', secondMax);

