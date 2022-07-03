//Summation
function main() {
    var Arr = [23, 6, 7, 4, 5, 7];
    var nRet = 0;
    nRet = Summation(Arr);
    console.log("Summation is : " + nRet);
}
function Summation(Brr) {
    var sum = 0;
    var nCnt = 0;
    for (nCnt = 0; nCnt < Brr.length; nCnt++) {
        sum = sum + Brr[nCnt];
    }
    return sum;
}
main();
