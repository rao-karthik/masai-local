function greet(msg){
    return function(name){
        console.log(msg+ ' '+name)
    }
}

// console.log(greet('Hi')); //invoking function through paranthesis i.e()
// it will return a function and to invoke that fi=unction we have to use double paranthesis

// console.log(greet('hi')('Albert')); 

// greet('hi')('Albert') // for invoking return function have to use double paranthesis i.e functionName(parameter)(parameter)

// whenever a function runs, we have functional execution context

// for every new function, we have a new functional execution context

var myfunc = greet("hello") //functional execution context created for greet function;
//greet will go to stack
// when it goes to stack it will get executed and while executin g it has excess to return message only.

//What happens when function execution is dine in the stack?
//Stack will pop otu greet;

myfunc('Messi');
// mugunc will go to stack
//my func will have access to 'name' only // so expected output will be msg undefined
//but function will run and will return "Hello Messi". So, how did it has access to "msg" var when the stack has popped out greet?

//JS stores/locks in the variables of outer function even though they are executed and popped out of the stack.

function hello(val){
    return function(num){
        return function(){
            return val * num * 2
        }
    }
}
console.log(hello(2))
console.log(hello(2)(4))
console.log(hello(2)(4)())
