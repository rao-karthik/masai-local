function generateSubSequence (string, res){
    if(string.length === res){
        console.log(res);
        return;
    }
    generateSubSequence(string.substring(1), res);
    generateSubSequence(string.substring(1), res + charAt(0))
}

let str = 'abc';
let res = "";

generateSubSequence(str, res)