// interface kw followed by a name and then {} 
//and inside the types of properties
var pt = { x: 123, y: 1234 };
var thomas = {
    first: "Thomas",
    last: "Hardy",
    nickname: "Tom",
    id: 2314,
    sayHi: function () {
        return "Hello!";
    }
};
thomas.first = "djdjjd";
var shoes = {
    name: 'Blue',
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes.applyDiscount(0.4));
