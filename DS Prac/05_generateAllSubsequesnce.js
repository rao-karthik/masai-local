function generateSubSequence (string, res){
    if(string.length === 0){
        console.log(res);
        return;
    }
    generateSubSequence(string.substring(1), res);
    generateSubSequence(string.substring(1), res + string.charAt(0))
}

let str = 'abc';
let res = "";

generateSubSequence(str, res)