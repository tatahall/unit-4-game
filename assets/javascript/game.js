//goal of the game is to click on the crystals to match the
//computers randomly generated number.

//create variable for computer's random guess between 19 and 120.
//Math.floor(Math.random() * ((y-x)+1) + x); where x is start number and y is end number.
var computerGuess = $("#computer-guess");//query html for computer guess id
var minNumber = 19;
var maxNumber = 120
var assignComputerGuess = function () {
    computerGuess = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
    $("#computer-guess").text("Computer's Guess:  " + computerGuess);
}
assignComputerGuess();
console.log(assignComputerGuess);
console.log(computerGuess);

//create variables wins and losses
var wins = 0;
$("#wins").text("Wins:  " + wins);
console.log(wins);

var losses = 0;
$("#losses").text("Losses:  " + losses);
console.log(losses);

//create variable/function for game reset:
//total score reset to 0;
//new computer guess generated;
//new crystal values/guesses generated;
var gameReset = function () {
    totalScoreCounter = 0;
    $("#total-score").text("Total Score: " + totalScoreCounter);
    assignComputerGuess();
}

//create variable for #total-score
var totalScoreCounter = 0;
$("#total-score").text("Total Score: " + totalScoreCounter);

function winsandlosses(){
    if (totalScoreCounter === computerGuess) {
        wins++;
        $("#wins").text("Wins:  " + wins);
        gameReset();
        alert("You Win!");
    }
    
    else if (totalScoreCounter > computerGuess) {
        losses++;
        $("#losses").text("Losses: " + losses);
        gameReset();
        alert("You Lose...Try Again!");
    }
}

//create variables for crystals' random value. 
//Crystal Value should not be displayed. 
//Value should be 1-12;
//Need click event to add crystal value to total score: 4 click events?
//create variable for total score: 
//total score should be an accumulation of points from the crystals clicks

$("#green-button").on("click", function () {
    var emeraldCrystal = $("#green-button");
    var assignEmeraldCrystal = function () {
        emeraldCrystal = Math.floor(Math.random() * 12) + 1;
    }
    assignEmeraldCrystal();
    console.log(emeraldCrystal);
    var newTotalScoreCounter = totalScoreCounter += emeraldCrystal;
    $("#total-score").text("Total Score: " + newTotalScoreCounter);
    console.log(newTotalScoreCounter);
    winsandlosses();
});

$("#ruby-button").on("click", function () {
    var rubyCrystal = $("#ruby-button");
    var assignRubyCrystal = function () {
        rubyCrystal = Math.floor(Math.random() * 12) + 1;
    }
    assignRubyCrystal();
    console.log(rubyCrystal);
    var newTotalScoreCounter = totalScoreCounter += rubyCrystal;
    $("#total-score").text("Total Score: " + newTotalScoreCounter);
    console.log(newTotalScoreCounter);
    winsandlosses();
});

$("#yellow-button").on("click", function () {
    var canaryCrystal = $("#yellow-button");
    var assignCanaryCrystal = function () {
        canaryCrystal = Math.floor(Math.random() * 12) + 1;
    }
    assignCanaryCrystal();
    console.log(canaryCrystal);
    var newTotalScoreCounter = totalScoreCounter += canaryCrystal;
    $("#total-score").text("Total Score: " + newTotalScoreCounter);
    console.log(newTotalScoreCounter);
    winsandlosses();
    
});

$("#blue-button").on("click", function () {
    var sapphireCrystal = $("#blue-button");
    var assignSapphireCrystal = function () {
        sapphireCrystal = Math.floor(Math.random() * 12) + 1;
    }
    assignSapphireCrystal();
    console.log(sapphireCrystal);
    var newTotalScoreCounter = totalScoreCounter += sapphireCrystal;
    $("#total-score").text("Total Score: " + newTotalScoreCounter);
    console.log(newTotalScoreCounter);
   winsandlosses();
});




