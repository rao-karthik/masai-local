let num = [-1,0,1,2,-1,-4];

function threeSum (nums){
    let n = nums.length;
    let ans = [];

    if (n < 3){
        return ans;
    }
    
    nums.sort((a, b)=> a-b);

    for(let i = 0; i < n-2; i++){
        if(i !== 0 && nums[i] === nums[i-1]) continue;
        
        let target = 0 - nums[i];

        let subs = twoSum(nums, i+1, n-1, target);

        for(let j = 0;j < subs.length; j++){
            subs[j].unshift(nums[i]);
        }

        ans.push(...subs);
    }
    
    return ans;
}

function twoSum (arr, start, end, target){
    let left = start;
    let right = end;
    let ans = [];

    while(left < right){
        if(left != start && arr[left] == arr[left-1]){
            left++;
            continue; 
        }
        let sum = arr[left] + arr[right];
        
        if(sum == target){
            ans.push([arr[left], arr[right]]);
            left++;
            right--;
        }
        else if(sum > target){
            right--;
        }
        else {
            left++;
        }
    }
    return ans;
}

console.log(threeSum(num));