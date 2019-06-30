var inquirer = require("inquirer");

// var guessedLetter = "";
var guessedLetters = [];

inquirer.prompt([{
    type: "input",
    name: "letter",
    message: "Please guess a letter."
}]).then(answer => {
    guessedLetters.push(answer.letter);
    var letter = new Letter(answer.letter);
    letter.placeholder();
})

function Letter(str) {
    this.letter = str,
    this.guessed = false,
    this.placeholder = function() {
        for (var i = 0; i < guessedLetters.length; i++) {
            if (str === guessedLetters[i]) {
                return guessedLetters[i];
            } else {
                return " _ ";
            };
        };
    },
    this.beenGuessed = function(str) {
        if (str) {
            this.guessed = true;
        };
    }
};