// function savetoDB(data){
//     return new Promise((resolve, reject)=>{
//         let internetSpeed=Math.floor(Math.random()*4)+1;
//         if(internetSpeed>=4){
//             resolve(data);
//         } else{
//             reject("Failed to save data");
//         }
//     });
// }

// savetoDB("Oi kaizoku!")
// .then((e)=>{
// console.log("Promise resolved");
// console.log('Here is the data: ',e);
// })
// .catch((e)=>{
// console.log("Promise rejected");
// console.log(e);
// });

// savetoDB("Oi kaizoku!")
// .then((e)=>{
//     console.log("data-1 saved.");
//     console.log('Here is the data: ',e);
//     return savetoDB("Where is your tressure?");
// })
// .then((d2)=>{
//         console.log("data-2 saved.");
//         console.log('Here is the data: ',d2);
// })
// .catch((err)=>{
//     console.log("Promise rejected: ", err);
// });

// let h1=document.querySelector('h1');

// function colorChange(color, delay){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             h1.style.color=color;
//             console.log(`Color changed to ${color}`);
//             resolve(`Color: ${color}`);
//         }, delay);
        
//     });
// }
// async function show(){
//     await colorChange('red', 1000);
//     await colorChange('orange', 1000);
//     await colorChange('yellow', 1000);
//     await colorChange('green', 1000);
//     await colorChange('blue', 1000);
// }
// show();

// colorChange('red', 1000)
// .then(()=>colorChange('orange', 1000))
// .then(()=>colorChange('yellow', 1000))
// .then(()=>colorChange('green', 1000))
// .catch(()=>{
//     console.log('Failed to change color');
// });

// async function greet() {
//     // throw 'this is an error';
//     return 'hello';
// }

// greet()
// .then((e)=>{
//     console.log("promise resolved");
//     console.log('result was', e)
// })
// .catch((e)=>{
//     console.log(e);
// })


// let jsonData1='{"fact":"The female cat reaches sexual maturity within 6 to 10 months; most veterinarians suggest spaying the female at 5 months, before her first heat period. The male cat usually reaches sexual maturity between 9 and 12 months.","length":220}';
// let data1=JSON.parse(jsonData1);

// let jsonData2={
//     "fact":"This is a joke",
//     "length": "14"
// };
// let data2=JSON.stringify(jsonData2);


// let url1='https://catfact.ninja/fact';
// let url2='https://api.potterdb.com/v1/movies/';

// fetch(url1)
// .then((res)=>{
//     console.log(res);
//     return res.json();
// })
// .then((data)=>{
//     console.log('Data-1: ',data);
//     console.log('Fact-1: ',data.fact);
//     console.log('Length-1: ',data.length);
//     return fetch(url1);
// })
// .then((res2)=>{
//     console.log(res2);
//     return res2.json();
// })
// .then((data2)=>{
//     console.log('Data-2: ',data2);
//     console.log('Fact-2: ',data2.fact);
//     console.log('Length-2: ',data2.length);
//     return fetch(url2);
// })
// .then((res3)=>{
//     console.log(res3);
//     return res3.json();
// })
// .then((data3)=>{
//     console.log('Potter DB Raw Data:', data3);
//     if(data3.data&&data3.data.length>0){
//         data3.data.forEach((movie, index) => {
//             console.log(`Index: ${index+1}, ID: '${movie.id}', Title: ${movie.attributes.title} `);
//         });
//     }else{
//         console.log('movie not found');
//     }
// })
// .catch((err)=>{
//     console.log(err);
// });

// let url1='https://catfact.ninja/fact';
// let url2='https://api.potterdb.com/v1/movies/   ';

// async function getRes() {
//     try{
//         let res1=await fetch(url1);
//         let data1= await res1.json();
//         console.log(res1);
//         console.log('Data-1: ',data1);
//         console.log('Fact-1: ',data1.fact);
//         console.log('Length-1: ',data1.length);

//         let res2=await fetch(url1);
//         let data2= await res2.json();
//         console.log('Data-2: ',data2);
//         console.log('Fact-2: ',data2.fact);
//         console.log('Length-2: ',data2.length);
        
//         let res3=await fetch(url2);
//         let data3= await res3.json();
//         console.log(res3);
//         console.log('Potter DB Raw Data:', data3);
//         if(data3.data&&data3.data.length>0){
//             data3.data.forEach((movie, index) => {
//                 console.log(`Index: ${index+1}, ID: '${movie.id}', Title: ${movie.attributes.title} `);
//             });
//         }else{
//             console.log('movie not found');
//         }
//     }
//     catch(e){
//         console.log('ERROR: ',e);
//     }
// }
// getRes();


// let url1='https://catfact.ninja/fact';
// let url2='https://api.potterdb.com/v1/movies/';

// async function getRes() {
//     try {
//         let res1 = await axios.get(url1);
//         console.log('Data-1:', res1);
//         console.log('Fact-1:', res1.data.fact);
//         console.log('Length-1:', res1.data.length);

//         let res2 = await axios.get(url1);
//         console.log('Data-2:', res2);
//         console.log('Fact-2:', res2.data.fact);
//         console.log('Length-2:', res2.data.length);

//         let res3 = await axios.get(url2);
//         console.log('Potter DB Raw Data:', res3);

//         let potterMovies = [];

//         if (res3.data && res3.data.data && res3.data.data.length > 0) {
//             res3.data.data.forEach((movie, index) => {
//                 console.log(`Index: ${index + 1}, ID: '${movie.id}', Title: ${movie.attributes.title}`);
//                 potterMovies.push({
//                     id: movie.id,
//                     title: movie.attributes.title
//                 });
//             });
//         } else {
//             console.log('Movie not found');
//         }

//         return {
//             catFact1: res1.data.fact,
//             length1: res1.data.length,
//             catFact2: res2.data.fact,
//             length2: res2.data.length,
//             potterMovies: potterMovies
//         };

//     } catch (e) {
//         console.log('ERROR:', e);
//         return null;
//     }
// }

// getRes();

// let h1=document.createElement('h1');
// let btn1=document.createElement('button');
// let fact=document.createElement('p');
// let btn2=document.createElement('button');
// let hp=document.createElement('p');
// let body=document.querySelector('body');

// btn1.setAttribute('id', 'btn1');
// btn2.setAttribute('id', 'btn2');
// fact.setAttribute('id', 'fact');
// hp.setAttribute('id', 'hp-db');

// h1.innerText='Cat fact and Harry potter movies';
// btn1.innerText='Get cat fact';
// btn2.innerText='Harry potter movies';

// // Your getRes() remains the same

// function fetRes() {
//     return getRes(); // returns a Promise
// }

// btn1.addEventListener('click', async () => {
//     let ft = await fetRes(); // await the Promise
//     if (ft) {
//         fact.innerText = ft.catFact1;  // access the returned object directly
//     } else {
//         fact.innerText = 'Failed to get cat fact.';
//     }
// });

// btn2.addEventListener('click', async () => {
//     let ft = await fetRes();
//     if (ft && ft.potterMovies.length > 0) {
//         hp.innerText = ft.potterMovies.map((movie, i) => `${i + 1}  ID:${movie.id}  ${movie.title}`).join('\n');
//     } else {
//         hp.innerText = 'Failed to get Harry Potter movies.';
//     }
// });


// body.append(h1);
// body.append(btn1);
// body.append(btn2);
// body.append(fact);
// body.append(hp);




let url='http://universities.hipolabs.com/search?name=';
let output=document.querySelector('#output');
let submit=document.querySelector('#result');
async function getColleges(country) {
    try{
        let res=await axios.get(url+country);
        return res.data;
    } catch(e){
        console.log('Error: ',e);
    }
}
submit.addEventListener('click', async ()=>{
    let country=document.querySelector('#in-text').value;
    let con=await getColleges(country);
    con.forEach((element) => {
        let p=document.createElement('p');
        p.innerText=element.name;
        console.log(element.name);
        output.append(p);
    });
});