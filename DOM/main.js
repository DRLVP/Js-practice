// GET ELEMENT FROM THE DOM
const main = document.querySelector('.main:first-child');
const ul = document.querySelector('ul');
function addLang(...lang) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(lang));
    ul.append(li);
}

addLang('javascript');
addLang('python');
addLang('ruby');
addLang('cpp');

// create and remove element
const py = document.querySelector('li:nth-child(2)');
py.innerHTML = 'swift';

const cpp = document.querySelector('li:last-child');
cpp.remove();

const js = document.querySelector('li:first-child');
js.outerHTML = `<header>typescript</header>`;
// console.log(js);
// console.log(main);

ul.parentElement.style.backgroundColor = 'skyblue';
ul.nextElementSibling.style.backgroundColor = 'red';

const span = document.createElement('span');
span.textContent = 'welcome to my world';
main.prepend(span);

ul.previousElementSibling.style.color = 'coral';
ul.previousElementSibling.style.fontSize = '3rem';