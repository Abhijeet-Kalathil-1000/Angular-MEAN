function main() {
    fun();
    gun(21);
    var ret = 0;
    var a = 10;
    ret = sun(a);
    console.log("Return value is : " + ret);
}
//Function defination
function fun() {
    console.log("Inside Fun");
}
function gun(no) {
    console.log("Inside gun: " + no);
}
function sun(no) {
    var i = no; //local variable
    i++;
    return i;
}
main();
