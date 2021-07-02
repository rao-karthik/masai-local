var obj = {
    data : [1, 2, 6, 7, 3, 4, 9, 0],
    lessthanitems : function(value){
        var newArr = []
        for (var i = 0; i < this.data.length; i++){
            if (value > this.data[i]){
                newArr.push(this.data[i])
            }
        }
        return newArr;
    },
    greaterthanitems : function(value){
        var newArr = []
        for (var i = 0; i < this.data.length; i++){
            if (value < this.data[i]){
                newArr.push(this.data[i])
            }
        }
        return newArr;
    }
}
console.log(obj.lessthanitems(4));
console.log(obj.greaterthanitems(6));