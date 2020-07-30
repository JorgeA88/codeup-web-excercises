var numberToSkip = 27
for(var x = 1 ; x<= 50 ; x++) {
    if (x === numberToSkip) {
        continue;
    }
    console.log(x);
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