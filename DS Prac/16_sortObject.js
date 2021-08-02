const sorted = Object.keys(obj).sort().reduce((newObj, key)=>{
    newObj[key] = obj[key];
    return newObj
}, {})