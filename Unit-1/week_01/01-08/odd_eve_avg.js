var arr = [34, -87, 23, 12, 98, -2, 0];
var odd = 0;
var odd_count = 0;

var even = 0;
var even_count = 0;
for (var i = 0; i< arr.length; i++){
    if( arr[i] % 2 == 0){
        even = even+ arr[i];
        even_count++;
    }
    else{
        odd = odd + arr[i];
        odd_count++;
    }
}

odd = odd/odd_count;
even = even/even_count;

console.log("Odd Average - " + odd);
console.log("Even Average - " + even);