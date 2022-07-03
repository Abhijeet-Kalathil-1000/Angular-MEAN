// Second Max emlement
function main() {
    var Arr = [23, 89, 6, 29, 56, 45, 77, 32];
    var nRet = 0;
    nRet = Maximum(Arr);
    console.log("Max number is : " + nRet);
}
function Maximum(Brr) {
    var max1 = 0;
    var max2 = 0;
    max1 = Brr[0];
    var nCnt = 0;
    for (nCnt = 0; nCnt < Brr.length; nCnt++) {
        if (max1 < Brr[nCnt]) {
            max1 = Brr[nCnt];
        }
    }
    for (nCnt = 0; nCnt < Brr.length; nCnt++) {
        if ((max2 < Brr[nCnt]) && Brr[nCnt] != max1) {
            max2 = Brr[nCnt];
        }
    }
    return max2;
}
main();
