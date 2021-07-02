function details(name, age, city, address){
    this.name = name;
    this.city = city;
    this.age = age;
    this.address = address;
}

var person = new details("Kartik", "Gurugram", 26, "Pataudi")
console.log(person)

function printData(...person){
    // console.log(person)
    var data = person[0];
    var {name, city, age, address} = data
    console.log(name, city, age, address)
}
printData(person);

function printData({name, city, age, address}){
    console.log(name, city, age, address)
}
printData(person);