var numberToSkip = prompt()
for(var x = 1 ; x<= 49 ; x += 2) {
    if (x == numberToSkip) {
        continue;
    }
    console.log(x);
}

 var k=1;
    while(k <= 16){
        console.log(Math.pow(2,k))
        k++;
}




var allCones = Math.floor(Math.random()*50)+50;

do {var coust= Math.floor(Math.random()*4)+1;
    if(coust > allCones){
        console.log("Cannot sell you"+ coust +"cones I only have"+ allCones +"...")
    continue;
    }
    console.log(coust +" cones sold..")
    allCones = allCones - coust;
    if(allCones === 0){
        console.log("yay! I sold them all..")
    }

}
while(allCones > 0)