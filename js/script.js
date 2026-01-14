console.log("hello");

//var const let

var name ="kavidu";
var val =15;

let val1 = 10;
let val2 = 20;

console.log("total is "+(val1 + val2));

var age = 20;

if(age>10){
    console.log("you select");
}else{
    console.log("you not selected")
}


let grade="B";

switch(grade){
    case "A" :
    console.log("you pass ");
    break;
    case "B" :
    console.log("you pass with second upper");
    break;
    case "C" :
    console.log("pass with genaral")
    break;
    default:
    console.log("you fail")
}

let number = [2,5,8,9];
console.log(number);

for(var i=0; i<5; i++){
    console.log("*");
}

let j= 1;

while (j <= 5) {
  console.log(j);
  j++;
}


var studentName ="kavidu";

studentName =24;
 var studentName = "ima";

 {
    var studentAge = 24;
    console.log(studentAge);
 }
console.log(studentAge);

let studentCity ="colombo";

studentCity ="kandy";

{
    let studentGrade ="A";
    console.log(studentGrade);
}
// console.log(studentGrade);


//normal function
// function saveEmployee(name,age){

// }

const saveEmp = function(name, age){

}

saveEmp();


//arrow function
const saveEmployeeArrow = (name, age) => {
    //task
}

saveEmployeeArrow("kavidu", 25);



const saveEmployee =() =>{
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const age = document.getElementById('age').value;
    const salary = document.getElementById('salary').value;

    console.log(name+" "+address+" "+age+" "+salary);
}