var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Inheriting Class 1 with class 2 (Circle program)
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
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleX.prototype.Circumference = function () {
        var Ans = 0;
        Ans = this.No1 * (this.No2 * 2);
        return Ans;
    };
    return CircleX;
}(Circle));
function main() {
    var Ret = 0;
    var obj1 = new CircleX(11);
    var obj2 = new CircleX(5);
    Ret = obj1.Area();
    console.log("Area of Obj1 is : " + Ret);
    Ret = obj1.Circumference();
    console.log("Circumference of Obj1 is : " + Ret + "\n");
    Ret = obj2.Area();
    console.log("Area of Obj2 is : " + Ret);
    Ret = obj1.Circumference();
    console.log("Circumference of Obj2 is : " + Ret + "\n");
}
main();
