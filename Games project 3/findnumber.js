function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playNumberGuessingGame() {
    const minNumber = 1;
    const maxNumber = 100;
    const targetNumber = generateRandomNumber(minNumber, maxNumber);
    const maxAttempts = 7;
    let usernum =document.getElementById("num").value;

    for (let attempts = 1; attempts <= maxAttempts; attempts++) {
        if (isNaN(usernum)) {
            alert("Invalid input. Please enter a valid number.");
            return;
        }

        if (usernum === targetNumber) {
            alert(`Congratulations!! You guessed the correct number ${targetNumber} in ${attempts} attempt(s).`);
            return;
        } else if (usernum < targetNumber) {
            alert(`Guess a higher value ${(usernum)}-100. Remaining attempts: ${maxAttempts - attempts}`);
        } else if (usernum > targetNumber) {
            alert(`Guess a lower value 1 - ${usernum-1}. Remaining attempts: ${maxAttempts - attempts}`);
        }
        usernum=Number(prompt(` ${attempts}Try Again`))
    }

    alert(`Sorry, you've run out of attempts. The correct number was ${targetNumber}.`);
}
