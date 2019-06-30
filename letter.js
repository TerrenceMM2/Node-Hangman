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