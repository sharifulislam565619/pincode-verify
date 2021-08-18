// get pin:
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinToString = pin + "";
    if (pinToString.length == 4) {
        return pin;
    } else {
        return getPin()
    }
}

// generate pin
function generatePin() {
    document.getElementById("get-pin").value = getPin()
}

// keypad:
document.getElementById("keypad").addEventListener("click", function (event) {
    const keyNumber = event.target.innerText;
    const displayKey = document.getElementById("display-key");
    const displayKeyValue = displayKey.value;
    const displayKeyValueToString=displayKeyValue+"";

    if (isNaN(keyNumber)) {
        if (keyNumber == "C") {
            displayKey.value = "";
        } else if (keyNumber == "<") {
            displayKey.value=displayKey.value.slice(0,-1)
        }
    } else {
        displayKey.value = displayKeyValue + keyNumber
    }

})

// submit button:
document.getElementById("submit-button").addEventListener("click", function () {

    const pinCode = document.getElementById("get-pin").value;
    const displayingNumbers = document.getElementById("display-key").value;
    if (pinCode == displayingNumbers) {
        document.getElementById("notify-fail").style.display = "none"
        document.getElementById("notify-success").style.display = "block"
    } else {
        document.getElementById("notify-success").style.display = "none"
        document.getElementById("notify-fail").style.display = "block"
    }

})