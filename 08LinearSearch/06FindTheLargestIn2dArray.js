const matrix = [
  [1, 3, 4, 2],
  [12, 21, 32],
  [82, 13, 43],
];

const findTheLargest = (matrix) => {
  let largest = matrix[0][0];
    for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > largest) {
        largest = matrix[i][j];
      }
    }
  }
  return largest;
};

console.log(findTheLargest(matrix));


const findTheMaxValue= (max)=>{
  let maxval = max[0][0];
  for (let i =0; i <max.length; i++){
    for (let j =0 ;j <max[i].length; j++){
      if(max[i][j]>maxval){
        maxval =max[i][j]
      }
    }
  }
  return maxval;
}

console.log(findTheMaxValue(matrix));
