// module- a file containing js code

let arr = [1, 2, 3, 4];

function showMe(){
    var sum = 0'
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

export {arr, showMe}; //named export