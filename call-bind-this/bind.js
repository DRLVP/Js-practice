class User{
    constructor(name, password){
        this.name = name;
        this.password = password;


        document.querySelector('button')
        .addEventListener('click', this.handleClick.bind(this));
    }
    
    handleClick(){
        console.log('button cliked');
        console.log(this.password);
    }
}

const user = new User('sasj', 'skjdfhkdjs');