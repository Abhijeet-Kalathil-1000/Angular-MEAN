//Object Orriented Programming (OOP)
function main() {
    var Value1 = 10;
    var Value2 = 11;
    var Ret = 0;
    var obj1 = new Arithematic(10, 11);
    var obj2 = new Arithematic(20, 21);
    Ret = obj1.Addition();
    console.log("Addition of Obj1 is : " + Ret);
    Ret = obj1.Substraction();
    console.log("Substraction of Obj1 is : " + Ret);
    Ret = obj2.Addition();
    console.log("Addition of Obj1 is : " + Ret);
    Ret = obj2.Substraction();
    console.log("Substraction of Obj1 is : " + Ret);
}
//Class Defination
var Arithematic = /** @class */ (function () {
    //Constrctor    
    function Arithematic(a, b) {
        this.No1 = a;
        this.No2 = b;
    }
    //Behaviour
    Arithematic.prototype.Addition = function () {
        var Ans = 0;
        Ans = this.No1 + this.No2;
        return Ans;
    };
    Arithematic.prototype.Substraction = function () {
        var Ans = 0;
        Ans = this.No1 - this.No2;
        return Ans;
    };
    return Arithematic;
}());
main();
