function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}

type Point = {
    x:number;
    y:number
}; //I can reuse this type



printName({ first: "Rom", last: "Com" });

let coordinate : Point = { x:34,y:2};

function randomCoordinate(): Point { // :{} é o return
    return {x:Math.random(), y: Math.random()};
}

type Song = {
    title:string, 
    artist:string, 
    numStreams:number, 
    credits: {producer:string, writer:string
}
}
function calculatePayout(song:Song): number {
return song.numStreams * .0033
}

 function printSongDetails(song:Song):void{
console.log (`${song.title} - {song.artist}`);
} 
const mySong : Song = {
    title: 'Brother',
    artist: 'Cosy',
    numStreams: 999,
    credits:{
        producer: 'Phil Spector',
        writer:'Alex North'}
} 



const earnings = calculatePayout(mySong)
console.log(earnings)
printSongDetails(mySong)

type Point2 = {
    x:number;
    y:number
    z?: number; //optional
}; 

const myPoint: Point ={x:1, y:3}

 //readonly modifier we used in TS - it can read that that but not modify it

type User ={
    readonly id: number,
    username:string
}

const user : User = {
    id: 1234,
    username: 'catgirl',
}

type Circle = {
    radius: number;
};

type Colorful ={
    color: string
}

type ColorfulCircle = Circle & Colorful

const happyFace : ColorfulCircle = {
    radius: 4, 
    color:'yellow'
}

type Cat = {
    numLives:number
}

type Dog = {
    breed: string
}

type CatDog = Cat & Dog & { age: number};

const christy: CatDog = {
    numLives: 7,
    breed: 'husky',
    age: 9
} 

function printAge(age: number | string): void{
console.log (`You are ${age} years old`);
}

printAge(23)
printAge('78')

//as soon we introduce the possibility of being a string, ts doesnt allow an operation (x)

//Type narrowing - we need to use an if

//in the return type we need to put an undefined 

/* function calculateTax(price: number | string, tax: number): number|string|undefined {
    if (typeof price === 'string' ){
      price.replace('$', '') 
    } else {
         return price*tax
} 
    } */
  
    function calculateTax(price: number | string, tax: number): number|string|undefined {
        if (typeof price === 'string' ){
          price=parseFloat(price.replace('$', ''))  // convert to a number, so we can return straightforward
        } return price*tax
    } 
        
      
   