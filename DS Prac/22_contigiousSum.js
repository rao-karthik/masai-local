function findContigiousSum (arr, N) {

    let maxSoFar = Number.NEGATIVE_INFINITY;
    let maxEndingHere = 0;

    for(let i = 0; i < N; i++){
        maxEndingHere += arr[i];

        if (maxSoFar < maxEndingHere){
            maxSoFar = maxEndingHere;
        }

        if(maxEndingHere < 0){
            maxEndingHere = 0;
        }
    }

    return maxSoFar;
}