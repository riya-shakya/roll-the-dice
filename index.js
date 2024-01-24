// ----- required DOM Elements ---------
const rollBtn = document.getElementById('rollBtn');
const resultBox = document.getElementById('resultBox');
const diceImg1 = document.getElementById('diceImage1');
const diceImg2 = document.getElementById('diceImage2');
const numberSpan1 = document.getElementById('numberSpan1');
const numberSpan2 = document.getElementById('numberSpan2');

// ---- FUNCTIONS -----
//------ Random Number generation between 1-6 (dice roll numbers) -----
const randomDiceRoll = () => Math.floor(Math.random() * 5 + 1) //function of generating random numbers between the given range

// ------ game logic for the result ------
function calculateResult(player1, player2){
    if(player1 === player2) return (`It's a tie!`);
    return player1 > player2 ? `Player 1 wins` : `Player 2 wins`;
    }

// ----- updates the UI after the Rolling of the Dice -----
function updateRolledUI(rolledNumber, diceImg, numberSpan){
    diceImg.src = `./images/${rolledNumber}.jpg`;
    numberSpan.textContent = rolledNumber;
}

// ------ updating UI for Result ------
function updateResult(player1, player2){
    resultBox.classList.remove('hidden')
    
    resultBox.firstElementChild.textContent = calculateResult(player1, player2);
}


// ------------ FUNCTIONALITY -------
rollBtn.addEventListener("click", () => {
    // variable definitions 
    const player1 = randomDiceRoll(); //stores player 1's Dice Roll number
    const player2 = randomDiceRoll(); //stores player 2's Dice Roll number

    //updating UI for rolled numbers
    updateRolledUI(player1, diceImg1, numberSpan1);
    updateRolledUI(player2, diceImg2, numberSpan2);

    //updating Result for the game
    updateResult(player1, player2);
});
