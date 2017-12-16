var guessesLeft = 10;
var guessesSoFar = 0;
var wins = 0;
var losses = 0;

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u',
                'v', 'w', 'x', 'y', 'z'];

var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
// console.log(randomLetter);

window.onload = function() {
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + String(guessesLeft);
    document.getElementById("guessesSoFar").innerHTML = "Guesses So Far: " + String(guessesSoFar);
    document.getElementById("wins").innerHTML = "Wins: " + String(wins);
    document.getElementById("losses").innerHTML = "Losses: " + String(losses);
}

function logKey(event) {
    var guess = event.key;
    checkValue(guess);

    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + String(guessesLeft);
    document.getElementById("guessesSoFar").innerHTML = "Guesses So Far: " + String(guessesSoFar);
    document.getElementById("wins").innerHTML = "Wins: " + String(wins);
    document.getElementById("losses").innerHTML = "Losses: " + String(losses);
}

function checkValue(guess) {
    if (guess === randomLetter) {
        alert("You win!");
        guessesLeft = 10;
        guessesSoFar = 0;
        wins += 1;
        document.getElementById("enterGuess").value = "";
        randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        // console.log(randomLetter);
    } else if (guessesLeft === 1) {
        alert("You lose!")
        guessesLeft = 10;
        guessesSoFar = 0;
        losses += 1;
        document.getElementById("enterGuess").value = "";
        randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        // console.log(randomLetter);
    } else {
        guessesLeft -= 1;
        guessesSoFar += 1;
    }
}