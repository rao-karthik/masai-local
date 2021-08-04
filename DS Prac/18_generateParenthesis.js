let n =  3;

let res = [];

function generateParenthesis (res, s, open, close, n){
    if(s.length === n*2){
        res.push(s);
        return;
    }
    if(open < n){
        generateParenthesis(res, s + '(', open+1, close, n);
    }
    if (close  < open){
        generateParenthesis(res, s + ')', open, close+1, n);
    }
}

generateParenthesis(res, "", 0, 0, 3);
console.log(res)