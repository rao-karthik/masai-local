function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let N = +input[0];

    let arr = input[1].trim().split(' ').map(Number);

    let count = sort(arr, 0, N-1);
    console.log(count);
}

function sort(arr, l, r){
    let count = 0;
    if(l < r){
        let mid = l + parseInt((r-l)/2);

        count += sort (arr, l, mid);
        count += sort (arr, mid+1, r);
        count += merge (arr, l, mid, r);
    }
    return count;
}

function merge (arr, l, m, r){
    let n1 = m - l + 1;
    let n2 = r - m;

    let L = new Array(n1);
    let R = new Array(n2);

    for(let i = 0; i < n1; i++){
        L[i] = arr[l+i];
    }

    for(let j = 0; j < n2; j++){
        R[j] = arr[m + 1 + j];
    }

    let i = 0;
    let j = 0;

    let k = l;
    let inversions = 0;

    while(i < n1 && j < n2){
        if(L[i] <= R[j]){
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            inversions += (m + 1) - (l + i);
            j++;
        }
        k++;
    }

    while(i < n1){
        arr[k] = L[i];
        i++;
        k++;
    }

    while(j < n2){
        arr[k] = R[j];
        j++;
        k++;
    }
    return inversions;
}

if (process.env.USER === "kartik") {
    runProgram(`5
    3 5 0 9 8`);
}
else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function(input) {
        read += input;
    });
    process.stdin.on("end", function() {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function() {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}