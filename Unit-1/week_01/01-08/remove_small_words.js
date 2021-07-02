var arr = ["A", "Quick", "Brown", "Fox", "Jumps", "Over", "A", "Lazy", "Dog"];
var newArr = [];
for (var i = 0; i < arr.length; i++){
    if (arr[i].length > 4){
        newArr.push(arr[i])
    }
}
console.log(newArr)