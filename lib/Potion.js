//-----------Potion constructor function
function Potion(name) {
    this.types = ['strength', 'agility', 'health'];
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

    if (this.name === 'health') {
        this.value = Math.floor(Math.random() * 10 + 30);
    } else {
        this.value = Math.floor(Math.random() * 5 + 7);
    }
}

module.exports = Potion;



/*----------------NOTES
*   New keyword is used to make new object
*   the name property will be == health
*   the value property will be == a number
*   The expect.any() method takes a constructor as an argument.
*   Constructor functions act like blueprints for objects. Because they don't have a return statement, they return undefined by default. However, unlike a regular function, they are meant to be used in conjunction with the new keyword.
*       It's also essential that we do not use arrow functions as constructor functions. Arrow functions change the meaning of the keyword this, which is a core piece of constructor functions.
*   It is very common to capitalize the first letter in a constructor function
*   we can give the car instance and the constructor function the same name because the C in Car() is capitalized in the constructor function whereas the variable name is lowercase const car =
*/