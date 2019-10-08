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
class Instructor extends Person{
    constructor(attrs){
        super(attrs);
        this.speciality = attrs.speciality;
        this.favLanguage = attrs.favLanguage;
        this.catchPhrase = attrs.catchPhrase;
    }
    demo(string){
        console.log(`Today we are learning about ${string}`);
    }
    grade(object, string){
        console.log(`${object.name} receieves a perfect score on ${string}`);
    }
}

class Student extends Person{
    constructor(attrs){
        super(attrs);
        this.previousBackground = attrs.previousBackground;
        this.className = attrs.className;
        this.favSubjects = attrs.favSubjects;
    }
    listSubjects(){
        this.favSubjects.forEach(i => {
            console.log(i);
        });
    }
    PRAssignment(string){
        console.log(`${this.name} has submitted a PR for ${string}`);
    }
    sprintChallenge(string){
        console.log(`${this.name} has begun sptring challenge on ${string}`);
    }
}

class ProjectManager extends Instructor{
    constructor(attrs){
        super(attrs);
        this.gradClassName = attrs.gradClassName;
        this.favInstructor = attrs.favInstructor;
    }
    standUp(string){
        console.log(`${this.name} announced to @${string} standy times!`);
    }
    debugsCode(object, string){
        console.log(`${this.name} debugs ${object.name}'s code on ${string}`);
    }
}

const lucas = new Instructor({
    name: 'Lucas',
    location: 'North Carolina',
    age: 23,
    favLanguage: 'Ruby',
    speciality: 'Back-End',
    catchPhrase: 'Gamer Time'
});
const todd = new Instructor({
    name: 'Todd',
    location: 'California',
    age: 30,
    favLanguage: 'JS',
    speciality: 'Front-end',
    catchPhrase: 'blip-bloop'
});
const nathan = new Student({
    name: 'Nathan',
    location: 'Brockport',
    age: 23,
    previousBackground: 'C#',
    className: 'WPT11',
    favSubjects: ['HTML, CSS, C#']
});
const sam = new Student({
    name: 'Sam',
    location: 'New York',
    age: 23,
    previousBackground: 'HTML',
    className: 'WPT11',
    favSubjects: ['HTML, CSS, JS']
});
const howard = new ProjectManager({
    name: 'howard',
    location: 'Nevada',
    age: 37,
    favLanguage: 'JS',
    speciality: 'Front-end',
    catchPhrase: 'That meme gets a bloooooooooop / blip',
    gradClassName: 'CS1',
    favInstructor: 'Lucas'
});
const tim = new ProjectManager({
    name: 'Tim',
    location: 'North Dakota',
    age: 35,
    favLanguage: 'JS',
    speciality: 'Front-end',
    catchPhrase: 'bliiiiiip',
    gradClassName: 'CS2',
    favInstructor: 'Todd'
});

console.log(lucas);
lucas.speak();
lucas.demo('Ruby');
lucas.grade(nathan, 'Ruby - I');
console.log(todd);
todd.speak();
todd.demo('JS');
todd.grade(sam, 'JS - I');
console.log(nathan);
nathan.listSubjects();
nathan.PRAssignment('ruby');
nathan.sprintChallenge('ruby - II');
console.log(sam);
sam.listSubjects();
sam.PRAssignment('JS');
sam.sprintChallenge('Js - II');
console.log(howard);
howard.standUp('webpt11');
howard.debugsCode(nathan, 'Ruby - II');
console.log(tim);
tim.standUp('webpt11');
tim.debugsCode(sam, 'JS - II');

