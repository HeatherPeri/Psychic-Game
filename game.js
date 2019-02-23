<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>The Psychic Game</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="main.js"></script>
</head>
<body>

    <div>
        <p id="directions"> Press any letter to begin!</p>
        <p id="wins"></p>
        <p id="loses"></p>
        <p id="guessesleft"></p>
        <p id="userguesses"></p>

    </div>

    <script type="text/javascript">

    var wins = 0;
    var Loses = 0;
    var GuessLeft = 0;
    var guessFar = 0;

 var letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]

    var directionsText = document.getElementById("directions");
    var winsText = document.getElementById("wins");
    var losesText = document.getElementById("loses");
    var guessesleftText = document.getElementById("guessesleft");
    var userguessesText = document.getElementById("userguesses");

    var computerGuess = letters 
 document.onkeyup = function(event) {
    var guess = event.key;
    var ourguess = ourguess
 }




    </script>
</body>
</html>