

    var wins = 0;
    var loses = 0;
    var guessesleft = 0;
    var sofar = 0;
    var guessesmade =[];

 var letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", 
 "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

    var directionsText = document.getElementById("directions");
    var winsText = document.getElementById("wins");
    var guessesleftText = document.getElementById("guessesleft");
    var guessesmadeText = document.getElementById("userguesses");
    var losesText = document.getElementById("loses");

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
    else{
        loses++;
        console.log(loses +"you lost")
    }
 
console.log(winsText)
 winsText.textContent = ("wins:" + wins);
 losesText.textContent = ("Loses:" + loses);
 guessesleftText.textContent = ("Guesses Left:" + guessesleft);
 guessesmadeText.textContent = ("Guesses Made:" + guess);

 };


    

