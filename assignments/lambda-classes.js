// CODE here for your Lambda Classes
class Person {
    constructor(attrs){
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class instructor extends person{
    constructor(attrs){
        super(attrs);
        this.speciality = attrs.speciality;
        this.favLanguage = attrs.favLanguage;
        this.catchPhrase = attrs.catchPhrase;
    }
    demo(string){
        
    }
    grade(object, string){

    }
}