//OOP class circle with behaviour area
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

function main():void
{
    var Ret:number = 0;
    var obj1 = new Circle(11);
    var obj2 = new Circle(5);

    Ret = obj1.Area();
    console.log("Area of Obj1 is : "+Ret);

    Ret = obj2.Area();
    console.log("Area of Obj2 is : "+Ret);
}

main();