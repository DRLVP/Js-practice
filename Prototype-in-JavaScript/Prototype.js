const myName = "               Durlov                     ";

// console.log(myName.length);

// Object.prototype.trueLength = function (str) {
//     let newStr = str.trim();
//     console.log(`The true length of your ${str} is ${newStr.length}`);
// }

// String.trueLength(myName);

// console.log(Object.prototype);

String.prototype.trueLength = function () {
    // console.log(this);
    console.log(`The true length is : ${this.trim().length}`);
}

// myName.trueLength();


// Prototype Inheritance

const user = {
    name: 'John',
    age: 30,
    country: 'Norway'
}

const Teacher = {
    jobTitle: 'Teacher',
    subject: 'Math',
    isAvalible:true
}

const TAsupport = {
    hasTA: true,
    superviseStudents() {
        console.log('Supervising students');
        },
    
}

Object.setPrototypeOf(TAsupport, Teacher);
// Teacher.__proto__ = TAsupport;
// console.log(Teacher.superviseStudents());

console.log(TAsupport.jobTitle);