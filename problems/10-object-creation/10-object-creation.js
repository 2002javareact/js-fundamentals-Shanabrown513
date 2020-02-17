/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/
//create an object using object literal
let people ={
    name: string,
    age: number
}
//create an object using constructor function
let people1 = new people (name, age)

//create an object using es6 class
function people(name, age) {
    this.name = name
    this.age = age
}
class people{
    constructor (name, age) {
        this.name = name
        this.age = age
    }
}