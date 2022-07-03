//OOP class circle with behaviour area
var Circle = /** @class */ (function () {
    function Circle(Radius) {
        this.No1 = 0;
        this.No2 = 3.14;
        this.No1 = Radius;
    }
    Circle.prototype.Area = function () {
        var Ans = 0;
        Ans = (this.No1 * this.No1) * this.No2;
        return Ans;
    };
    return Circle;
}());
function main() {
    var Ret = 0;
    var obj1 = new Circle(11);
    var obj2 = new Circle(5);
    Ret = obj1.Area();
    console.log("Area of Obj1 is : " + Ret);
    Ret = obj2.Area();
    console.log("Area of Obj2 is : " + Ret);
}
main();
