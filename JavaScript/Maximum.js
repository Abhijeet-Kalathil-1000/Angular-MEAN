//Maximum
function main() {
    var Arr = [23, 89, 6, 29, 56, 45, 77, 32];
    var nRet = 0;
    nRet = Maximum(Arr);
    console.log("Max number is : " + nRet);
}
function Maximum(Brr) {
    var max = 0;
    max = Brr[0];
    var nCnt = 0;
    for (nCnt = 0; nCnt < Brr.length; nCnt++) {
        if (max < Brr[nCnt]) {
            max = Brr[nCnt];
        }
    }
    return max;
}
main();
