// shift left

function rotateArr(A, N, K) {
    K = K % N;
    if (!A.length) return A;
    let index = -1;
    while (++index < K) {
        A.push(A.shift());
    }
    return A;
}

// rotate right

function rotateArr(a, n, k){
    k = k % n;
    let arr = []
 
    for (let i = 0; i < n; i++) {
        if (i < k) {
            arr.push(a[n + i - k]);
        }
        else {
            arr.push((a[i - k]));
        }
    }
    return arr;
}

// or 

function rotateArr(A, N, K) {
    K = K % N;
    if (!A.length) return A;
    let index = -1;
    while (++index < K) {
        A.(A.shift());
    }
    return A;
}