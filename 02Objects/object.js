
let x = {name :'Ahaan', age:21};
let y = {name:'Khan', age:21};

console.log(x["name"]);
console.log(y.name);

// objects can be updated :- 
//Objects are mutable;
x.name = "Shahnawaz"

console.log(x.name);
// Shahnawaz


x.marks = "100";
x.company= "FirstBench"


delete x.name;

console.log(x);
