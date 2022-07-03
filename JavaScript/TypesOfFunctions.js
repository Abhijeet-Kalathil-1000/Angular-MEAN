function main() {
    var Ret = 0;
    Ret = Addition1(10, 11);
    console.log("Addition is : " + Ret);
    Ret = Addition2(51, 101);
    console.log("Addition is : " + Ret);
    Ret = Addition3(11, 101);
    console.log("Addition is : " + Ret);
}
///Regular function
function Addition1(No1, No2) {
    var Ans = 0;
    Ans = No1 + No2;
    return Ans;
}
///Anonymous function (Function without name)
var Addition2 = function (No1, No2) {
    var Ans = 0;
    Ans = No1 + No2;
    return Ans;
};
//Fat arrow / Lambda / Arrow function
var Addition3 = function (No1, No2) {
    var Ans = 0;
    Ans = No1 + No2;
    return Ans;
};
main();
