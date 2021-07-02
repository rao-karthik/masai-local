var n = 11;
var i = 2;
var r = 0;
while(i < n){
    if (n % i ==0 ){
        console.log("Not Prime Number");
        break;
    } else{
        r++
    }
    i++
}
if (r+2 == n){
    console.log("Prime Number")
}

var limit = 25;
var sum = 0;
var avg = 0;
var count = 0;
for (var a = 0; a <= limit; a++){
    if (a % 3 == 0){
        sum = sum + a;
    }
}
// console.log(sum)
for (var b = 1; b < limit; b++){
    if( b % 3 == 0){
        count++;
    }
}
// console.log(count);
avg = sum/count;
console.log(avg)

var scores = [90, 10, 12, 45, 8, 187];
var low = scores[0];
var high = scores[0];
for(var j = 1; j < scores.length; j++){
    if (scores[j] < low){
        low = scores[j]
    }
}
console.log(low);
for(var k = 1; k < scores.length; k++){
    if (scores[k] > low){
        high = scores[k]
    }
}
console.log(high);

var num = 100;
for (var l = 2; l <= num; l++){
    var signal = 0;
    for ( var m = 2; m < l; m++){
        if (l % m == 0)
        signal = 1;
    }
}
if (signal == 0){
    console.log(l + " prime");
} else{
    console.log(m + " not prime")
}

var names = ['nrupul', 'yogesh', 'prateek'];
var vowel = 0;
var con = 0;
for (var i = 0; i < names.length; i++){
    for (var j = 0; j < names[i].length; j++){
        if (names[i][j] == "a" || names[i][j] == "e" || names[i][j] == "i" || names[i][j] == "o" || names[i][j] == "u" ){
            vowel++;
        }
        else {
            con++;
        }
    }
}
console.log("Vowel - " +  vowel);
console.log("Consonant - " +  con);