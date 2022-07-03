///OOP class Arithematic with Arithematic behaviours 
class Arithematic
{
    No1 :number= 0;
    No2 :number= 0;

    constructor(Value1:number ,Value2:number)
    {
        this.No1=Value1;
        this.No2=Value2;
    }
    Addition():number
    {
        var Ans :number = 0;

        Ans = this.No1 +this.No2;
        return Ans;
    }
    Subtraction():number
    {
        var Ans :number = 0;
        Ans = this.No1 - this.No2;
        return Ans;
    }
    Multiplication():number
    {
        var Ans :number = 0;
        Ans = this.No1 * this.No2;
        return Ans;
    }
    Division():number
    {
        var Ans :number = 0;
        Ans = this.No1 / this.No2;
        return Ans;
    }
}

function main():void
{
    var Ret:number = 0;
    var obj1 = new Arithematic(11,10);
    var obj2 = new Arithematic(111,100);

    Ret = obj1.Addition();
    console.log("Addition of Obj1 is : "+Ret);
    Ret = obj1.Subtraction();
    console.log("Substraction of Obj1 is : "+Ret);
    Ret = obj1.Multiplication();
    console.log("Multiplication of Obj1 is : "+Ret);
    Ret = obj1.Division();
    console.log("Division of Obj1 is : "+Ret+"\n");
    
    Ret = obj2.Addition();
    console.log("Addition of Obj2 is : "+Ret);
    Ret = obj2.Subtraction();
    console.log("Substraction of Obj2 is : "+Ret);
    Ret = obj2.Multiplication();
    console.log("Multiplication of Obj2 is : "+Ret);
    Ret = obj2.Division();
    console.log("Division of Obj2 is : "+Ret);

}

main();