let str = '123'

function generatePermutation (str, left, right){
    if(left === right){
        console.log(str.split('').join(' '));
        return;
    }
    for (let i = left; i <= right; i++){
        str = swap(str, left ,i);
        generatePermutation(str, left+1, right);
    }
}

function swap(str, i, j){

    str = str.split('');

    let temp = str[i];
    str[i] = str[j];
    str[j] = temp;

    return str.join('');
}

generatePermutation(str, 0, str.length-1);