var Letter = require("./letter");

var Word = function (str) {
    this.letters = [],
    this.str = str,
    this.output = "";
    // Function to build to word string
    this.wordString = function () {
        this.output = "";
        for (var i = 0; i < this.letters.length; i++) {
            var letterObj = this.letters[i];
            var letter = letterObj.letter;
            var blank = letterObj.placeholder(letter) + " ";
            this.output = this.output.concat(blank);
        }
        return this.output;
    },
    // Function that will go through all letter objects and evaluate if the letter has been guessed
    this.guess = function (char) {
        for (var k = 0; k < this.letters.length; k++) {
            var letterObj = this.letters[k];
            letterObj.beenGuessed(char);
        };
    }
    // Function to build out the letters array with letter objects using the Letters constructor
    this.buildArray = function (str) {
        for (var j = 0; j < str.length; j++) {
            var obj = new Letter(str.charAt(j));
            this.letters.push(obj);
        }
    }
};

module.exports = Word;