function Word() {
    this.letters = [new Letter()];
    this.wordString = function() {
        return letters.placeholder();
    },
    this.guess = function(arg) {
        letters.beenGuessed(arg);
    }
};