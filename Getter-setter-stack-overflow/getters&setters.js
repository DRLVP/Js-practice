// jatia ami ata classot jikinu variable declare koru tatia automatically getter aru setter default modeot as a method set hoia jai aru most importantly getter define korile setter u define koribo lagiboi nohohle error dibo.

class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }


    // getter a value tu catch koribo jitu valuet change koribo 
    get  password(){
        return this.password = `${this._password}pagol`;
    }
   set password(pass){
        this._password = pass;
    }
}

const newUser = new User('hello@gmail.com', 'er5');
console.log(newUser._password);
console.log(newUser.password);

// const aurUser = Object.create(User("yoyoy", '1234'));
// console.log(aurUser);

