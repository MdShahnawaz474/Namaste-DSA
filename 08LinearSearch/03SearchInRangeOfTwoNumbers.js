
const arr = [3,4,4,21,3,52,6,23,5,643,24,5];

function searchInRange (arr,start,end,target){
    if(arr.length ==0){
        return -1;
    }

    for (let i =start; i < end; i++){
        let element = arr[i];
        if(element ==target ){
            return { index: i, value: element };  
        }
    }
    return -1;
}

// const result = searchInRange(arr,1,4,5)
console.log(searchInRange(arr, 3, 6, 21)); 


//Practice
function searchInArray (arr,target){
    if(arr.length===0){
        return -1
    }
    for(let i =0; i<=arr.length ; i++){
        if(arr[i]==target){
            return i;
        }
    }

    return -1
}
 const resultOfArray =searchInArray(arr,21);
//  console.log(resultOfArray);
 