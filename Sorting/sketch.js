var sortSet = [];
var sortSetLength;
var x = 10;
var sorted = false;
var swapMade = false;
var swapPoint = 0;
var highTone;
var chk_sound;
var sortLimit;



function setup() {
    console.log("hello");
    createCanvas(600, 400);
    background(51);

    highTone = loadSound("assets/1k_tone.wav");
    chk_sound = createCheckbox('Sound?', false);

    sortSetLength = round(width / x);
    sortLimit = sortSetLength;

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
    if (swapPoint > sortLimit && !swapMade) {
        sorted = true;
    } else if (swapPoint > sortLimit - 2) {
        swapPoint = 0;
        swapMade = false;
        sortLimit--;
    }

    if (!sorted) {
        bubblesort();
    }

    for (i = 0; i < sortSet.length; i++) {
        //normalise
        var h = height / sortSetLength * sortSet[i];
        if (i == swapPoint && !sorted) {
            fill(0, 0, 255);
        } else if (sorted) {
            fill(0, 255, 0);
        } else {
            fill(255);
        }
        rect(x * i, height - h, x, h);
    }
}

function bubblesort() {
    var j = swapPoint;
    var k = swapPoint + 1;
    if (sortSet[j] > sortSet[k]) {
        var temp = sortSet[k]
        sortSet[k] = sortSet[j];
        sortSet[j] = temp;
        swapMade = true;
        if (chk_sound.checked()) {
            highTone.play();
        }
    }
    swapPoint++;

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
