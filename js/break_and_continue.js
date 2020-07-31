var numberToSkip;

while (true) {
    numberToSkip = parseInt(prompt("Please choose a number between 1 and 50"));
    if (numberToSkip % 2 !== 0 && numberToSkip > 0 && numberToSkip < 51)
        break;
    else continue;

    console.log(numberToSkip);
};

for(var x = 1 ; x<= 49 ; x += 2) {
    if (x == numberToSkip) {
        console.log('Yikes! Skipped the number:' + numberToSkip);
        continue;
    }
    console.log(x);
}

