function square (num: number){
    return num*num
}

function greet (person:string ='stranger'){ // for a default value 
    return `Hi there, ${person}`
}

greet()

// Anotate  the type returned by a function

//Void - returns nothing 

function sqare(num:number): number { // I say to TS that it needs to return a number
    return num*num
}

// Anon functions - when typescript can infer how an unnamed function is going to be called, it can automatticaly infer its parameters' types 
const colors = ['red', 'orange', 'yellow']
colors.map(color => {
   return color.toUpperCase
})

//Never - this should never have a chance t return anything

function makeEroor (msg:string): never {
throw new Error(msg)

}

