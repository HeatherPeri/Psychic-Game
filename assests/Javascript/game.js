

    var wins = 0;
    var Loses = 0;
    var GuessLeft = 0;
    var guessFar = 0;
    var guessesmade =[];

 var letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]

    var directionsText = document.getElementById("directions");
    var winsText = document.getElementById("wins");
    var losesText = document.getElementById("loses");
    var guessesleftText = document.getElementById("guessesleft");
    var userguessesText = document.getElementById("userguesses");

    function reset() {
        guessesLeft = 15;
        soFar = 0
        guessesMade = [];
    }
    // var computerGuess = letters 
 document.onkeyup = function(event) {
    var guess = event.key;
    var ourguess = ourguess[Math.floor(Math.random() * letters.length)];
 }

 if (guessesmade === ourguess)
    wins++;




    

