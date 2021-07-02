function Add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

var A = Add(5)
console.log(A)

var B = A(5)
console.log(B)

var C = B(5)
console.log(C)

// or

console.log(Add(5)(5)(5))