let arr = [5, 2, 7, 6, 9];
let len = 5;

for(let i = 0; i < len; i++){
    let min = 0;
    for(let j = 1; j < len; j++){
        if(arr[j] > arr[min]){
            min = j;
        };
        [arr[j], arr[min]] = [arr[min], arr[j]];
    }
}

console.log(arr);