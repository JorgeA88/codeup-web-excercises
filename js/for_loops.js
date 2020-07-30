var a=10
var b;

function showMultiplicationTable(){
    for(var i=1;i<=10; i++){
        b = a * i;
        console.log("" + a + "*" + i + "=" + b)
    }
}showMultiplicationTable()