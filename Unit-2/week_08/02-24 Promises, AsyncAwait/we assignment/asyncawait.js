/*
async function A(){ //async is creating a new promise()
    return 1; // resolve
}

async function B(){
    throw new Error('Error occured') //reject
}
console.log(B())
*/
///////////////////////////////////////////////////////
/*
async function test(val){
    if (val == 1){
        return 1;
    }
    else {
        throw new Error('Error Occured')
    }
}
var myPromise = test(100);

myPromise.then(function(response){
    console.log(response);
})

myPromise.catch(function(err){
    console.log(err);
})
*/
////////////////////////////////////////////////////////

async function getData(){
    try {
        let data = fetch("http://jsonplaceholder.typicode.com/todos/2");

        var newData = await data;
        // console.log(newData)    
        
        var anData = await newData.json();
        console.log(anData)
    }
    catch (e){
        console.log(e,"This is error"); //return error and also console This is error
    }
}

getData()

/*
async function getData(){
    try { // try the code
        let data = 2*3;
        let newdata = await something;
        let andata = await newdata;
        console.log(andata)
    }
    catch(e){ // after trying if doesn't get any response it will catch the error
        console.log(e)
    }
}
getData()
*/