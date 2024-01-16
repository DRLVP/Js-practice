// make github profile using github API
const card = document.querySelector('.card');
const btn = document.querySelector('.btn');

const url = 'https://api.github.com/users/DRLVP';

const img = document.createElement('img');
const h2 = document.createElement('h2');
const h4= document.createElement('h4');
const p = document.createElement('p');

btn.addEventListener('click', ()=>{
    const request = new XMLHttpRequest(); 
request.open('GET', url);
request.send();

// When the response is ready, call a function to handle it
request.onreadystatechange=()=>{
    console.log(request.readyState);
    if (request.readyState === 4) {
        const data = JSON.parse(request.responseText);

        img.src = `${data.avatar_url}`;
        card.appendChild(img);
        h2.textContent = `Name: ${data.name}`;
        h4.textContent = `Bio: ${data.bio}`;
        p.textContent = `followers:${data.followers}`
        card.appendChild(h2);
        card.appendChild(h4);
        card.appendChild(p);
    }
}
})


