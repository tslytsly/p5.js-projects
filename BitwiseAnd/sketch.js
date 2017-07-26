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
        mask[i] = "0x" + mask[i];
        console.log("Mask " + i + " is " + mask[i]);

        //check them against the port array
        console.log("chkArray run number " + i);
        chkArray(mask[i], 32, idx);
        idx += 32;
        console.log("idx= " + idx);


        for (i = 1; i < resultArr.length; i++) {
            console.log("Port " + i + " is in VLAN = " + resultArr[i]);
        }
    }
}

function chkArray(snmpBitMask, maskLength, startIndx) {
    console.log("snmpBitMask " + snmpBitMask);
    console.log("maskLength " + maskLength);
    console.log("startIndx " + startIndx);
    for (i = 0; i < maskLength; i++) {
        console.log(i + startIndx);
        resultArr[i + startIndx] = ((portArr[i + startIndx] & snmpBitMask) != 0);
    }
}
