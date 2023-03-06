today = new Date();
document.getElementById("bgsound").play();

// This part was supposed to be copyed from GitHub, but it didn't work
// So this is gonna be actually made by me

// One eternity later...

// Ok fine this function is a little bit modded mozilla example 
function getRandomInt(max) {
    console.log("Generating a random number...");
    console.trace();
    return Math.floor(Math.random() * max)
};
// And this one I copied from some random sketchy "bobyhadz" website
function padWithLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
}

// All this is made by me tho

let oemDay;
function genOemDate() {
    console.log("Generating OEM date...");
    return((padWithLeadingZeros(((getRandomInt(365) + 1).toString()), 3)) + (((getRandomInt(8) + 1995).toString())).slice(-2))
};
let siteProto
function genRetailSite() {
    while (true) {
        console.log("Trying to generate Retail site...");
        siteProto = getRandomInt(998) + 1;
        if (!([000, 111, 222, 333, 444, 555, 666, 777, 888, 999].includes(siteProto))) {
            return padWithLeadingZeros(siteProto.toString(), 3)
        }
    }
};
let mainKey;
function genMainKey() {
    while (true) {
        console.log("Trying to generate main key...");
        mainKey = padWithLeadingZeros(((7 * getRandomInt(142857)).toString()), 7);
        if ((!(mainKey.toString().slice(-1) > 7)) || (mainKey.toString().slice(-1) == 0)) {
            console.log("Main key success!");
            return mainKey
        }
    }
};
let outputHTML
function buttonPressed() {
    if (document.getElementById("retail").checked) {
        console.log("Generating Retail key...");
        outputHTML = document.getElementById("text").innerHTML + "\n" + genRetailSite() + "-" + genMainKey()
        console.log("Retail key success! \n" + outputHTML)
        document.getElementById("text").innerHTML = outputHTML
    } else {
        console.log("Generating OEM key...");
        outputHTML = document.getElementById("text").innerHTML + "\n" + genOemDate() + "-OEM-" + genMainKey() + "-" + getRandomInt(99999)
        console.log("OEM key success! \n" + outputHTML)
        document.getElementById("text").innerHTML = outputHTML
    }
};

document.getElementById("text").innerHTML = `
KEYGEN
<input type="radio" name="type" value="Retail" id="retail" checked="true"/><label for="Retail">Retail</label>
<input type="radio" name="type" value="OEM" id="oem"/><label for="OEM">OEM</label>
<button type="button" id="button" onClick="buttonPressed();">
GEN KEY
</button>

`;


