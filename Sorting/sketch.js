var sortSet = [];
var sortSetLength;
var x = 10;
var sorted = false;
var swapMade = false;
var swapPoint = 0;



function setup() {
    console.log("hello");
    createCanvas(600, 400);
    background(51);

    sortSetLength = width / x;

    for (i = 0; i < sortSetLength; i++) {
        sortSet[i] = i
    }

    shuffleArray(sortSet);
    //draw vertical rect for each element
    for (i = 0; i < sortSet.length; i++) {
        //normalise
        var h = height / sortSetLength * sortSet[i];
        fill(255);
        rect(x * i, height - h, x, h);
    }
}

function draw() {
    background(51);
    if (swapPoint > sortSet.length && !swapMade) {
        sorted = true;
    } else if (swapPoint > sortSet.length) {
        swapPoint = 0;
        swapMade = false;
    }

    var j = swapPoint;
    var k = swapPoint + 1;

    if (!sorted) {
        if (sortSet[j] > sortSet[k]) {
            var temp = sortSet[k]
            sortSet[k] = sortSet[j];
            sortSet[j] = temp;
            swapMade = true;
        }
        swapPoint++;
    }

    for (i = 0; i < sortSet.length; i++) {
        //normalise
        var h = height / sortSetLength * sortSet[i];
        if (sorted) {
            fill(0, 255, 0);
        } else {
            fill(255);
        }
        rect(x * i, height - h, x, h);
    }
}

function shuffleArray(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
