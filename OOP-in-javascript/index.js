// example

// function user(username, isLoggedIn) {
//     this.username = username;
//     this.isLoggedIn = isLoggedIn;
//     return this;
// }

// const userOne = user('DRLOV', true); // atia thik ase
// const userTwo = user('Rock', false); // userTwo print nokora k value overwrite hoi gol kar function hoise refference data type
// console.log(userOne);

// const userOne = new user('DRLOV', true);
// const userTwo = new user('ROCK', false);
// new keyword use kora loge loge duita function beleg beleg buli dhora hoi 
// console.log(userTwo); 
// console.log(userOne);

const User = {
    usename: "Durlov",
    isLoggedIn : true,
    greet: function() {
        console.log(`hello ${this.usename}`);
    }
};

// const newUser = new User();
// newUser.usename = "Rocky";
// newUser.isLoggedIn = false;

// console.log(newUser);

console.log(User);