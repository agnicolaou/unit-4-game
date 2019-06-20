$(document).ready(function () {

  // game vars
  var wins = 0;
  var losses = 0;
  var counter = 0;
  var gamesPlayed = wins + losses + 1;

  // jquery references
  var button1 = $("#random-button1");
  var button2 = $("#random-button2");
  var button3 = $("#random-button3");
  var button4 = $("#random-button4");

  // randomized nums
  var targetNum = Math.floor(Math.random() * 102) + 19
  var crystal1 = Math.floor(Math.random() * 12) + 1
  var crystal2 = Math.floor(Math.random() * 12) + 1
  var crystal3 = Math.floor(Math.random() * 12) + 1
  var crystal4 = Math.floor(Math.random() * 12) + 1

  var reset = function () {
    gamesPlayed++
    targetNum = Math.floor(Math.random() * 102) + 19
    crystal1 = Math.floor(Math.random() * 12) + 1
    crystal2 = Math.floor(Math.random() * 12) + 1
    crystal3 = Math.floor(Math.random() * 12) + 1
    crystal4 = Math.floor(Math.random() * 12) + 1
    counter = 0;
    console.log("TargetNum: " + targetNum)
  }

  var displayTargetNum = function () {
    $("#match-score").text(targetNum)
  }

  var displayCounter = function () {
    $("#counter").text(counter)
  }

  var displayScoreboard = function () {
    $("#wins").text("Wins: " + wins)
    $("#losses").text("Losses: " + losses)
    $("#rounds").text("Rounds: " + gamesPlayed)
  }

  console.log("Target Num: " + targetNum)

  displayTargetNum();

  // user input
  $(document).on("click", function (event) {

    // div clicked
    var divClicked = event.target.id

    // add val$( to counter
    if (divClicked === "random-button1") {
      counter = counter + crystal1
      displayCounter()
    }
    else if (divClicked === "random-button2") {
      counter = counter + crystal2
      displayCounter()
    }
    else if (divClicked === "random-button3") {
      counter = counter + crystal3
      displayCounter()
    }
    else if (divClicked === "random-button4") {
      counter = counter + crystal4
      displayCounter()
    }

    console.log("Counter: " + counter)

    if (counter === targetNum) {
      wins++
      displayScoreboard();
      console.log("WIN")
      reset();
      displayTargetNum();
    }

    else if (counter > targetNum) {
      losses++
      displayScoreboard();
      console.log("LOSS")
      reset();
      displayTargetNum();
    }

  })

  // var matchScore = $("#match-score");
  // matchScore.text(randomNum);

  // var scoreBoard = $("#scoreboard");
  // scoreBoard.text("wins: " + wins);

  // var lossesDiv = $("<div>");
  // lossesDiv.text("losses: " + losses);
  // scoreBoard.append(lossesDiv);


});

