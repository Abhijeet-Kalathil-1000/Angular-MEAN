var no1 : number = 10;
var no2 : number = 11;
var ret : number = 0;

ret = Addition(no1,no2);
console.log(ret);

function Addition(value1: number,value2: number) : number
{
    var ans : number = 0;
    ans = value1 + value2;
    return ans;
}