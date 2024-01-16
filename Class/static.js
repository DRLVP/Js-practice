class User{
    constructor(username){
        this.username = username;
    }

    printMe(){
        console.log(`The user name is ${this.username}`);
    }

    // jatia ami jikunu ata properties ba methodor access direct dibo nukhuju jiman bilak new instance aitu Object or create hbo tatia ami static keyword use koru
    static secreatPassword(){
        console.log(`The password is not acessable`);
    }
}

const newUser = new User("hello");
newUser.secreatPassword();