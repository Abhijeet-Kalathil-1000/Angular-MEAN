function main():void
{
    Demo(10,20,30);
    Demo(10,20,30);
    Demo(10);
}
//Default Argument
//Numberofrequired arguments are 3 
function Demo(no1 :number,no2 :number = 20,no3 :number = 30)
{
    console.log("Inside Demo"); 
}

main();