class User{
    constructor(username){
        this.username = username;
    }

    printMe(){
        console.log(`The user name is ${this.username}`);
    }
}


// extends keywordor joriyote ami User class or properties homuh inheritance kori lolu
class newUser extends User {
    constructor (username, email, password){
        super(username); // super keywordor joriyote ami aitu contextor reference di dilu jidore ami .call method di reference disilu
        this.email = email;
        this.password = password;
    }
}

const myUser = new newUser('DRLOV', 'ex@gmail.com', '123ed');
console.log(myUser);

console.log(myUser instanceof User);