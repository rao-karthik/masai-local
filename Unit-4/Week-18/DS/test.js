let arr = [3];

let sum = arr[0];
let beg = 0;
let K = 6;
let N = 1;

let flag = false;
for (let i = 1; i <= N; i++){
    while(sum > K && beg < i-1){
        sum -= arr[beg];
        beg++;
    }
    if(sum === K){
        flag = true;
        break;
    }
    if(i < N){
        sum += arr[i];
    }
}
if(flag){
    console.log('Yes');
}
else {
    console.log('No');
}