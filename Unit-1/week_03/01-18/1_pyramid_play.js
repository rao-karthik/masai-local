function pyramid(input){
    for (var i = 0; i < input; i++){
        var arr = "";
        for(var j = 1; j < input-i; j++){
            arr = arr + ".";
        }
        for (var k = 0; k < (i+1); k++){
            arr = arr + ".0";
        }
        for(var l = 1; l < input-i; l++){
            arr = arr + ".";
        }
        console.log(arr + ".")
    }
}
pyramid(4)

function inverse_pyramid(input){
    for (var i = input; i > 0; i--){
        var arr = "";
        for(var j = input-i; j >= 1; j--){
            arr = arr + ".";
        }
        for (var k = (i); k > 0; k--){
            arr = arr + ".0";
        }
        for(var l = input-i; l >= 1; l--){
            arr = arr + ".";
        }
        console.log(arr + ".")
    }
}
inverse_pyramid(4)

function rhombus(input){
    for (var i = 0; i < input; i++){
        var arr = "";
        for(var j = 1; j < input-i; j++){
            arr = arr + ".";
        }
        for (var k = 0; k < (i+1); k++){
            arr = arr + ".0";
        }
        for(var l = 1; l < input-i; l++){
            arr = arr + ".";
        }
        console.log(arr + ".")
    }
    for (var i = input; i > 0; i--){
        var arr = "";
        for(var j = input-i; j >= 1; j--){
            arr = arr + ".";
        }
        for (var k = (i); k > 0; k--){
            arr = arr + ".0";
        }
        for(var l = input-i; l >= 1; l--){
            arr = arr + ".";
        }
        console.log(arr + ".")
    }
}
rhombus(4)
