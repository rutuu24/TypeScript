var person = /** @class */ (function () {
    function person(n, a, m) {
        this.name = n;
        this.adharno = a;
        this.mobileno = m;
    }
    person.prototype.get = function () {
        this.name = "Rutuja";
        this.adharno = "242424242424";
        this.mobileno = "9876543210";
    };
    return person;
}());
var p = new person("A", "B", "c");
p.get();
