var inquirer = require("inquirer");
var Word = require("./word");

var roundWord = new Word("book");
roundWord.buildArray("book");
console.log(roundWord.wordString());

askForALetter();

function askForALetter() {
    inquirer.prompt([{
        type: "input",
        name: "letter",
        message: "Please guess a letter."
    }]).then(answer => {
        roundWord.guess(answer.letter);
        console.log(roundWord.wordString())
        if (roundWord.wordString().includes("_")) {
            askForALetter();
        } else {
            console.log("You win!");
        }
    })
};