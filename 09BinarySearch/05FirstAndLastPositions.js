
const firstAndLastPosition = (nums, target) => {
    let ans = [-1,-1]
    let start = search(nums,target,findStartIndex=true)
    let end = search(nums,target, findStartIndex=false);

    ans[0]=start
    ans[1]=end
    return ans;
  
    
}

const search = (nums,target,findStartIndex)=>{
    let ans = -1;
     let start = 0;
    let end = nums.length -1 ;
    while(start<=end){
        let mid = start + Math.floor((start-end)/2);
        if(nums[mid]< target){
            start = mid+1;
        }else if(nums[mid]>target){
            start = mid -1;
        }else{
          ans = mid
          if(findStartIndex){
            end = mid-1;

          }else{
            start = mid+1
          }
        }
    } 
    return ans;
}