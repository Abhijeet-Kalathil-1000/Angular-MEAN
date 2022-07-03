//Object Orriented Programming (OOP)
function main():void
{
    var Value1 :number = 10;
    var Value2 :number = 11;
    var Ret :number = 0;

    var obj1 = new Arithematic(10,11);
    var obj2 = new Arithematic(20,21);

    Ret = obj1.Addition();
    console.log("Addition of Obj1 is : "+Ret);
    Ret = obj1.Substraction();
    console.log("Substraction of Obj1 is : "+Ret);

    
    Ret = obj2.Addition();
    console.log("Addition of Obj1 is : "+Ret);
    Ret = obj2.Substraction();
    console.log("Substraction of Obj1 is : "+Ret);
}

//Class Defination
class Arithematic
{

//Charachteristics 
    No1: number;
    No2: number;

//Constrctor    
    constructor(a: number,b: number)
    {
        this.No1 = a;
        this.No2 = b;
    }

//Behaviour
    Addition():number
    {
        var Ans : number = 0;
        Ans = this.No1 + this.No2;
        return Ans;
    }

    Substraction():number
    {
        var Ans : number = 0;
        Ans = this.No1 - this.No2;
        return Ans;
    }
}

main();