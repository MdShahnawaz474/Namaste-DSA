
function binarySearch (arr, target){
    if(arr.length === 0) return -1;
    let start = 0;
    let end = arr.length - 1;
    while(start <= end){
        //Find the middle element 
       let mid = start + Math.floor((end - start) / 2);
        if(target <arr[mid]){
            end = mid-1;

        }else if(target>arr[mid]){
            start = mid+1;

        }else{

           return mid;

        }
    }
    return -1;
}


const ascArr = [1,2,4,6,9,12,16,20,24,46];

// console.log(binarySearch(ascArr,12));


const binarySearch2 =(arr,target)=>{
    let start =0;
    let end =arr.length -1 ;
    while(start<=end){
        let mid =start + Math.floor((end-start)/2)
        if(arr[mid]>target){
           end = mid-1;

        }else if(arr[mid]<target){
            start = mid+1;
        }else{
            return mid;
        }
    }
    return -1;
}

const result =binarySearch2(ascArr,16)
console.log(result);

