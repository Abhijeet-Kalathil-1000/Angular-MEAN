///OOP class Arithematic with Arithematic behaviours 
var Arithematic = /** @class */ (function () {
    function Arithematic(Value1, Value2) {
        this.No1 = 0;
        this.No2 = 0;
        this.No1 = Value1;
        this.No2 = Value2;
    }
    Arithematic.prototype.Addition = function () {
        var Ans = 0;
        Ans = this.No1 + this.No2;
        return Ans;
    };
    Arithematic.prototype.Subtraction = function () {
        var Ans = 0;
        Ans = this.No1 - this.No2;
        return Ans;
    };
    Arithematic.prototype.Multiplication = function () {
        var Ans = 0;
        Ans = this.No1 * this.No2;
        return Ans;
    };
    Arithematic.prototype.Division = function () {
        var Ans = 0;
        Ans = this.No1 / this.No2;
        return Ans;
    };
    return Arithematic;
}());
function main() {
    var Ret = 0;
    var obj1 = new Arithematic(11, 10);
    var obj2 = new Arithematic(111, 100);
    Ret = obj1.Addition();
    console.log("Addition of Obj1 is : " + Ret);
    Ret = obj1.Subtraction();
    console.log("Substraction of Obj1 is : " + Ret);
    Ret = obj1.Multiplication();
    console.log("Multiplication of Obj1 is : " + Ret);
    Ret = obj1.Division();
    console.log("Division of Obj1 is : " + Ret + "\n");
    Ret = obj2.Addition();
    console.log("Addition of Obj2 is : " + Ret);
    Ret = obj2.Subtraction();
    console.log("Substraction of Obj2 is : " + Ret);
    Ret = obj2.Multiplication();
    console.log("Multiplication of Obj2 is : " + Ret);
    Ret = obj2.Division();
    console.log("Division of Obj2 is : " + Ret);
}
main();
