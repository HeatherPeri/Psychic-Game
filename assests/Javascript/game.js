

    var wins = 0;
    var loses = 0;
    var guessesleft = 0;
    var sofar = 0;
    var guessesmade =[];

 var letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", 
 "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

    var directionsText = document.getElementById("directions-text");
    var winsText = document.getElementById("wins-text");
    var guessesleftText = document.getElementById("guessesleft-text");
    var guessesmadeText = document.getElementById("userguesses-text");
    var losesText = document.getElementById("loses-text");

    function reset() {
        guessesleft = 15;
        sofar = 0;
        guessesmade = [];
    }
    // var computerGuess = letters 
    // console.log(computerGuess + "computerGuess")
 document.onkeyup = function(event) {
    var guess = event.key;
    console.log(guess + "userguess")
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];
     console.log(computerGuess + "computerGuess")


    if (guess === computerGuess){
        wins++;
        console.log(wins +"you won")
    }
    if else{
        loses++;
        console.log(loses +"you lost")
    }
 

 winsText.textContent = wins;
 losesText.textContent = loses;
 guessesleftText.textContent = guessesLeft;
 guessesmadeText.textContent = guessesmade;

 };


    

