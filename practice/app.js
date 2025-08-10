// let p = document.createElement('p');
// p.innerText='Hey I"m red!';
// p.style.color='red';





// let h3=document.createElement('h3');
// h3.innerText="I'm a blue h3";
// h3.classList.add('blue');


// let div=document.createElement('div');
// div.classList.add('card');

// let h1=document.createElement('h1');
// h1.classList.add('text');
// h1.innerText="I'm in a div";

// let p1=document.createElement('p');
// p1.classList.add('text');
// p1.innerText="ME TOO";


// let body=document.querySelector('body');

// div.append(h1);
// div.append(p1);

// body.append(p);
// body.append(h3);
// body.append(div);


// // Q1: Create a new input and button element on the page using JavaScript only. Set the text of button to “Click me”
// let input=document.createElement('input');
// input.setAttribute('type', 'text');

// let btn=document.createElement('button');
// btn.innerText='Click me';

// // Q2: Add following attributes to the element:
// //     -Change placeholder value of input to “username”
// //     -Change the id of button to “btn"
// input.setAttribute('placeholder', 'username');
// btn.setAttribute('id', 'btn');

// let body=document.querySelector('body');
// body.prepend(btn);
// body.prepend(input);

// document.querySelector('#btn').style.backgroundColor='blue';
// document.querySelector('#btn').style.color='white';

// // Q4: Create an h1 element on the page and set its text to “DOM Practice” underlined. Change its color to purple.
// h1=document.createElement('h1');
// h1.innerText='DOM pratice';
// body.prepend(h1);

// // Q5: Create a p tag on the page and set its text to “Apna College Delta Practice”, where Delta is bold.
// let p=document.createElement('p');
// p.innerHTML='Apna College <b>Delta</b> Practice';
// body.append(p);




//Event listeners activity

let h1=document.createElement('h1');
let btn=document.createElement('button');
let box=document.createElement('div');
let p=document.createElement('p');
let body=document.querySelector('body');

h1.innerText='Color generator';
h1.setAttribute('id', 'rgb-value');
btn.innerText='Generate color';
box.classList.add('boxDiv');
p.innerText='This is your color';

box.append(p)
body.append(h1);
body.append(btn);
body.append(box);

btn.addEventListener('click', ()=>{
    let col=rgb();
    h1.innerText=col;
    box.style.backgroundColor=col;
});

function rgb(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    return (`rgb(${r}, ${g}, ${b})`);
}