var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function tolower(input){
    for (var i = 0; i < upper.length; i++){
        if (upper[i] == input){
            return lower[i];
        }
    }
    return input;
}

var word = 'MiXeD';
var out = "";
for(var i = 0; i < word.length; i++){
    out = out + tolower(word[i]);
}
console.log(out)