class Dog{
    constructor(name){
        this._name = name;
    }
    introduced(){
        console.log("This is " + this._name + " !");
    }
    // A static method
    static bark(){
        console.log("Woof!");
    }
}
const myDog = new Dog("Buster!");
myDog.introduced();

// Calling thestatic method
Dog.bark();