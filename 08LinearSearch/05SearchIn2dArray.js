
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
function findTheNumber2D(arr2d,target){
    for(let i =0; i<arr2d.length;i++){
     for(let j =0; j<=arr2d.length;j++){
        if(arr2d[i][j]===target)
            return [i, j]; 
     }   
    }
    return -1; //not found
}

// console.log(findTheNumber2D(matrix,8));

const findTheNumberin2dArr = (matrix,target)=>{
    for(let row=0; row <matrix.length ; row++){
        for(let col =0; col<matrix.length ; col++){
            if(matrix[row][col]=== target){
            return [row,col]
            }
        }
    }
    return -1 // if not found the number
}

// console.log(findTheNumberin2dArr(matrix,7));



const searchIn2d = (arr,target)=>{
    for (let i =0; i<arr.length; i++){
        for (let j=0; j<arr.length ; j++){
            if(arr[i][j]===target){
                return [i,j]
            }
        }
    }
}

console.log(searchIn2d(matrix,9));
