var inquirer = require("inquirer");

var newWord = new Word("doggy");




inquirer.prompt([{
    type: "input",
    name: "letter",
    message: "Please guess a letter."
}]).then(answer => {
    console.log(answer.letter);
})