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


// hoisting is the diff btn function statement and expression 
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

// Difference btn HtmlCollection and NodeLists
const difference = document.querySelector(".parent1")

// console.log(difference[0]);
// console.log(difference.parentElement)
// console.log(difference.parentNode)
// console.log(difference.children)
// console.log(difference.childNodes)

const diff = document.querySelector(".parent2")
console.log(diff.parentElement)
console.log(diff.parentNode)
console.log(diff.children)
console.log(diff.childNodes)

// queryselectorAll
// const classEl = document.getElementsByClassName('text')
// console.log(classEl)
// const selectAll = document.querySelectorAll(".text")

// console.log(selectAll);
// document.querySelector('p:nth-of-type(1)').className = 'text';


// CloneNode.j

// const init = function(){
//     let t1, t2, div1, temp, div2, cln
//     t1 = document.getElementById('target1');
//     t2 = document.getElementById('target2');
    
//     div1 = document.querySelector('.advertisement');
    //for(let i=0; i<5; i++){
        // t1.appendChild(div1.cloneNode(true) );
    //}
    
//     temp = document.querySelector('[type="text/html"]');

//     cln = temp.cloneNode(true);
//     div2 = cln.textContent;
//     t2.innerHTML = div2;
// }

// document.addEventListener('DOMContentLoaded', init)



// html template js
// const supportsTemplate = function() {
    //create a template element and make sure it has a 'content' property
//     return 'content' in document.createElement('template');
// }

// document.addEventListener('DOMContentLoaded', ()=> {

    // if (supportsTemplate()) {
        //We can use the template element in our HTML
        // console.log('Templates are supported.');
        // let temp = document.getElementById('myTemplate');
        // let content = temp.content;
        // document.body.appendChild(content);
        // document.body.appendChild(content.cloneNode(true));
        // document.body.appendChild(content.cloneNode(true));
        // document.body.appendChild(content.cloneNode(true));
        // document.body.appendChild(content.cloneNode(true));
        // document.body.appendChild(content.cloneNode(true));
        // document.body.appendChild(content.cloneNode(true));
        
    // } else {
        //Use another method, like manually building the elements.
//         console.log('The else is running');
//         let df = document.createDocumentFragment();
//         let div = document.createElement('div');
//         let h2 = document.createElement('h2');
//         let p = document.createElement('p');
//         h2.textContent = 'A Sub Heading';
//         p.textContent = 'Some dynamically created text.';
//         console.log(p)
//         div.className = 'box';
//         h2.className = 'temp';
//         df.appendChild(div);
//         div.appendChild(h2);
//         div.appendChild(p);
//         document.body.appendChild(df);
//     }
// })


// Difference between children and childNode
document.addEventListener('DOMContentLoaded', () => {
    // let parentEl = document.body.parentElement 
    // let pNode = document.body.parentNode
    let parentEl = document.documentElement.parentElement
    let pNode = document.documentElement.parentNode.nodeType
    let children = document.documentElement.children; //Element Nodes
    let nodes = document.documentElement.childNodes; //ALL nodes - element, text, comments..
    
    // console.log('parentNode', pNode);
    // console.log('parentElement', parentEl);
    // console.log('children', children.length);
    console.log('childnodes', nodes.length);
    

    // looping through children
    // [].forEach.call(children, (child) => {
    //   console.log(child);
    // });


    //   looping through childNode
    nodes.forEach((node) => {
      console.log(node);
    });
  
  });