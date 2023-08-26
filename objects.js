// OBJECTS IN JAVASCRIPT?
/*
const mySym = Symbol('symbol1');
const obj = {
    'full name': "Durlov",
    age: 22,
    [mySym]: "mykey",
    skills: function skills() { //object or vitort thoka function ok method buli kuwa hoi

    }
}
*/

let user = {
    id: 785688,
    firstName: "John",
    lastName: 'Doe',
    email: 'demo@google.com',
    address: {
        street: '3400 NW 9th Ave.',
        city: "Seattle",
        state: "WA",
        zipcode: 98101
    },
}

user.greet = function () {
    console.log(`have a good day ${this.firstName} ${this.lastName}`);
}
// console.log(`Hello  ${user.firstName} ${user.lastName}`);

// console.log(user.greet());


let city = {
    countryName: 'USA',
    city: 'new york',
}

let city1 = {
    countryName: 'UK',
    city: 'London'
}
let city2 = {
    countryName: 'Australia',
    city: 'Melborne'
}
let city3 = {
    countryName: 'India',
    city: 'Delhi'
}

// const countryAndCity = Object.assign({}, city1, city2, city3);
const countryAndCity = { ...city, ...city1, ...city2, ...city3 }
console.log(countryAndCity);
