// Function to generate a random alphabet index
function randomAlp() {
    return Math.floor(Math.random() * 26);
}

// Function to handle the game logic on button click
function onClickPlay() {
    const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const targetIndex = randomAlp();
    const target = alphabets[targetIndex];

    let userGuessing;
    let attempts = 1;
    const maxAttempts = 7;
    userGuessing = document.getElementById("useralp")
    
    while (attempts <= maxAttempts) {
        if (userGuessing === null) {
            // Handle the case where the user presses cancel
            document.getElementById("result").innerHTML = "Game canceled by user.";
            return;
        }

        if (userGuessing == target) {
            document.getElementById("result").innerHTML = `Congratulations! You guessed the correct letter ${target}.`;
            return;
        } else {
            alert(`Try Again! You have ${maxAttempts - attempts} chance(s) left.\nyuo guess the letter A - ${alphabets[targetIndex+1]}`);
            attempts++;
        }
        userGuessing=prompt(`attemplts ${attempts}:Enter the letter`).toUpperCase();
    }

    document.getElementById("result").innerHTML = `Sorry, you've run out of attempts. The correct letter was ${target}.`;
}
   