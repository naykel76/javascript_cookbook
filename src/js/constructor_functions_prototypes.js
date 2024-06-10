import styledLog from "./utils/styledLog";

// **NOTE** 
// VAR MAY BE USED TO MAKE IT EASY TO REASSIGN VARIABLES.
// THIS IS NOT THE RECOMMENDED APPROACH IN MODERN JAVASCRIPT.

styledLog('Constructor Functions', { heading: true });

/**
 * Constructor functions are a way to create an object in JavaScript.
 */
function Person(name) {
    if (!new.target) return { name };
    this.name = name;

    /**    
     * A constructor function can explicitly return a value. If the return value
     * is an object, it will be returned instead of the newly created object.
     * 
     * Note: Returning a non-object value (like a string or number) will not
     * affect the outcome; the new object will still be returned.
     */
    return { name, msg: 'Hey there' }; // overrides the object instance
}

/*
 * In JavaScript, each object has a prototype, which is another object. All
 * objects inherit their properties and methods from their prototype.
 * 
 * Here, we're adding a 'greet' method to the prototype of the 'Person'
 * constructor function. This means that all instances of 'Person' will have
 * access to the 'greet' method.
 * 
 * Arrow functions don't have their own 'this' context, so you should use a
 * regular function instead.
 */
Person.prototype.greet = function () { // add 'greet' to the `Person` prototype
    return `Hello, my name is ${this.name}`;
};

styledLog('Constructor functions without the`new` keyword, behaves like a normal function');
var mike = Person('Mike');
console.log('without `new`:', mike);
console.log('constructor:', mike.constructor);
console.log(mike.constructor === Object); // true because no `new` keyword and returns an object 

styledLog('Constructor functions with the`new` keyword creates an object');
var jim = new Person('Jim');
console.log('Object instance:', jim);

styledLog('Checking object instance and constructors');
var is_constructor_func = jim.constructor === Person; // true
var is_instance_of_person = jim instanceof Person; // true
var is_instance_of_object = jim instanceof Object; // true
console.log('is_constructor_func:', is_constructor_func); // true
console.log('is_instance_of_person:', is_instance_of_person); // true
console.log('is_instance_of_object:', is_instance_of_object); // true

/**
 * Classes
 */
console.clear();
styledLog('Classes', { heading: true });
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return `${this.name} makes a noise.`;
    }
}

class Dog extends Animal {
    constructor() {
        super('Dog');
        super.speak();
    }

    // speak() {
    //     return `${this.name} barks.`;
    // }
}

var pig = new Animal('Pig');
var dog = new Dog();
console.log(dog.speak());

/**
 * when inheriting from a class, the `instanceof` operator will also return true
 * for the parent class, but not the other way around.
 */
console.log(pig instanceof Animal); // true
console.log(dog instanceof Animal); // true
console.log(pig instanceof Dog); // false
console.log(dog instanceof Dog); // true

/**
 * The `Object.getPrototypeOf()` method returns the prototype of the specified
 * object. In this case, we're checking if the prototype of the `dog` object is
 * the same as the `Dog` prototype.
 * 
 * Each object has a prototype, which is another object, so in this case, the
 * `dog` object has the `Dog` prototype, not the `Animal` prototype.
 */
var has_same_prototype = Object.getPrototypeOf(dog) === Dog.prototype;
console.log('has_same_prototype:', has_same_prototype); // true
var has_same_prototype = Object.getPrototypeOf(dog) === Animal.prototype;
console.log('has_same_prototype:', has_same_prototype); // false


// var class_name = new.target.name; // Animal
// 