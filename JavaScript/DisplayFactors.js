function main() {
    DisplayFactors(20);
}
function DisplayFactors(no) {
    var i = 0;
    for (i = 1; i < (no / 2); i++) {
        if ((no % i) == 0) {
            console.log(i);
        }
    }
}
main();
