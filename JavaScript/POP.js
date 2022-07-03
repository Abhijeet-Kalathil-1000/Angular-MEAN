//Procedure Orriented Programming (POP)
function main() {
    var Value1 = 10;
    var Value2 = 11;
    var Ret = 0;
    Ret = Addition(Value1, Value2);
    console.log("Addition is : " + Ret);
    Ret = Substraction(Value1, Value2);
    console.log("Substraction is : " + Ret);
}
function Addition(No1, No2) {
    var Ans = 0;
    Ans = No1 + No2;
    return Ans;
}
function Substraction(No1, No2) {
    var Ans = 0;
    Ans = No1 - No2;
    return Ans;
}
main();
