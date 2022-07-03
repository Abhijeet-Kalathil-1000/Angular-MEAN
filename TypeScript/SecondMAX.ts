// Second Max emlement
function main():void
{
    var Arr : number[] = [23,89,6,29,56,45,77,32];
    var nRet: number = 0;
    nRet = Maximum(Arr);
    console.log("Max number is : "+nRet);
}

function Maximum(Brr :number[]):number
{
    var max1:number = 0;
    var max2:number = 0;
    max1=Brr[0];
    var nCnt :number = 0;
    for(nCnt=0;nCnt<Brr.length;nCnt++)
    {
        if(max1 < Brr[nCnt])
        {
            max1 = Brr[nCnt];
        }
    }
    for(nCnt=0;nCnt<Brr.length;nCnt++)
    {
        if((max2 < Brr[nCnt]) && Brr[nCnt] != max1)
        {
            max2 = Brr[nCnt];
        }
    }
    return max2;
}

main();