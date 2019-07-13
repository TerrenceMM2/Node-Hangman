var Letter = function (char) {
    this.letter = char,
    this.guessed = false,
    // Function to return blanks (" _ ") or the letter if "guessed" key value is true.
    this.placeholder = function(char) {
        if (char === " ") {
            return this.letter
        };
        if (this.guessed) {
            return this.letter;
        } else {
            return "_";
        };
    },
    // Function to change Letter object "guessed" key value from false to true.
    this.beenGuessed = function (char) {
        if (char === this.letter) {
            this.guessed = true;
        };
    }
};

module.exports = Letter;