//goal of the game is to click on the crystals to match the
//computers randomly generated number.

//create variable for computer's random guess between 19 and 120.
//Math.floor(Math.random() * ((y-x)+1) + x); where x is start number and y is end number.
var computerGuess = $("#computer-guess");//query html for computer guess id
var assignComputerGuess = function () {
    computerGuess = Math.floor(Math.random() * ((120 - 19) + 1) + 1);
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
    totalScore = 0;
    assignComputerGuess();
    assignCanaryCrystal();
    assignEmeraldCrystal();
    assignRubyCrystal();
    assignSapphireCrystal();
}

var totalScore = 0;
function newTotalScore(value){
    $("#total-score").text("Total Score: " + totalScore);
    console.log(totalScore);
}

newTotalScore();
console.log(newTotalScore);

//create variables for crystals' random value. 
//Crystal Value should not be displayed. 
//Value should be 1-12;
//Need click event to add crystal value to total score: 4 click events?

$("#green-button").on("click", function(){
    var emeraldCrystal = $("#green-button");
    var assignEmeraldCrystal = function () {
        emeraldCrystal = Math.floor(Math.random() * 12) + 1;
    }
    assignEmeraldCrystal();
    console.log(emeraldCrystal);
});

/*
$("#ruby-button").on("click", function(){
    var rubyCrystal = $("#ruby-button");
    var assignRubyCrystal = function () {
        rubyCrystal = Math.floor(Math.random() * 12) + 1;
    }
    assignRubyCrystal();
    console.log(rubyCrystal);
});

$("#yellow-button").on("click", function(){
    var canaryCrystal = $("#yellow-button");
var assignCanaryCrystal = function () {
    canaryCrystal = Math.floor(Math.random() * 12) + 1;
}
assignCanaryCrystal();
console.log(canaryCrystal);
});

$("#blue-button").on("click", function(){
    var sapphireCrystal = $("#blue-button");
    var assignSapphireCrystal = function () {
        sapphireCrystal = Math.floor(Math.random() * 12) + 1;
    }
    assignSapphireCrystal();
    console.log(sapphireCrystal);
});


//create variable for total score: 
//total score should be an accumulation of points from the crystals clicks

/*function score(){
    var totalScore = 0;
    var newTotalScore =  //this is wrong
    $("#total-score").text("Total Score:  " + newTotalScore); // this is correct because I need to display
    console.log(totalScore);
   
    if (newTotalScore === computersGuess){
        wins++;
        gameReset();
        alert("You Win!");
    }
    
    if (newTotalScore > computerGuess) {
    
    losses++;
    gameReset();
    alert("You Lose...Try Again!");
}
);}*/

