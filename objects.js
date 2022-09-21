function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "Rom", last: "Com" });
var coordinate = { x: 34, y: 2 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function calculatePayout(song) {
    return song.numStreams * .0033;
}
function printSongDetails(song) {
    console.log("".concat(song.title, " - {song.artist}"));
}
var mySong = {
    title: 'Brother',
    artist: 'Cosy',
    numStreams: 999,
    credits: {
        producer: 'Phil Spector',
        writer: 'Alex North'
    }
};
var earnings = calculatePayout(mySong);
console.log(earnings);
printSongDetails(mySong);
