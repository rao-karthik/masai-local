let arr = [4, 3, 5, 2, 9, 4, 6];
let len = 7;

quickSort(arr, 0, len-1)

console.log(arr.join(' '));

function quickSort(arr, low, high){
    if(low < high){
        let p = partition(arr, low, high);
        quickSort(arr, low, p-1);
        quickSort(arr, p+1, high);
    }
}

function partition (arr, low, high){
    let pivot = arr[high];

    let i = low;

    for(let j = low; j < high; j++){
        if(arr[j] < pivot){
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }

    [arr[i], arr[high]] = [arr[high], arr[i]];
    return i;
}