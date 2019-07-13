var inquirer = require("inquirer");
var Word = require("./word");

var availableWords = ["Cowboy Bepop", "Trigun", "Dragonball Z", "One Piece", "Soul Eater", "Bleach", "Fullmetal Alchemist", "Samurai Champloo", "Death Note", "Psycho Pass", "Sword Art Online", "Pokemon", "Mobile Suit Gundam", "Digimon", "Attack on Titan", "Mushi Shi", "One Punch Man", "Naruto", "Sailor Moon"];
var newWordObj;
var guesses = 7;

// Starts the initial game upon program execution.
generateWord();
askForALetter();

function askForALetter() {
    inquirer.prompt([{
        type: "input",
        name: "letter",
        message: "Please guess a letter.",
        validate: function (value) {
            // Used to validate that the user only inputs a letter character and only one.
            var pass = value.match(/^[a-z]$/);
            if (pass) {
                return true;
            };
            return "Please enter only one letter.";
        }
    }]).then(answer => {
        newWordObj.guess(answer.letter);
        // If the letters is found in the word and display "Correct" and the correct letter
        // Otherwise, "incorrect is displayed" and the number of remaining guesses goes down.
        if (newWordObj.str.includes(answer.letter)) {
            console.log("\nCORRECT!");
            console.log("\n" + newWordObj.wordString() + "\n");
            // If there are still empty spaces, the user will be prompted for another letter.
            // Otherwise, the user wins if there are no more blanks.
            if (newWordObj.wordString().includes("_")) {
                askForALetter();
            } else {
                console.log("You win!\n");
                playAgain();
            }
        } else {
            guesses--;
            console.log("\nincorrect ...");
            console.log("\n" + newWordObj.wordString() + "\n");
            console.log("You have " + guesses + " guesses remaining.\n");
            // If the user has no more guesses remaining, the user will be prompted to start another game.
            // Otherwise, for an incorrect guess, the user will be asked to guess another letter.
            if (guesses === 0) {
                console.log("Sorry. You lose.\n");
                playAgain();
            } else {
                askForALetter();
            };
        };
    });
};

// Function used to generated the random word to be used and populate the Word.letters array with Letter objects.
function generateWord() {
    randomWord = availableWords[Math.floor(Math.random() * availableWords.length)].toLowerCase();
    newWordObj = new Word(randomWord)
    newWordObj.buildArray(randomWord);
    console.log("\n" + newWordObj.wordString() + "\n");
};

// Function used to prompt the user if they would like to play another game.
// If so, another random word is selects and the Word/Letters objects built-out.
// Otherwise, the program will exit.
function playAgain() {
    inquirer.prompt([{
        type: "confirm",
        name: "playAgain",
        message: "Would you like to play again?",
        default: true
    }]).then(answer => {
        if (answer.playAgain) {
            guesses = 7;
            generateWord();
            askForALetter();
        };
    });
};