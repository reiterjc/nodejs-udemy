var square = x => x * x;
console.log(square(9));

var user = {
    name: 'Justin',
    sayHi: () => {
        console.log(`Hi.  I'm ${this.name}`);  // 'this' is undefined
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi.  I'm ${this.name}`); // 'this' is defined
    }
};

user.sayHi();
user.sayHiAlt(1, 2, 3);
