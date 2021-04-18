//CommonJS, every file is module (by default)
//modules - Encapsulated code (only share minimum)
const john = "John";
const peter = "Peter";

//arrow function into a variable. Or a variable initilized by a arrow function.
const sayhi = (name) => {
    console.log(`hello there ${name}`); //blade syntax
}

sayhi("Nirjhor");
sayhi(john);
sayhi(peter);