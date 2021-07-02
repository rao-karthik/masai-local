var arr = [];
for(var i = 25; i <= 50; i++){
    arr.push(i);
}
console.log(arr);

var mapFunc = arr.map(function(el){
    return el *2;
})
console.log(mapFunc);

var map = arr.map((el)=>{
    return el * 2;
})
console.log(map);

var filterFunc = arr.filter(function(el){
    return el > 35;
})
console.log(filterFunc);

var filter = arr.filter((el)=>{
    return el > 35;
})
console.log(filter);

var reduceSum = arr.reduce(function(total, el){
    return total + el;
})
console.log(reduceSum);

var reduce = arr.reduce((total, el)=>{
    return total + el;
})
console.log(reduce);