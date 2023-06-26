// coersion => use force
// converting values from one type to another
function ready(){
    return 5 - '1'
}
console.log(ready());

// concante with + operator
function add(){
    return 5 + '1'
}
console.log(add());

// truthness

let i ;
i = 0;
if (!i){
    i = 10
}
console.log(i)

// its good to use type-of
let x ;
x = 0;
if (typeof x === 'undefined'){
    x = 10
}
console.log(x)


// Javascript function as first class
// why this happen

// A number can be stored in a variable also the function
// this is a function expression


// hoisting is the difference btn function statement and expression 
// Person()
// mark();
let mark = function () {
    console.log('Your name');
}



// function statement

function Person() {
    console.log("Mark")
}
Person()
mark();

// Anonymous fnc 
// are just fnc w/o identity
// Are usefull when func are used as value
// function () {
    
// }

// Named function expression
//  are anonymous  function with a name
let bro = function () {
   
   
    console.log('Your name');
}
bro()
