function sum(arr) {
    let total = arr.reduce(function(ac, el) {
        return ac + el
    })
    return total;
}

function greatest(arr) {
    return Math.max(...arr);
}

function lowest(arr) {
    return Math.min(...arr);
}

export default {sum, greatest, lowest};