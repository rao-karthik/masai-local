const sum = ( a=0, b=0 )=>{
    if(typeof a  === "string" || typeof b === "string"){
        throw new Error("imputs should be numbers")
    };
    return a + b;
}

module.exports = sum;