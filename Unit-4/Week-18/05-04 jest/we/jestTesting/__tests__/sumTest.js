const sum = require("../sum.js");

describe("test for the sum function", function(){
    test("sum of 1, 2 sjould be 3",()=>{
        expect( sum(1, 2) ).toBe(3)
    })

    test("sum of 1, 'a' should be an error inputs should be numbers", ()=>{
        expect(()=> sum(1, 'a')).toThrowError(new Error("inputs should be numbers"));
    })

    test(" sum of undefined, undefined should be 0", ()=>{
        expect(sum()).toBe(0)
    })
})