// function* subsets(array, offset = 0) {

//     while (offset < array.length) {

//       let first = array[offset++];

//       for (let subset of subsets(array, offset)) {

//         subset.push(first);

//         yield subset;
//       }
//     }
//     yield [];
// }

function findSubsets (start, subset, arr) {
    console.log(subset.join(' '))

    for(let i = start; i < arr.length; i++){
        subset.push(arr[i]);
        findSubsets(i+1, subset, arr); 
        subset.pop();
    }
}

// TC: O(N*2^N)
// O(2^N) -  To generate all subsets 
// O(N) - For copying them into output list.

// Space Complexity - O(N * 2^N) to keep all the subsets of length N, since each of N elements could be present or absent.


/* that might contain duplicates */

function runProgram(input){
    let arr = input.trim().split(' ');

    let res = [];

    if(input === 0){
        return res;
    }

    arr.sort((a, b)=> a-b);

    findSubsets(res, 0, [], arr);
    console.log(res);
}

function findSubsets (res, start, subset, arr) {
    console.log(subset.join(' '))
    // res.push(subset);

    for(let i = start; i < arr.length; i++){
        // since the array is sorted. SO, two same number will be adjacent to eachother.
        if(i > start && arr[i-1] === arr[i]){
            continue;
        }
        subset.push(arr[i]);
        // backtracking
        findSubsets(res, i+1, subset, arr); 
        // removing the last element that was added
        subset.pop();
    }
}

runProgram('1 2 2')