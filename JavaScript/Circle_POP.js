function main() {
    var nRet = 0;
    nRet = Area(5);
    console.log("Area of circle is : " + nRet);
}
function Area(Radius, PI) {
    if (PI === void 0) { PI = 3.14; }
    var nArea = 0;
    nArea = PI * Radius * Radius;
    return nArea;
}
main();
