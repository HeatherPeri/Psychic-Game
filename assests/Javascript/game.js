

    var wins = 0;
    var loses = 0;
    var guessesLeft = 0;
    var soFar = 0;
    var guessesmade =[];

 var letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", 
 "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

    var directionsText = document.getElementById("directions");
    var winsText = document.getElementById("wins");
    var losesText = document.getElementById("loses");
    var guessesleftText = document.getElementById("guessesleft");
    var guessesmadeText = document.getElementById("userguesses");

    function reset() {
        guessesleft = 15;
        soFar = 0;
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
    else{
        loses++;
        console.log(loses +"you lost")
    
 

 winsText.textContent = "You Won: " + wins;
 losesText.textContent = "You Lost" + loses;
 guessesleftText.textContent = "Guesses Left:" + guessesLeft;
 guessesmadeText.textContent = "losses: " + loses;
    }
 };


    

