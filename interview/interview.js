// Object or own properties homuh kio change koribo nuwari ba overwrite koribo nuwari

// console.log(Math.PI);

// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

const Obj = {
    name:'drlov',
    age: 23
}

Object.defineProperty(Obj, 'age', {
    writable:false,
    enumerable:false,
    configurable:false
})

for (const [key, value] of Obj) {
    console.log(`${key}: ${value}`);
}