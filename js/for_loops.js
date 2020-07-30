function showMultiplicationTable(number){
    if(typeof number !== "number") {
        console.log("This is not a number");
    } else {
        for (var i = 1; i <= 10; i++){
            var answer = (number * i);
            console.log(number +'x' + i + "=" + answer)
        }
    }
}
console.log(showMultiplicationTable(7))

for(i=1;i <=10;i++){
    var k;
    k=Math.floor(Math.random()*180+20);
    if(k % 2 == 0){
        console.log(k + " is even")
    } else {
        console.log(k + " is odd")
    }
}

for(var i=1;i<=9;i++){
    var n=0;
    for(var k=0; k<i; k++){
        n= i*Math.pow(10,k)+n;
    }
    console.log(n)
}



for(i = 100;i >0;i-=5){
    console.log(i);
}
