function greet(num) {
    this.num = num;
}

// console.log(greet.name)


greet.prototype.plusplus = function () {
    this.num++;
}

greet.prototype.printMe = function () {
    console.log(`Total value of num id: ${this.num}`);
}

// console.log(greet.prototype);

const newGreet = new greet(5); // run nohoi iyak notun instance bonabo lagibo
newGreet.plusplus();
newGreet.printMe();