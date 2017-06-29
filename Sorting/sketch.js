var sortSet = [];
var sortSetLength = 100;
var x = 6;

var swapPoint = 0;


function setup() {
    console.log("hello");
    createCanvas(600, 400);
    background(51);

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
    if (swapPoint > sortSet.length) swapPoint = 0;
    var j = swapPoint;
    var k = swapPoint + 1;
    if (sortSet[j] > sortSet[k]) {
        var temp = sortSet[k]
        sortSet[k] = sortSet[j];
        sortSet[j] = temp;
    }
    swapPoint++;

    for (i = 0; i < sortSet.length; i++) {
        //normalise
        var h = height / sortSetLength * sortSet[i];
        fill(255);
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
