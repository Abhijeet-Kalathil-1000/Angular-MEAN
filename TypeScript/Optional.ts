function main():void
{

    Demo(10,11);
    Demo(10);
}
//Optional Argument
function Demo(no1 :number,no2 ?:number)
{
    console.log("Inside Demo"); 
    console.log("Value of no1 : "+no1); 
    if (no2!=undefined)
    {
    console.log("Value of no2 : "+no2); 
    }
}

main();