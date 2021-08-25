let str = 'abc';

// function generateSubSequence(str, res){
//       if(str.length == 0) {
//         console.log(res)
//         return
//     }
//     generateSubSequence(str.substring(1),res)//character is not present[0]
//     generateSubSequence(str.substring(1),res+str.charAt(0))//character is present[1]
// }

// generateSubSequence("abc", "");

// // lexicographically arranged

// function subSequence (ans, arr, low, high) {
//     if(low <= high+1 && ans !== ""){
//         console.log(ans);
//     }
//     for(let i = low; i <= high; i++){
//         subSequence(ans + arr[i], arr, i+1, high);
//     }
// }

// subSequence('', str, 0, str.length-1);

function findSubsets (start, subset, arr) {
    console.log(subset.join(' '))

    for(let i = start; i < arr.length; i++){
        subset.push(arr[i]);
        findSubsets(i+1, subset, arr); 
        // subset.pop();
    }
}

findSubsets(0, [], str);