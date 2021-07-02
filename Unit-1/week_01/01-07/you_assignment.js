var a = 56;
var b = 32;
if (a > b){
    console.log("a is larger");
} else {
    console.log("b is larger");
}

var pass1 = "motor";
var pass2 = "motor";
if (pass1 == pass2){
    console.log("Valid Password");
}

var n = 33;
if ( n % 2 == 1 ){
    console.log("Odd Number");
} else {
    console.log("Even Number");
}

var year = 2005;
var age = 2021 - year;
if (age >=13 && age <= 19){
    console.log("Teenage");
}
if (age >=20 && age <=29){
    console.log("Tewnties");
}

var a = 21;
var b = 25;
var c = 19;
if (a > b && a > c){
    if (b > c){
        console.log("a b c");
    } else {
        console.log("a c b");
    }
} else if (b > c){
    if (a > c){
        console.log("b a c");
    } else {
        console,log("b c a");
    }
} else {
    if (a > b){
        console.log("c a b");
    } else {
        console.log("c b a")
    }
}

var a = 16;
var b = 16;
a == b ? console.log("Equal") : console.log("Different");

var month = "December"
switch (month) {
    case "January":
        console.log("Jan")
        break;
        case "January":
            console.log("Jan")
            break;
        case "February":
            console.log("Feb")
            break;
        case "March":
            console.log("Mar")
            break;
        case "April":
            console.log("Apr")
            break;
        case "May":
            console.log("May")
            break;
        case "June":
            console.log("Jun")
            break;
        case "July":
            console.log("Jul")
            break;
        case "August":
            console.log("Aug")
            break;
        case "September":
            console.log("Sep")
            break;
        case "October":
            console.log("Oct")
            break;
        case "November":
            console.log("Nov")
            break;
        case "December":
            console.log("Dec")
            break;
        default:
            console.log("Wrong Month")
            break;
}