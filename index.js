// Your code here
class Cat {
    //...
    //name..sex properties
     //constructor
    constructor(name, sex){
        this.name= name;
        this.sex= sex;
    }

    speak(){
        return `${this.name} says meow!`;
    }
}

class Dog {
    //...
    //name..sex instance variable
    //constructor
    constructor(name, sex){
        this.name= name;
        this.sex= sex;
    }

    speak(){
        return `${this.name} says woof!`;
    }
}

class Bird {
    //...
    //name..sex properties
    //constructor
    constructor(name, sex){
        this.name= name;
        this.sex= sex;
    }

    speak(){
        //return `${name} says meow!`;
        if(this.sex==="male"){
            return `It's me! ${this.name}, the parrot!`;
        }else{
            return `${this.name} says squawk!`;
        }
    }
}

let myBird= new Bird("Birdie", "female");
console.log(myBird.speak());