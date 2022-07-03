function main(): void
{
    var no : number = 11;
    var bret : boolean;
    
    bret=CheckEven(no);
    if(bret ==true)
    {
        console.log("It is even number");
    }
    else
    {
        console.log("It is odd number");
    }
}


function CheckEven(value:number) : boolean
{
    if((value % 2) == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

main();