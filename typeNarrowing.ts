/* // type of guard
function triple (value: number | string){
if(typeof value === 'string'){
    return value.repeat(3)
}
return value * 3
}
 */
//Truthiness 

const el = document.getElementById('idk')
if (el){
    el
} else {
    el
}

const printLetters =(word?:string) => {
    if(word){
        for (let char of word){
            console.log(char);
        }
    } else {
        word
        console.log('You did not pass in a word')
    }
}


// Equality Narrowing

function someDemo(x:string |number, y: string| boolean) {
    if( x==y){
        x
        y
    }
}

//Narrowing with the in operator

interface Movie {
    title:string,
    duration:number
}

interface TVShow {
    title: string,
    numEpisodes:number,
    episodeDuration:number
}

function getRuntime(media: Movie | TVShow){
    if('numEpisodes' in media ){
       return media.numEpisodes*media.episodeDuration
    }
        media
}

console.log(getRuntime({title: 'Amadeus', duration: 160}))
console.log(getRuntime({title: 'SpongeBob', numEpisodes: 80, episodeDuration:30}))



//Instance narrowing - used with Date 

function printFullDate(date: string | Date){
    if(date instanceof Date){
        date
        console.log(date.toUTCString());
    } else {
        console.log(new Date(date).toUTCString());
    }
    }

    class User{
        constructor(public username : string){}
    } class Company {
        constructor(public name:string) {}
    }

    function printName(entity: User | Company){
        if(entity instanceof User){
            entity
    } else {
        entity
    }

    }