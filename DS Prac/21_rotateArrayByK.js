function rotateRightArr(A, K, N) {

    if(N < K){
        K = K % N;
    }

    reverseString(A, 0, N-K-1);
    reverseString(A, N-K, N-1);
    reverseString(A, 0, N-1);
}

function rotateLeftArr(A, K, N) {

    if(N < K){
        K = K % N;
    }

    reverseString(A, 0, K-1);
    reverseString(A, K, N-1);
    reverseString(A, 0, N-1);
}

function reverseString (arr, l, r) {
    while (l < r){
        [arr[l], arr[r]] = [arr[r], arr[l]];
        l++;
        r--;
    }
}