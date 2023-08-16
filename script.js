console.log('this is quotes app');

let btn = document.getElementById('generateButton');
let quoteTxt = document.getElementById('quoteText')
const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '83b21c91c1msh6afd6bfb8560ebbp1870b8jsn08d218ef655c',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
    }
};
btn.addEventListener('click', async () => {


    let response = await fetch(url, options);
    let jsonResponse = await response.json();

    quoteTxt.innerText = jsonResponse.content;



})


let color=document.getElementById('bulb')
color.addEventListener('click',()=>{
    let card=document.getElementById('card');
    card.style.backgroundColor='#343a40';
    card.style.color='white';
})
color.addEventListener('dblclick',()=>{
    let card=document.getElementById('card');
    card.style.backgroundColor='white';
    card.style.color='black';
})
