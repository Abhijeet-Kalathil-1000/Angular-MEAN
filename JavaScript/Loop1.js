function main() {
    Sequence();
    Iteration_For();
    Iteration_While();
}
function Sequence() {
    console.log("In Sequence");
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
}
function Iteration_For() {
    var i = 0;
    console.log("In For");
    for (i = 1; i <= 5; i++) {
        console.log("Hello");
    }
}
function Iteration_While() {
    var i = 0;
    console.log("In while");
    while (i <= 5) {
        console.log("Hello");
        i++;
    }
}
main();
