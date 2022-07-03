//Summation

function main():void
{
    var Arr : number[] = [23,6,7,4,5,7];
    var nRet: number = 0;
    nRet = Summation(Arr);
    console.log("Summation is : "+nRet);
}

function Summation(Brr :number[]):number
{
    var sum:number = 0;
    var nCnt :number = 0;
    for(nCnt=0;nCnt<Brr.length;nCnt++)
    {
        sum = sum + Brr[nCnt];
    }
    return sum;
}

main();