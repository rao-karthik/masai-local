var a = 4;
var b = 4;
if (a < b) {
    console.log("a is smaller");
} else if (b < a) {
    console.log("b is samller");
} else {
    console.log("a equals b")
}

var p1 = "masai";
var p2 = "masai";
if (p1 != p2){
    console.log("wrong password");
}

var n1 = 3;
if (n1 % 2 == 2){
    console.log("odd number");
}

var year = 1999;
var age = 2021 - year;
if (age >= 20 && age <= 29){
    console.log("Twenties");
}

var a = 19;
var b = 20;
var c = 21;
if (c > b && c > a){
    if (b > a){
        console.log("c b a");
    } else {
        console.log("c a b")
    }
} else if (b > a){
    if (a > c) {
        console.log("b a c");
    } else {
        console.log("b c a")
    }
} else {
    if (b > c){
        console.log ("a b c");
    } else {
        console.log("a c b")
    }
}

var a = 12;
var b = 14;
a > b ? console.log("a is greater") : console.log("b is greater");

var day = "Tuesday"
switch (day) {
    case "Monday":
        console.log("Mon");
        break;
    case "Tuesday":
        console.log("Tue");
        break;
    case "Wednesday":
        console.log("Wed");
        break;
    case "Thursday":
        console.log("Thu");
        break;
    case "Friday":
        console.log("Fri");
        break;
    case "Saturday":
        console.log("Sat");
        break;
    case "Sunday":
        console.log("Sun");
        break;
    default:
        console.log("Wrong Day")
        break;
}