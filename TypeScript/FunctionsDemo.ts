function main():void
{
    fun();
    gun(21);

    var ret : number = 0;
    var a:number = 10;
    ret= sun(a);
    console.log("Return value is : "+ret);
}

//Function defination
function fun()      //Type 1
{
    console.log("Inside Fun");
}

function gun(no:number)  //Type 2
{
    console.log("Inside gun: "+no);
}

function sun (no:number) :number  //Type 3
{
    var i : number = no;   //local variable
    i++;
    return i;
}
main();

