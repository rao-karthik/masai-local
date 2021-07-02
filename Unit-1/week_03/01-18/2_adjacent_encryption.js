var case_1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var case_2 = "bcdefghijklmnopqrstuvwxyzaBCDEFGHIJKLMNOPQRSTUVWXYZA";

function next(input){
    for (var i = 0; i < case_1.length; i++){
        if (case_1[i] == input){
            return case_2[i];
        }
    }
    return input;
}

var word = 'zyfqwxaeiou';
var out = "";
for(var j = 0; j < word.length; j++){
    out = out + next(word[j]);
}
console.log(out)