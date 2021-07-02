import data from "./Modules/1.js";

var arr = [1, 2, 3, 4, 5];

console.log(data);

let sum = data.sum(arr);
console.log(sum);

sum = JSON.stringify(sum);
localStorage.setItem("sum", sum)

let greatest = data.greatest(arr);
console.log(greatest);

greatest = JSON.stringify(greatest);
localStorage.setItem("greatest", greatest)

let lowest = data.lowest(arr);
console.log(lowest);

lowest = JSON.stringify(lowest);
localStorage.setItem("lowest", lowest)