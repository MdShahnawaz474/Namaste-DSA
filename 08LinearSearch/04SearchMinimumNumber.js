
const arr = [2,1,3,1,3,5,6,-10,7,3,-5];

function searchMinimumNumber(arr){
    if(arr.length ==0){
        return -1
    }
    let temp = arr[0]
    for(let i =0; i<=arr.length; i++){
        if(arr[i]<temp){
           temp = arr[i]
        }
    }
    return temp
}

console.log(searchMinimumNumber(arr));
