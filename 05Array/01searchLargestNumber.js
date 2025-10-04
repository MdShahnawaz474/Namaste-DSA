
const arr = [1,3,4,5,89,8,9,-7];
//without using javascript internal function
function searchLargestNumber (arr){
    let largestNumber = arr[0];
    for(let i =1; i<arr.length; i++){
        if(arr[i]>largestNumber){
            largestNumber=arr[i];
        }
    }
    return largestNumber;
}

const largestNumber = searchLargestNumber(arr);
// console.log(largestNumber);

//with using javascript internal function;
const arrays= Math.max(...arr);
console.log(arrays);


//revision
const searchNegativeNumber = (arr)=>{
    let count =0;
    for(let i =0; i<=arr.length; i++){
        if(arr[i]<0){
            count ++
        }
    }
    return count
}

const result = searchNegativeNumber(arr);
// console.log(result);
