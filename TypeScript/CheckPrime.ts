//Check Prime

function main () :void
{
    var bFlag : boolean = false;

    bFlag = ChkPrime(11);
    if(bFlag == true)
    {
        console.log("It is Prime number");
    }
    else
    {
        console.log("It is not Prime number");
    }
}

function ChkPrime(no : number):boolean
{
    var i : number = 0;
    var PrimeCnt : number = 0;
    for(i=1;i<(no/2);i++)
    {
        if((no % i)==0)
        {
            PrimeCnt++;
        }
    }
    if(PrimeCnt == 1)
    {
        return true;
    }
    else
    {
        return false;
    }
}

main();