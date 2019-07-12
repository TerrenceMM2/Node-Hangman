var inquirer = require("inquirer");
var Word = require("./word");

var availableWords = ["Cowboy Bepop", "Trigun", "Dragonball Z", "One Piece", "Soul Eater", "Bleach", "Fullmetal Alchemist", "Samurai Champloo", "Death Note", "Psycho Pass", "Sword Art Online", "Pokemon", "Mobile Suit Gundam", "Digimon", "Attack on Titan", "Mushi Shi", "One Punch Man", "Naruto", "Sailor Moon"];
var newWordObj;
var guesses = 7;

generateWord();
askForALetter();

function askForALetter() {
    inquirer.prompt([{
        type: "input",
        name: "letter",
        message: "Please guess a letter.",
        validate: function (value) {
            var pass = value.match(/^[a-z]$/);
            if (pass) {
                return true;
            };
            return "Please enter only one letter.";
        }
    }]).then(answer => {
        newWordObj.guess(answer.letter);
        if (newWordObj.str.includes(answer.letter)) {
            console.log("\nCORRECT!");
            console.log("\n" + newWordObj.wordString() + "\n");
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
            console.log("You have " + guesses + " guesses remaining.\n")
            if (guesses === 0) {
                playAgain();
            } else {
                askForALetter();
            };
        };
    });
};

function generateWord() {
    randomWord = availableWords[Math.floor(Math.random() * availableWords.length)].toLowerCase();
    newWordObj = new Word(randomWord)
    newWordObj.buildArray(randomWord);
    console.log("\n" + newWordObj.wordString() + "\n");
};

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