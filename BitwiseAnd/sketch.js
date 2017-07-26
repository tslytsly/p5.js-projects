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
    //main function
    portCheck(bitmask);

}

function portCheck(msk) {
    //split the provided bitmask into substrings of 8 char
    mask = msk.match(/.{1,8}/g);

    // this will loop through all the masks, there will be
    // 16 in total, every 2 is one switch, total of 8 possible
    // in a single stack

    for (i = 0; i < mask.length; i++) {
        console.log("Start of Loop No. " + i);
        // convert from string to hex num
        mask[i] = "0x" + mask[i];
        console.log("Mask " + i + " is " + mask[i]);

        //check them against the port array
        // this is doing a bitand to every possible port
        for (j = 0; j < 32; j++) {
            resultArr[j + idx] = ((portArr[j + idx] & mask[i]) !== 0);
        }
        // idx keeps track of where we are up to
        idx += 32;
        console.log("idx= " + idx);

        console.log("End of Loop No. " + i);
    }


    // once we have checked all switches we need to report the state for each port
    for (i = 1; i < resultArr.length; i++) {
        console.log("Port " + i + " is in VLAN = " + resultArr[i]);
    }
}
