var limit = 5;
for(var i = 1; i < limit; i++){
    console.log("Masai School")
}

var l = 10;
var sum = 0;
for (i=0; i<=l; i++){
    if (i%3 ==0){
        sum = sum + i;
    }
}
console.log(sum)

var num = 3;

for(var i = 1; i <= num; i++){
    for(var j = 1; j <= i; j++){
        console.log(i + "." + j)
    }
}

var scores = [90, 10, 12, 45, 8, 187];
var low = scores[0];
for(var i = 1; i < scores.length; i++){
    if (scores[i] < low){
        low = scores[i]
    }
}
console.log(low);

var names = [ 'nrupul', 'yogesh', 'prateek'];
var total_c = 0;
for(var i = 0; i< names.length; i++){
    for(var j = 0; j < names[i].length; j++){
    if (names[i][j] != 'a' && names[i][j] != 'e' 
    && names[i][j] != 'i' && names[i][j] != 'i' 
    && names[i][j] != 'o' && names[i][j] != 'u');
    total_c++
    }
}
console.log(total_c)