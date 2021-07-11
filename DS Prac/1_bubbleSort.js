let arr = [5, 2, 7, 6, 9];
let len = 5;

// for (let i = 0; i < len-1; i++){
//     for(let j = 0; j < len-i-1; j++){
//         if(arr[j] < arr[j+1]){
//             [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//         }
//     }
// }

for (let i = 0; i < len-1; i++){
    for(let j = 0; j < len-i-1; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}

console.log(arr);