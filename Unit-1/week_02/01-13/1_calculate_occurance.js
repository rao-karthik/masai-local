var string = "education";
var obj ={ }
for (var i = 0; i < string.length; i++){
    if (string[i] !== " "){
        if(obj[string[i]] == undefined){
            obj[string[i]] = 1
        }
        else{
            obj[string[i]] = obj[string[i]] + 1;
        }
    }
}
// console.log(obj);
for(var key in obj){
    console.log(key + " " + obj[key])
}