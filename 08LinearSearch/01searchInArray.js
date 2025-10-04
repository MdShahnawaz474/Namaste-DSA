
const linearSearch =(arr, target)=>{
    
    if(arr.length==0){
        return -1;
    }

    // Run a for loop 
    for (let i =0; i<arr.length;i++){
        let element = arr[i];
        if(element===target){
            return i;
        }
    }
    return -1
}

let arr2=[2,4,42,12,4,5,23,4]

// console.log(linearSearch(arr2,3));




const searchInStrings=(arr,target)=>{
    if(arr.length==0){
        return -1
    }
    for(let i =0; i <arr.length;i++){
        // let element = arr[i]
        if(arr[i]==target){
            return i;
        }
    }
    return -1;
}

const arr  = [1,2,3,42,13,42,1]
// const result  = searchInStrings(arr,3)

// console.log(result);


const searchInArray = (arr, target)=>{
    if(arr.length ===0) return -1;
    for (let i =0; i<= arr.length ; i++){
        if(arr[i]=== target){
            return i;
        }
    }
    return -1;
}
console.log(searchInArray(arr,13));
