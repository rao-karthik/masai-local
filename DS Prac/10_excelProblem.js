let str = 'ZY'

function findColNum (str, len, n, sum){
    if(n === len){
        return sum;
    }
    let A = 'A';
    sum = sum * 26 + str.charCodeAt(n) - A.charCodeAt(0) + 1;
    return  findColNum(str, len , n+1, sum)
}

let colNum = findColNum(str, str.length, 0, 0);
console.log(colNum)

function identifyStr(colNum) {
    // To store result (Excel column name)
        let colName = [];
  
        while (colNum > 0) {
            // Find remainder
            let rem = colNum % 26;
  
            // If remainder is 0, then a
            // 'Z' must be there in output
            if (rem == 0) {
                colName.push("Z");
                colNum = Math.floor(colNum / 26) - 1;
            }
            else // If remainder is non-zero
            {
                colName.push(String.fromCharCode((rem - 1) + 'A'.charCodeAt(0)));
                colNum = Math.floor(colNum / 26);
            }
        }
  
        // Reverse the string and print result
        console.log(colName.reverse().join(""));
}

identifyStr(701)