// API IN JAVASCRIPT

/* xmlhttprequest ata legacy api call method hoi jitu AJAX programmingor hohayat kora hoi */

const url= 'https://randomuser.me/api/';

// prothome XML method tuk new keyword are notun instance ata bonabo labibo
const http = new XMLHttpRequest();
// ditiote ami open() method call kori url tu pothabo lagibo
http.open('GET', url); // open() method e url tu call nokore request pothabor babe .send() method use koribo lagibo
http.send(); // atia he .open() method tu call hoise

// xml request method ot continuously status change hoi tha k ru tak monitor koribole ami onreadystatechange() method use koru aru ai method tu jetai state change hbo tatiai execute hbo
http.onreadystatechange=()=>{
    console.log(http.readyState); 
    if (http.readyState === 4 ) {
        const data = JSON.parse(http.responseText);
        console.log(data.results[0].dob.age);
    }
}

