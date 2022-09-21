// interface kw followed by a name and then {} 
//and inside the types of properties

interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 123, y: 1234 };

//optional and ready only is also used here

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  sayHi: () => string; //sayHi must be a method that accepts
  //zero arguments and then returns a string
  // I can also use sayHi(): string and it is the same thing!
}

const thomas: Person = {
  first: "Thomas",
  last: "Hardy",
  nickname: "Tom",
  id: 2314,
  sayHi: () => {
    return "Hello!";
  },
};

thomas.first = "djdjjd";
//thomas.id = 888 - ERROR

interface Product {
    name: string,
    price: number,
    applyDiscount(discount: number): number //this methods accepts a number
    // i can't put appkyDiscout(number) because typescript will 
    //think it is the parameters name. I need to give it a name and 
    //then put the type. Returns a number
}

const shoes: Product ={
    name: 'Blue',
    price: 100 ,
    applyDiscount(amount: number) {
       const newPrice = this.price * (1-amount);
       this.price = newPrice
       return this.price
    },
}

console.log(shoes.applyDiscount(0.4))

//  ao contrário do que acontece com os typess
// o interface pode ser reaberto
// e adicionar mais propriedades

interface Dog{
    name: string
    age:number
}

interface Dog {
    breed: string
    bark(): string
}

const elton: Dog ={
    name: 'Elton',
    age: 0.5,
    breed:'Australian Shepherd',
    bark(){ return 'WOOF'}
}

// extends interface

interface ServiceDog extends Dog {
job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
    name: 'Chewy',
    age: 2,
    breed:'Australian Shepherd',
    bark(){ return 'Bark!'},
    job: 'guide dog'
}



// multiple inheritance/ 
//interface that extends multiple interfaces

interface Person2 {
    name: string
}

interface Employee {
    readonly id: number, 
    email: string,

}

interface Engineer extends Person2, Employee {
    level: string, 
    languages: string[]
}

const pierre: Engineer = {
    name:'Pierre',
    id: 34566,
    email: 'pierre@gmail.com',
    level: 'senior',
    languages: ['JS', 'Phyton']

}

// here we have an interface that extends
// multiple interfaces

//Type Aliases vs Interfaces 
//Diferences

/* Interfaces can only describe the shape of an object
We have to use type alias if we want to describe 
something thar it is not the shape of an object 

With interfaces we can reopen and add other propeties,
 with types we can't 

 With interface we can extend properties - 
  like in a class
  In type alias we need to use intersection types with &
*/

