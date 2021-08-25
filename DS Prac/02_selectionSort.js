let arr = [5, 2, 7, 6, 9];
let len = 5;

for(let i = 0; i < len; i++){
    let max = 0;
    for(let j = 1; j < len; j++){
        if(arr[j] > arr[max]){
            max = j;
        };
        [arr[j], arr[max]] = [arr[max], arr[j]];
    }
}

console.log(arr);