function main():void
{
    var nRet : number = 0;
    nRet= Area(5);
    console.log("Area of circle is : "+nRet);
}

function Area(Radius : number,PI : number = 3.14):number
{
    var nArea : number = 0;

    nArea = PI*Radius*Radius;

    return nArea;
}

main();