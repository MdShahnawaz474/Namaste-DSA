const binarySearch2 = (arr, target)=>{
    let start =0;
    let end = arr.length -1;
    
    while(start <= end){
        let mid =start + Math.floor((end-start)/2)
        if(arr[mid]>target){
         end = mid-1;
        }else if(arr[mid]<target){
          start = mid+1;
        }else{
            return mid;
        }
    }
    return -1
}

const arr =[1,2,3,23,34,55,56];
const result = binarySearch2(arr,23);
console.log(result);
