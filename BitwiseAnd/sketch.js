var bitmask = "7FFFF1FFFFFFE0007FFFFFFFE7FFE0007FFFFFFFFFFFE0007FFFFFE0000000000000000000000000000000000000000000000000000000000000000000000000";
var portArr = [];
var resultArr = [];
var portExp = 31;
var idx = 0;
var mask;


function setup() {
    console.log("Go...");
    noLoop();
    noCanvas();

    //set portArr with mask for each possible switch port
    for (i = 0; i < 32; i++) {
        portArr[i] = pow(2, portExp);
        portExp = portExp - 1;
    }

    portCheck(bitmask);

}

function portCheck(msk) {
    //split into substrings of 8 char
    mask = msk.match(/.{1,8}/g);
    //convert them to a hex
    for (i = 0; i < mask.length; i++) {
        console.log("Start of Loop No. " + i);
        mask[i] = "0x" + mask[i];
        console.log("Mask " + i + " is " + mask[i]);

        //check them against the port array
        for (j = 0; j < 32; j++) {
            resultArr[j + idx] = ((portArr[j + idx] & mask[i]) !== 0);
        }


        idx += 32;
        console.log("idx= " + idx);

        console.log("End of Loop No. " + i);
    }
    for (i = 1; i < resultArr.length; i++) {
        console.log("Port " + i + " is in VLAN = " + resultArr[i]);
    }
}
