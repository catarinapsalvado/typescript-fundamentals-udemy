// union types makes an element to be more than one type

let age: number | string = 21;
age = 23;
age = "24";

type Point3 = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 1, y: 2 };
coordinates = {
  lat: 321.213,
  long: 23.334,
};

// Union types and Arrays
//if we want an array with different types we can put the types in ()
const stuff: (number | string)[] = [1, 2, 3, 4, "yes"];

const coords2: (Point | Loc)[] = [];
coords2.push({
  lat: 321.213,
  long: 23.334,
});

let zero: 0 = 0;
let mood: "Happy" | "Sad" = "Happy";

mood = "Sad";

type DayOfWeek = 
"Monday" | 
"Tuesday" | 
"Wednesday";

let today: DayOfWeek = 'Monday'