 
// # Arrays:-

// que What are arrays:-

//  Lets say we have to store 100 numbers analysing stock price 1 year and 365 days data,

// So we can't store 365 days data in 365 days variable it is not a good approach  thats why we need to array 

// Array can be described as data strtucture that can be store collection of data , in a linear continguos orientation in the memory.


// # Data Struture  :-
// These are the diffrent structure that can prepare to store tha data in diffrent ways depending in our use case.

//How do we create array in js :- 

let x = [];  // this is a empty array of 0 length
let y = [1,2,3,4] // this a array lenght of 4

// JS arrays support hetenegenous value  

// It means in JS we can store any datatype in arrays but another languages does not allowed it 

let a = ["apple", 2,false, NaN, null]; 
let arr=["abc", "cde", "efg"]

console.log(x);
console.log(y);
console.log(a);
console.log(arr);

// individual element's of the array has got unique indexes ,starting from 0;

// In string like 
let str = "Ahaan"
console.log(str[2]); //you can extract the strings but you can not update the strings,

// But in the array you can extract the value and also update the value 

// Updation is possible inside of the array but no in string 

