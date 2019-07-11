var guess = process.argv[2];

// Letter Object
// {
//     letter: "b",
//     guessed: false,
//     placeholder(): "b" or " _ ",
//     beenGuessed(): return true or false
// }

var Letter = function (char) {
    this.letter = char,
    this.guessed = false,
    this.placeholder = function(char) {
        if (this.guessed) {
            return this.letter;
        } else {
            return "_";
        };
    },
    this.beenGuessed = function (char) {
        if (char === this.letter) {
            this.guessed = true;
        };
    }
};

// var letter = new Letter("x");
// console.log(letter);
// console.log(letter.letter);
// console.log(letter.guessed);
// console.log(letter.placeholder());
// console.log(letter.beenGuessed("x"));
// console.log(letter.placeholder());


module.exports = Letter;