/* // type of guard
function triple (value: number | string){
if(typeof value === 'string'){
    return value.repeat(3)
}
return value * 3
}
 */
//Truthiness 
var el = document.getElementById('idk');
if (el) {
    el;
}
else {
    el;
}
var printLetters = function (word) {
    if (word) {
        for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
            var char = word_1[_i];
            console.log(char);
        }
    }
    else {
        word;
        console.log('You did not pass in a word');
    }
};
// Equality Narrowing
function someDemo(x, y) {
    if (x == y) {
        x;
        y;
    }
}
function getRuntime(media) {
    if ('numEpisodes' in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    media;
}
console.log(getRuntime({ title: 'Amadeus', duration: 160 }));
console.log(getRuntime({ title: 'SpongeBob', numEpisodes: 80, episodeDuration: 30 }));
//Instance narrowing - used with Date 
function printFullDate(date) {
    if (date instanceof Date) {
        date;
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date(date).toUTCString());
    }
}
var User = /** @class */ (function () {
    function User(username) {
        this.username = username;
    }
    return User;
}());
var Company = /** @class */ (function () {
    function Company(name) {
        this.name = name;
    }
    return Company;
}());
function printName(entity) {
    if (entity instanceof User) {
        entity;
    }
    else {
        entity;
    }
}
