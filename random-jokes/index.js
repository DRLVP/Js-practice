// get element from the DOM
const btn = document.querySelector('#getJokeBtn');
const box = document.querySelector('.joke-box');

btn.addEventListener('click', ()=>{
    const url = 'https://v2.jokeapi.dev/joke/Programming';
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            let response = JSON.parse(request.responseText);
            const h2 = document.createElement('h2');
            h2.textContent = `${response.joke}`;
            box.appendChild(h2);
    }
}
})