
const infiniteArray = ()=>{
    let arr = [1,3,4,5,6,7,8,12,14,15,16,17];
    let target =12;
    console.log(findingAnswer(arr,target));
    
}
const findingAnswer = (arr, target)=>{
    //First Find the range ;
    
    let start =0;
    let end =1;

    while(target>arr[end]){
        let temp = end+1; // this is my new start 
        //Double The Box value
        //end = previous end  + sizeOfBox*2
        end = end + Math.floor((end -start +1)*2);
        start = temp;
    }

    return binarySearch(arr,target,start,end)
}
const binarySearch = (arr,target, start, end)=>{
    while(start<=end){
        let mid = start + Math.floor((end-start)/2);

        if(arr[mid]<target){
            start = mid+1;
        }else if(arr[mid]>target){
            end = mid-1;
        }else{
            return mid;
        }
    }
}

infiniteArray();