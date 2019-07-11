var Letter = require("./letter");

// Word Object
// {
//    letters : [
// {
//     letter: "b",
//     guessed: false,
//     placeholder(): "b" or " _ ",
//     beenGuessed(): return true or false
// },
// {
//     letter: "o",
//     guessed: false,
//     placeholder(): "o" or " _ ",
//     beenGuessed(): return true or false
// },
// {
//     letter: "o",
//     guessed: false,
//     placeholder(): "o" or " _ ",
//     beenGuessed(): return true or false
// },
// {
//     letter: "k",
//     guessed: false,
//     placeholder(): "k" or " _ ",
//     beenGuessed(): return true or false
// }
//     ],
//  wordString() : return char or " _ ",
//  guess() : return true or false
// }

var Word = function (str) {
    this.letters = [],
        this.str = str,
        this.output = "";
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
        this.guess = function (char) {
            for (var k = 0; k < this.letters.length; k++) {
                var letterObj = this.letters[k];
                letterObj.beenGuessed(char);
            };
        }
    this.buildArray = function (str) {
        for (var j = 0; j < str.length; j++) {
            var obj = new Letter(str.charAt(j));
            this.letters.push(obj);
        }
    }
};

// var newWord = new Word("book");
// console.log(newWord);
// console.log(newWord.letters);
// console.log(newWord.str);
// console.log(newWord.output);
// console.log(newWord.wordString());
// console.log(newWord.guess("b"));
// console.log(newWord.buildArray(newWord.str));
// console.log(newWord.letters);

module.exports = Word;