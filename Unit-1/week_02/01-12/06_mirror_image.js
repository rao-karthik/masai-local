var alph = 'abcdefghijklmnopqrstuvwxyz';
var mirror = 'zyxwvutsrqponmlkjihgfedcba';

function tomirror(input){
    for (var i = 0; i < alph.length; i++){
        if (alph[i] == input){
            return mirror[i];
        }
    }
    return input;
}
// console.log(tomirror("c"));

var word = 'zebra';
var out = "";
for(var i = 0; i < word.length; i++){
    out = out + tomirror(word[i]);
}
console.log(word + " -> " + out)