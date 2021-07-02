
var word = "hannah";
var newWord = "";
for ( var i = word.length-1; i >= 0; i--){
    newWord = newWord + word[i];
}
// console.log(newWord);
if( newWord === word ){
    console.log("palindrome")
}
else{
    console.log("not palindrome")
}