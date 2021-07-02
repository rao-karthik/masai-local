function changecase(input){
    var lower = 'abcdefghijklmnopqrstuvwxyz';
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var flag = true;
    var newString = "";
    for (var i = 0; i < input.length; i++){
        flag = true;
        if (input[i] == " "){
            newString = newString + " "
        }
        else {
            for (var j = 0; j < lower.length; j++){
                if (input[i] == lower[j]){
                    newString = newString + upper[j];
                    break;
                }
                else if (input[i] == upper[j]){
                    newString = newString + lower[j];
                    break;
                }
            }
        }
    }
        return newString;
}

var word = "MiXeD";
var oput = changecase(word);
console.log(word +  " -> " +oput)