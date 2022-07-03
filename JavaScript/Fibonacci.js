//Fibonacci
function main() {
    Fibonacci(21);
}
function Fibonacci(value) {
    var no1 = 0;
    var no2 = 0;
    var no3 = 0;
    var nCnt = 0;
    no1 = 0;
    no2 = 1;
    for (nCnt = 1; nCnt < (value / 2); nCnt++) {
        if (no3 < value) {
            no3 = no2 + no1;
            console.log(no3);
            no1 = no2;
            no2 = no3;
        }
    }
}
main();
