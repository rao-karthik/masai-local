function rainWaterTn2S1 (height) {
    let trappedWater = 0;
    n = height.length;
    
    for(let i = 0; i < n; i++){
        let left = height[i];
        
        for(let j = 0; j < i; j++){
            left = Math.max(left, height[j]);
        }
        
        let right = height[i];
        
        for(let j = i+1; j < n; j++){
            right = Math.max(right, height[j]);
        }
        
        
        trappedWater += Math.min(left, right) - height[i];
    }
    
    return trappedWater;
};

/*
TC- O(n^2);
SC - O(1);
*/

function rainWaterTnSn (height){
    let n = height.length;

    let left = [];
    let right = [];

    let water = 0;
    left[0] = height[0];
    right[n-1] = height[n-1];

    for(let i = 1; i < n; i++){
        left[i] = Math.max(left[i-1], height[i]);
    }

    for(let i = n-2; i >= 0; i--){
        right[i] = Math.max(right[i+1], height[i]);
    }

    for(let i = 0; i < n; i++){
        water += Math.min(left[i], right[i]) - height[i];
    }

    return water;
}

/*
TC- O(n)
SC- O(n)
*/


function rainWaterTnS1 (height){
    let leftMax = 0;
    let rightMax = 0;
    let n = height.length;

    let water = 0;
    let low = 0;
    let high = n-1;

    while(low < high){
        if(height[low] < height[high]){
            if(height[low] > leftMax){
                leftMax = height[low];
            }
            else {
                water += leftMax - height[low];
            }
            low++;
        }
        else {
            if(height[high] > rightMax){
                rightMax = height[high];
            }
            else {
                water += rightMax - height[high];
            }
            high--;
        }
    }

    return water;
}

/*
TC- O(n);
SC- O(1);
*/

let arr = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(rainWaterTn2S1(arr))
console.log(rainWaterTnSn(arr))
console.log(rainWaterTnS1(arr))