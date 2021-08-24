function runProgram(input){
    input = input.trim().split(/[\r\n]+/);

    let [n, k] = input[0].trim().split(' ').map(Number);

    let nums = input[1].trim().split(' ').map(Number);

    let count = countSubArrays(nums, k, n);
    console.log(count)
}

function countSubArrays(nums, k, n){
    if(k === 1){
        return countSubArraysForK1(nums, n);
    }

    let iS = -1, iB = -1, j = -1, ans = 0;
    let mapS = new Map();
    let mapB = new Map();
    
    while(true){
        let f1 = false, f2 = false, f3 = false;
        
        while(iB < nums.length - 1){
            f1 = true;
            
            iB++;
            
            let char = nums[iB];
            let count = mapB.get(char);
            
            if(count == null){
                mapB.set(char, 1);
            }
            else {
                mapB.set(char, count+1);
            }
            
            if(mapB.size > k){
                removeFromMap(mapB, char);
                iB--;
                break;
            }
        }
        
        while(iS < iB){
            f2 = true;
            
            iS++;
            
            let char = nums[iS];
            let count = mapS.get(char);
            
            if(count == null){
                mapS.set(char, 1);
            }
            else {
                mapS.set(char, count+1);
            }
            
            if(mapS.size > k-1){
                removeFromMap(mapB, char);
                iS--;
                break;
            }
        }
        
        while(j < iS){
            f3 = true;
            
            if(mapB.size === k && mapS.size === k-1){
                ans += iB-iS;
            }
            
            j++;
            
            let char = nums[j];
            removeFromMap(mapS, char);
            removeFromMap(mapB, char);
            
            if(mapS.size < k-1 || mapB.size < k){
                break;
            }
        }
        
        if(!f1 || !f2 || !f3){
            break;
        }
    }
    
    return ans;
}

function countSubArraysForK1(nums, n){
    let i = 0, j = 0, ans = 0;
    let map = new Map();

    while(true){
        let f1 = false;
        let f2 = false;

        while(i < n-1){
            f1 = true;

            let char = nums[i];
            let count = map.get(char);

            if(count == null){
                map.set(char, 1);
            }
            else {
                map.set(char, count+1);
            }

            if(map.size === 2){
                removeFromMap(map, char);
                i--;
                break;
            }
            i++;
        }

        while(j < i){
            f2 = true;
            
            if(map.size === 1){
                ans += i-j;
                console.log(ans)
            }

            let char = nums[j];
            removeFromMap(map, char);

            if(map.size === 0){
                break;
            }
            j++;
        }

        if(!f1 || !f2){
            break;
        }
    }
    return ans;
}

function removeFromMap(map, char){
    let count = map.get(char);

    if(count === 1){
        map.delete(char);
    }
    else {
        map.set(char, count-1);
    }
}

if (process.env.USER === "kartik") {
    runProgram(`5 2
    1 2 1 2 3`);
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