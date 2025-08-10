let h1=document.createElement('h1');
let inputTask=document.createElement('input');
let btn=document.createElement('button');
let body=document.querySelector('body');

h1.innerText='To Do List'
inputTask.placeholder='Enter your task';
btn.innerText='Add';
btn.classList.add('add');

body.prepend(btn);
body.prepend(inputTask);
body.prepend(h1);

btn.addEventListener('click', function(){
    let cb=document.createElement('input');
    let p=document.createElement('p');
    let del=document.createElement('button');
    let task=document.createElement('div');

    cb.setAttribute('id', 'cb');
    cb.setAttribute('type', 'checkbox');
    task.setAttribute('class','tasks');
    del.setAttribute('id','del-btn');


    p.innerText=inputTask.value;
    inputTask.value = '';
    del.innerText="Delete";
    del.style.width = '70px';
    del.style.height = '30px';

    // Set fade styles
    task.style.transition = 'opacity 2s';
    task.style.opacity = '1';

    task.append(cb);
    task.append(p);
    task.append(del);
    body.append(task);

    cb.addEventListener('change', function(){
        p.innerHTML=`<del>${p.innerText}</del>`;
    });

    del.addEventListener('click', function(){
        task.style.opacity = '0'; 
        setTimeout(() => {
            task.remove();
        }, 2000);
    });
});