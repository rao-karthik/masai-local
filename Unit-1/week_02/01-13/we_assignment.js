// Create a product object with some keys print all the keys along with their values

var product = {
    name : "One plus 8",
    price : 20000,
    color : "red",
    category : "Mobile",
    screen : "6.3 inch"
}
for(key in product){
    console.log(key + "----" + product[key])
}

// Given an array find the items that occur only once

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
    if (items_obj[key] == 1){
    console.log(key);
    }
}

// Create a user object with array of address objects print all the pincodes of the addresses

var user = {
    name : "Nrupul",
    addresses : [
        {city : "BLR", pin : "560061", state : "KA"},
        {city : "PUN", pin : "600613", state : "MH"},
        {city : "HYD", pin : "400001", state : "TG"},
        {city : "CHE", pin : "760061", state : "TN"}
    ]
}
for (var i = 0; i < user.addresses.length; i++){
    var adr = user.addresses[i];
    console.log(adr.pin)
}

// Create a square object with a method to calculate the perimenter of the square

var square = {
    side : 3,
    perimeter : function(){
        return this.side * 4;
    }
}
console.log(square.perimeter());

// Create a user object with a marks key having an array of subject marks, with a method to add a new subject marks and also a method to calculate the lowest marks

var student = {
    name : "Nrupul",
    markslist : [
        {sub: "Eng", mks :10},
        {sub: "Sci", mks :5},
    ],
    addmarks : function(s, m){
        var item = {sub: s, mks: m};
        this.markslist.push(item);
    },
    leastmarks : function(){
        var least = {};
        for (var i = 0; i < this.markslist.length; i++){
            if (least.mks == undefined || this.markslist[i].mks < least.mks){
                least = this.markslist[i];
            }
        }
        return least;
    }
}

student.addmarks("Math", 15);
console.log(student.markslist);
console.log(student.leastmarks());