const url = fetch('https://api.coindesk.com/v1/bpi/currentprice.json');


url.then((val) => {
    return val;
}).then((val2) => {
    return val2.json();
})