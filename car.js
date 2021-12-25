var car = /** @class */ (function () {
    function car(t, m, c) {
        this.type = t;
        this.model = m;
        this.color = c;
    }
    car.prototype.display = function () {
        console.log("type: " + this.type);
        console.log("model: " + this.model);
        console.log("color: " + this.color);
    };
    return car;
}());
var c = new car("BMW", "2021", "Black");
c.display();
c = new car("innova", "2015", "grey");
c.display();
