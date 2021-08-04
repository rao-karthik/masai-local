let nums = [10, 9, 2, 5, 3, 7, 101, 18];

// longest increasing subSequence

function getSubSeq (nums) {
    if(nums.length <= 1){
        return nums.length;
    }

    let arr = new Array(nums.length);
    arr.fill(arr, 1);

    let max = -1;

    for(let i = 1; i < nums.length; i++){
        for(let j = 0; j < i; j++){
            if(nums[j] < nums[i]){
                // There is a possibility using some other combination for some other element before this there is a longer subsequence that can be formed.
                // We don't want to miss that we use max
                // +1 bcoz it will be a new sequence where i will add up and and arr[i] should have 
                arr[i] = Math.max(arr[i], arr[j]+1 );
            }
        }
        max = Math.max(max, arr[i]);
    }
    return max;
}

console.log(getSubSeq(nums));