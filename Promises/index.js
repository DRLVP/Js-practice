// PROMISES IN JAVASCRIPT

/* promise loga log complete nohoi, task quee tut lagi gol kin2 loga log complete hua nai karon iyak jitu kam dia hoisile haitu kam asyncronus operation hoi example hisape network request, reading any file  database request, cryptography etc. promise futureot complete hoi*/

// promise ES6 or pasot he introduce hoise iyar agote Q aru bluebird namor libraryr joriote promise or kamkora hoisil. kin2 pasot ai duita library k merge kori dia hoi core javascriptot.
/*
//make a promise
const promiseOne = new Promise((res, rej)=>{
    setTimeout(()=>{
        console.log("welcome to my world");
        res();
    },2000);
})

promiseOne.then(()=>{
    console.log('hello');
})
*/

const card = document.querySelector('#card');
const btn = document.querySelector('#btn');
const h2 = document.createElement('h2')
const img = document.createElement('img')
const p = document.createElement('p')

/*
document.addEventListener('keypress',(e)=>{
    if (e.key === 'Enter') {
        new Promise((res, rej)=>{
            setTimeout(()=>{
               const url = 'https://api.github.com/users/DRLVP';
               const request = new XMLHttpRequest();
               request.open('GET', url);
               request.send();
               request.onreadystatechange=()=>{
                const data = request.responseText;
                let err = false;
                if (!err) {
                    if (request.readyState === 4) {
                        res(data);
                    }
                    }else{
                        rej('error in fetching the user info');
                    }
               }
            },1000);
        }).then((data)=>{
            let userData = JSON.parse(data);
            img.src= `${userData.avatar_url}`
            h2.textContent=`Name: ${userData.name}`;
            p.textContent = `Followers: ${userData.followers}`;
            card.appendChild(img)
            card.appendChild(h2)
            card.appendChild(p)
        }).catch((err)=> console.log(err));
    }
})
*/

const newPromise =  new Promise((res, rej)=>{
    setTimeout(()=>{
       const url = 'https://api.github.com/users/DRLVP';
       const request = new XMLHttpRequest();
       request.open('GET', url);
       request.send();
       request.onreadystatechange=()=>{
        const data = request.responseText;
        let err = false;
        if (!err) {
            if (request.readyState === 4) {
                res(data);
            }
            }else{
                rej('error in fetching the user info');
            }
       }
    },1000);
});
async function displayData(){
    try {
    const userData = JSON.parse(await newPromise);
    img.src= `${userData.avatar_url}`
    h2.textContent=`Name: ${userData.name}`;
    p.textContent = `Followers: ${userData.followers}`;
    card.appendChild(img)
    card.appendChild(h2)
    card.appendChild(p)
    } catch (error) {
        console.log('fetch error::', error);
    }
    
}

document.addEventListener('keypress',(e)=>{
    if (e.key === 'Enter') {
       displayData();
    }
})




