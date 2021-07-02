//difference between Call and Apply
​
var numarr = [3, 55, 66, 1, 0, 234];
​
console.log(Math.min.apply(this, numarr)); //1. object,
​
/*
//We want to control where 'this' belongs
//global object or defined object
​
var person = {
  name: "raj",
  age: 24,
};
​
var name = "Rahul"; //it is inside a global scope
​
function showName(x, y) {
  this.city = x;
  this.nick = y; //this=global object, this=person
}
​
var x = showName.bind(person, "Pune", "jonny"); //jS is allowing us to change the value of this using call
​
console.log(person);
​
x();//bind allows you to invoke later on in a program
​
console.log(x);
​
//call, apply, bind is doing, allowing us to change the value of this
​
​
//record their name, age
//Js constructor functions allows you to create multiple objects of same type
​
function Student(z, x) {
  this.name = z; //raj
  this.age = x; //24
} //function as a blueprint, z="raj", x=24
​
var student1 = new Student("Raj", 24);
var student2 = new Student("Rahul", 20);
var student3 = new Student("Raghav", 22);
​
function showmeThis() {
  console.log(this); //window- a global object
}
​
console.log(this); //global object
​
var person = {
  name: "masai",
​
  showme() {
    console.log(this); //person object
  },
};
​
showmeThis(); //which object 'this' points to
​
person.showme(); //
​
//value of 'this' keeps on changing
//value of 'this' is determined by looking at who owns the function code
​
//they are living in different parts
​
*/