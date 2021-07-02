function person(nam){
    this.canspeak=true;
    this.cabBreathe = true;
    this.name= nam;
}
function animal(nam){
    this.canspeak=false;
    this.cabBreathe = true;
    this.name= nam;
}
function plant(nam){
    this.canspeak=false;
    this.cabBreathe = true;
    this.name= nam;
}
var humans = [];
var animals = [];
var plants = [];

setTimeout (function(){
    var Kartik = new person("Kartik");
    // console.log(Kartik);
    
    var Rajan = new person("Rajan");
    // console.log(Rajan);

    humans.push(Kartik);
    humans.push(Rajan);
    
    var Lion = new animal("Lion");
    // console.log(Lion);
    
    var Deer = new animal("Deer");
    // console.log(Deer);

    animals.push(Lion);
    animals.push(Deer);
    
    var lily = new plant("Lily");
    // console.log(lily);
    
    var flower = new plant("Flower")
    // console.log(flower);

    plants.push(lily);
    plants.push(flower);

    console.log(humans);
    console.log(animals);
    console.log(plants);
}, 3000)