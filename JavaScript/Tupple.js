function main() {
    var Arr = [10, "Hello", true]; //typescript
    console.log("Length of array is : " + Arr.length);
    console.log("First element is : " + Arr[0]);
    console.log("Second element is : " + Arr[1]);
    console.log("Elements of array : ");
    var i = 0;
    for (i = 0; i < Arr.length; i++) {
        console.log(Arr[i]);
    }
}
main();
