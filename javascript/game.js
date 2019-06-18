// $(document).ready(function() {

var wins = 0;
var losses = 0;
var counter = 0;

var button1 = $("#random-button1");
var button2 = $("#random-button2");
var button3 = $("#random-button3");
var button4 =$("#random-button4");

var randomNum = function(min, max) {
    return Math.floor(Math.random() * (120 - 19 + 1)) + min;
  };


var matchScore = $("#match-score");
matchScore.text(randomNum);

var scoreBoard = $("#scoreboard");
scoreBoard.text("wins: " + wins);

var lossesDiv = $("<div>");
lossesDiv.text("losses: " + losses);
scoreBoard.append(lossesDiv);


// });