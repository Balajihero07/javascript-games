function binaryToString(binaryString) {
    let stringResult = "";
    for (let i = 0; i < binaryString.length; i += 8) {
        let binaryChar = binaryString.substr(i, 8);
        let decimalValue = parseInt(binaryChar, 2);
        stringResult += String.fromCharCode(decimalValue);
    }
    return stringResult;
}

// Example usage
function BinaryTo() {
    let binaryInput = document.getElementById('binarydigit').value;
    let stringResult = binaryToString(binaryInput);
    document.getElementById("result").innerHTML = stringResult;
}
