function test(description, callback ){
    console.log(description);
    callback();
};

// simple fake implementation of the testing library

function expect( input ){
    function toBe( output ){
        if( input === output ){
            console.log('correct');
            return true;
        }
        else {
            throw new Error(
                `\nexpected: ${input}\n`+
                `received: ${output}`
            )
        }
    }

    function notToBe( output ){
        if( input !== output ){
            console.log('correct');
            return true;
        }
        else {
            throw new Error(
                `\nexpected: ${input}\n`+
                `received: ${output}`
            )
        }
    }

    function __toEqual( inp, out ){
        // primitive data types it behaves toBe

        let flag= true;

        const keysInp = Object.keys(inp);
        const keysOut = Object.keys(out);

        if( keysInp.length !== keysOut.length ){
            flag = false;
            return flag;
        }
        
        for( let key in inp ){
            if( typeof inp[key] === "object" && typeof out[key] === "object" && (inp[key] !== null && out[key] !== null )){
                if ( Array.isArray(inp[key]) !== Array.isArray(out[key]) ){
                    flag = false;
                    return flag;
                }
                flag = __toEqual( inp[key], out[key] )
                if( !flag ){
                    return flag
                }
            }
            else if( inp[key] !== out[key] ) {
                flag = false;
                return flag;
            }
        }
        return flag;
    }
    function toEqual( output ){
        const response = __toEqual(input, output )
        if ( response ){
            console.log('test case passed');
        }
        else {
            console.log('test case failed');
        }
    }

    return { toBe, notToBe, toEqual }
}


test("Sum of 1+2 = 3", ()=>{
    expect(1 + 2).toBe(3);
});

test("{} toBe {} output => false", ()=>{
    expect({}).notToBe({})
})

test("{} should be equal to {}", ()=>{
    var a = {}
    var b = {}
    expect(a).toEqual(b)
    // true
})
test("{ a: 1, b: 2 } should be equal to { a: 1, b: 2}", ()=>{
    var a = { a: null, b:2 }
    var b = { a: null, b:2 }
    expect(a).toEqual(b)
    // true
})
test("{ a: 1 } should not be equal to { a: 1, b: 2}", ()=>{
    var a = { a: 1 }
    var b = { a: 1, b:2 }
    expect(a).toEqual(b)
    // false
})
test("{ a: 1, b:2, c: { a:1  } } should not be equal to { a: 1, b: 2, c: { a: 1 }}", ()=>{
    var a = { a: 1, b:2, c: { a: 1 } }
    var b = { a: 1, c: { a: 1 }, b:2 }
    expect(a).toEqual(b)
    // true
})
test("{ a: 1, b:2, c: c: [1,2,3] } should not be equal to { a: 1, b:2, c: { 0: 1, 1: 2, 2: 3 } }", ()=>{
    var a = { a: 1, b:2, c: [1,2,3] }
    var b = { a: 1, b:2, c: { 0: 1, 1: 2, 2: 3 } }
    expect(a).toEqual(b)
    // false
})