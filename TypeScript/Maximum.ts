//Maximum
function main():void
{
    var Arr : number[] = [23,89,6,29,56,45,77,32];
    var nRet: number = 0;
    nRet = Maximum(Arr);
    console.log("Max number is : "+nRet);
}

function Maximum(Brr :number[]):number
{
    var max:number = 0;
    max=Brr[0];
    var nCnt :number = 0;
    for(nCnt=0;nCnt<Brr.length;nCnt++)
    {
        if(max < Brr[nCnt])
        {
            max = Brr[nCnt];
        }
    }
    return max;
}

main();