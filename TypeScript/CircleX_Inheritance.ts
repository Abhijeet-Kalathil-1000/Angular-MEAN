// Inheriting Class 1 with class 2 (Circle program)
class Circle
{
    No1 :number= 0;
    No2 :number= 3.14;

    constructor(Radius:number)
    {
        this.No1=Radius;
    }
    Area():number
    {
        var Ans :number = 0;

        Ans = (this.No1*this.No1)*this.No2;
        return Ans;
    }
}

class CircleX extends Circle
{
    Circumference():number
    {
        var Ans :number = 0;

        Ans = this.No1*(this.No2*2);
        return Ans;
    }
}

function main():void
{
    var Ret:number = 0;
    var obj1 = new CircleX(11);
    var obj2 = new CircleX(5);

    Ret = obj1.Area();
    console.log("Area of Obj1 is : "+Ret);
    Ret = obj1.Circumference();
    console.log("Circumference of Obj1 is : "+Ret+"\n");

    Ret = obj2.Area();
    console.log("Area of Obj2 is : "+Ret);
    Ret = obj1.Circumference();
    console.log("Circumference of Obj2 is : "+Ret+"\n");
}

main();