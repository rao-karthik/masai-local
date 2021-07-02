var obj = {
    item : "Firefox",
    vowelscount : function(){
        var vowel = 0;
        for (var i = 0; i < this.item.length; i++){
            for (var j = 0; j < this.item[i].length; j++){
                if (this.item[i][j] == "a" || this.item[i][j] == "e" || this.item[i][j] == "i" || this.item[i][j] == "o" || this.item[i][j] == "u" || this.item[i][j] == "A" || this.item[i][j] == "E" || this.item[i][j] == "I" || this.item[i][j] == "O" || this.item[i][j] == "U"){
                    vowel++;
                }
            }
        }
        return vowel;
    },
    reverse : function(){
        var reversestring = "";
        for (var i = this.item.length-1; i >= 0 ; i--){
            reversestring = reversestring + this.item[i];
        }
        return reversestring;
    },
    changecase : function(){
        var lower = 'abcdefghijklmnopqrstuvwxyz';
        var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var flag = true;
        var newString = "";
        for (var i = 0; i < this.item.length; i++){
            flag = true;
            if (this.item[i] == " "){
                newString = newString + " "
            }
            else {
                for (var j = 0; j < lower.length; j++){
                    if (this.item[i] == lower[j]){
                        newString = newString + upper[j];
                        break;
                    }
                    else if (this.item[i] == upper[j]){
                        newString = newString + lower[j];
                        break;
                    }
                }
            }
            
        }
        return newString;
    }
}
console.log(obj.vowelscount());
console.log(obj.reverse());
console.log(obj.changecase())