// Create a company object with some keys print all the keys along with their values

var company = {
    name : "LG",
    products : ["mobile", "microwave oven", "washing machines"],
    category : "electronics"
}
for (key in company){
    console.log(key + " -> " + company[key])
}

// Given an array of items find the elements that occur more than once

var items = ['a', 'f', 'e', 'a', 'q', 'f'];
var items_obj = {}

for (var i = 0; i < items.length; i++){
    var key = items[i];
    if (items_obj[key] == undefined){
        items_obj[key] = 1;
    }
    else {
        var prev_count = items_obj[key];
        items_obj[key] = prev_count + 1;
    }
    // console.log(items_obj)
}
for(key in items_obj){
    if (items_obj[key] > 1){
    console.log(key);
    }
}

// Create a user object with array of address objects print all the city names along with the pincodes of the addresses

var user = {
    name : "Kartik",
    addresses : [
        {city : "DEL", pin : "110008", state : "DL"},
        {city : "GUR", pin : "122503", state : "HR"},
        {city : "HYD", pin : "400001", state : "TG"},
        {city : "CHE", pin : "760061", state : "TN"}
    ]
}
for (var i = 0; i < user.addresses.length; i++){
    var adr = user.addresses[i];
    console.log(adr.city + " -> " + adr.pin)
}

// Create a square object with two methods to calculate the perimenter and area of the square

var square = {
    side : 15,
    perimeter : function(){
        return this.side * 4;
    },
    area : function (){
        return this.side ** 2;
    }
}
console.log(square.perimeter());
console.log(square.area());

// Create a user object with a marks key having an array of subject marks, with a method to add a new subject marks and also methods to calculate the lowest, highest and total marks

var student = {
    name : "Kartik",
    markslist : [
        {subject: "English", marks :42},
        {subject: "Science", marks :65},
        {subject: "Hindi", marks :55}
    ],
    addmarks : function(s, m){
        var item = {subject: s, marks: m};
        this.markslist.push(item);
    },
    leastmarks : function(){
        var least = {};
        for (var i = 0; i < this.markslist.length; i++){
            if (least.marks == undefined || this.markslist[i].marks < least.marks){
                least = this.markslist[i];
            }
        }
        return least;
    },
    highmarks : function(){
        var high = {};
        for (var j = 0; j < this.markslist.length; j++){
            if (high.marks == undefined || this.markslist[j].marks > high.marks){
                high = this.markslist[j]
            }
        }
        return high;
    },
    totalmarks : function(){
        var sum = 0;
        for (var k = 0; k < this.markslist.length; k++){
            sum = sum + this.markslist[k].marks;
        }
        return sum;
    }
}

student.addmarks("Math", 85);
console.log(student.markslist);
console.log(student.leastmarks());
console.log(student.highmarks());
console.log(student.totalmarks());