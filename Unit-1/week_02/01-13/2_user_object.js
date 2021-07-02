var input = " Kartik 26 Male";
input = input.split(" ");
// console.log(input)

var obj = {
    name : input[1],
    age : Number(input[2]),
    gender : input [3]
}

console.log("Name - " + obj.name);
console.log("Age - " + obj.age);
console.log("Gender - " + obj.gender);