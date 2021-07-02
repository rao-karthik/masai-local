var input = [2, 4, 5, 3, 6, 8];

var even_index = input.filter(function(el,i){
    return (el % 2 == 0 && i % 2 == 0);
})

console.log(even_index);