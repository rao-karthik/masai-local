function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let N = +input[0];

    let arr = input[1].trim().split(' ').map(Number);

    sort(arr, 0, N-1);
    console.log(arr.join(' '));
}

function sort(arr, l, r){
    if(l < r){
        let mid = l + parseInt((r-l)/2);

        sort (arr, l, mid);
        sort (arr, mid+1, r);
        merge (arr, l, mid, r);
    }
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

    while(i < n1 && j < n2){
        if(L[i] <= R[j]){
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
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