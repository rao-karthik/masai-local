var arr = [1, 2, 3, 99, 5, 66, 23];

// arr.forEach(function(el){
//     console.log(el)
// })

// arr.forEach((el) =>{
    // console.log(el);
// })

// var double = arr.map((el)=>{
//     return el * 2;
// })
// console.log(double) // create a new array

// var fil = arr.filter((el) =>{
//     if(el > 4){
//         return el;
//     }
// })
// console.log(fil) // doesn't change the original array rather create a new array;

// var total = arr.reduce((total, el)=>{
//     return (total + el)
// })
// console.log(total) // doesn't change the original array rather create a new array;

// var obj = {
//     name: "masai",
//     city: "ggn",
//     showName: function(){
//         console.log(obj.name) //here this refer to parent obj
//     },
//     showName2: () =>{
//         console.log(this.name) //here this refers to the window object
//     }
// }
// obj.showName2()

fetch("https://reqres.in/api/users/2")
.then((response)=>{
    return response.json()
})
.then((response)=>{
    console.log(response.data)
})