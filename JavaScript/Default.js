function main() {
    Demo(10, 20, 30);
    Demo(10, 20);
    Demo(10);
}
//Default Argument
//Numberofrequired arguments are 3 
function Demo(no1, no2, no3) {
    if (no2 === void 0) { no2 = 20; }
    if (no3 === void 0) { no3 = 30; }
    console.log("Inside Demo");
}
main();
