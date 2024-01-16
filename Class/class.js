//  Classes in javascript

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    printMe(){
        console.log(`The user name is ${this.username} and his email is ${this.email}`);
    }
}

const newUser = new User("DRLOV", "ex@gmail.com", "12345");
console.log(newUser.printMe());