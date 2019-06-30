// var guess = process.argv[2];

function Letter(letter) {
    this.letter = letter,
    this.guessed = false,
    this.placeholder = function() {
        for (var i = 0; i < 1; i++) {
            if (letter === "x") {
                return "x";
            } else {
                return " _ ";
            };
        };
    },
    this.beenGuessed = function(letter) {
        if (letter === this.letter) {
            this.guessed = true;
        };
    }
};

// var letter = new Letter(guess);

// console.log(letter);
// console.log(letter.placeholder());
// console.log(letter.beenGuessed());
// console.log(letter.guessed);
