var rect = {
    l : 12,
    b : 8,
    arearect : function(){
        var area = this.l * this.b;
        return area;
    },
    perimeterrect : function(){
        var perimeter = (this.l + this.b) * 2;
        return perimeter;
    }
}
console.log(rect.arearect());
console.log(rect.perimeterrect());