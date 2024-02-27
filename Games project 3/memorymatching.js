const symbols = [
    'image1.WEBP',
    'image2.WEBP',
    'image3.PNG',
    'image4.jpg',
    'image5.jpeg',
    'image6.PNG',
    'image7.jpeg',
    'image8.WEBP'
];

let shuffledSymbols = [];
let flippedCards = [];
let matchedPairs = 0;

// Function to shuffle the symbols
function shuffleSymbols() {
    shuffledSymbols = symbols.concat(symbols).sort(() => Math.random() - 0.5);
}

// Function to create the game board
function createBoard() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';

    shuffleSymbols();

    for (let i = 0; i < shuffledSymbols.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-index', i);
        card.innerHTML = `<img src="questionmark.jpg" alt="Card" style="width: 100%; height: 100%;">`;
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    }
}

// Function to handle card flipping
function flipCard() {
    const index = this.getAttribute('data-index');
    
    if (!flippedCards.includes(index) && flippedCards.length < 2) {
        this.innerHTML = `<img src="${shuffledSymbols[index]}" alt="Card" style="width: 100%; height: 100%;">`;
        flippedCards.push(index);

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

// Function to check if the flipped cards match
function checkMatch() {
    const [index1, index2] = flippedCards;
    const card1 = document.querySelector(`[data-index="${index1}"]`);
    const card2 = document.querySelector(`[data-index="${index2}"]`);

    if (shuffledSymbols[index1] === shuffledSymbols[index2]) {
        card1.removeEventListener('click', flipCard);
        card2.removeEventListener('click', flipCard);
        matchedPairs++;

        if (matchedPairs === symbols.length) {
            document.getElementById('result').textContent = 'Congratulations! You won!';
        }
    } else {
        card1.innerHTML = `<img src="questionmark.jpg" alt="Card" style="width: 100%; height: 100%;">`;
        card2.innerHTML = `<img src="questionmark.jpg" alt="Card" style="width: 100%; height: 100%;">`;
    }

    flippedCards = [];
}

// Initialize the game
createBoard();