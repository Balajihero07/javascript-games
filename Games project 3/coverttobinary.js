function stringToBinary(inputString) {
    let binaryString = "";
    for (let i = 0; i < inputString.length; i++) {
        let binaryChar = inputString.charCodeAt(i).toString(2).padStart(8, '0');
        binaryString += binaryChar;
    }
    return binaryString;
}

function convertTo() {
    let inputString = document.getElementById("userstring").value;
    let binaryResult = stringToBinary(inputString);
    document.getElementById("result").innerHTML = binaryResult;
}

  