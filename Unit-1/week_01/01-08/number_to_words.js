var num = 7;
num = num.toString();
var string = "";
for (var i = 0; i < num.length; i++){
    if (num[i] == "0"){
        string = string + " zero";
    } 
    if (num[i] == "1"){
        string = string + " One";
    } 
    if (num[i] == "2"){
        string = string + " Two";
    } 
    if (num[i] == "3"){
        string = string + " Three";
    } 
    if (num[i] == "4"){
        string = string + " Four";
    } 
    if (num[i] == "5"){
        string = string + " Five";
    } 
    if (num[i] == "6"){
        string = string + " Six";
    }
    if (num[i] == "7"){
        string = string + " Seven";
    } 
    if (num[i] == "8"){
        string = string + " Eight";
    } 
    if (num[i] == "9"){
        string = string + " Nine";
    }
}
console.log(string)