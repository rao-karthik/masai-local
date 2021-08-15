const sortedObj = Object.keys(obj).sort().reduce((objt, key) => {
    objt[key] = obj[key];
    return objt;
},
{}
)

console.log(sortedObj)

let keys = Object.keys(obj);
    keys = keys.sort();
    
for(i = 0; i < keys.length; i++){
    console.log(`${keys[i]} ${obj[keys[i]]}`)
}