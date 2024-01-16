const btn = document.querySelector('button');
const a = document.querySelector('a');
const card = document.querySelector('.card');
const img = document.getElementsByTagName('img');
const ci = document.querySelector('#couple');
/*
btn.addEventListener('click', (e)=>{
    // e.preventDefault();
    alert('hello world!');
    // console.log(e);
}, true); // default ot false tha k


a.addEventListener('click', (e)=>{
    e.preventDefault(); // default behaviour bondho koribo
})
*/

//EVENT PROPOGATION
/*
ci.addEventListener('click', (e)=>{
    console.log(e);

    //aikaita pohibo lagibo:-- events types, timestamp, defaultprevented, target, toElement, srcElement, currentTarget,
    // client position, altkey, enterkey, shiftkey, keycode
}, false);
*/

/*
card.addEventListener('click', ()=>{
    console.log('card clicked');
},true); // default behaviour true kori diyar loge loge prthome ee parent boxotclik hol tar pasot chaildo loi ahise mane main targetor parentok click hoi childoloi ahise

// true hole event capturing hoi aru false hole event bublling hoi
ci.addEventListener('click', (e)=>{
    e.stopImmediatePropagation(); // eyat event bubling hua nai karon iyar defult behaviour stop kori disu
    console.log('image clicked');
}, true);
*/

// card.addEventListener('click', (e)=>{

//     console.log(e.target.tagName);
//     if (e.target.tagName === 'IMG') {
//         const removeImg = e.target.parentNode;
//         console.log(removeImg);
//         removeImg.remove();
//     }
// })

// card.addEventListener('mouseover', (e)=>{

//     console.log(e.target.tagName);
//     if (e.target.tagName === 'IMG') {
//         const removeImg = e.target.parentNode;
//         console.log(removeImg);
//         removeImg.remove();
//     }
// })

// card.addEventListener('mouseout',()=>{
//     alert('mouse out');
// })

// card.addEventListener('keydown', (e)=>{
//     console.log("keydown: ", e.key);
// })

// document.addEventListener('keydown', (e)=>{
//     console.log('the press key:', e.key);

//     if (e.key === 'Enter') {
//         alert('yay');
//     }
// })

// document.addEventListener('keypress', (e)=>{
//     console.log(e.which);
// })

document.addEventListener('keyup', (e)=>{
    console.log(e.key);
})
