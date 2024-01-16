function setUserName(name) {
    this.name = name;
    console.log("called");
}

function setUser(username, email, password) {
    setUserName.call(this, username); // ai2 functionor propertiy hold koribor babe .call use koribo lagibo, current context pass to another function
    this.email = email;
    this.password = password;
}

const newUser = new setUser("drlov", "example@gmail.com", "1234");
console.log(newUser);