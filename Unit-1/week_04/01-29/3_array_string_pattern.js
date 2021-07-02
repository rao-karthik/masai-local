var arr = ["apple", "windows", "ubuntu", "cola", "system"];

var a_char = function(el){
    if(el[0] == "a" || el[el.length-1] == "a"){
        return el;
    }
}

var char_a = arr.filter(a_char);
console.log(char_a)
