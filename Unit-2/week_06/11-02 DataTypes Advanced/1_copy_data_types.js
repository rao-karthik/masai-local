var obj1 = {
    name: "Kartik",
    age: 26
}

function copyObject(input) {
    var input2 = {};
    for(key in input){
        input2[key] = input[key]
    }
    return input2;
}

var obj2 = copyObject(obj1);

obj2.name = "Yadav"

console.log(obj1, obj2)

var arr1 = [1, 5, 8, 9, 10];

function copyArr(input1) {
    var input2 = [];
    for(var i = 0; i < input1.length; i++){
        input2.push(input1[i]);
    }
    return input2;
}
var arr2 = copyArr(arr1);

arr2[0] = 25;
arr2[3] = 62;



console.log(arr1, arr2);