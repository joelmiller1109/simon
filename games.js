//3. Array called button colors.
var buttonColors = ["red", "blue", "green", "yellow"];
// 5. An empty Array called game patterns.
var gamePattern = [];
// 11. empty array userClickPatterns.
var userClickPatterns = [];
var started = false;
// 21 creating a var starting at zero.
var level = 0;

// 19. Using j query to detect when a keyborad key is pressed.
$("body").keydown(function() {
  if (!started) {
// 20-22. changing level to zero.
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;

  }
});
// 9. if any button wer clicked.
$(".btn").click(function() {

  // 10. new var that stores the ID of the button that was clicked.
  // 10.b .attr is used to find value of any attributes.
  var userChosenColor = $(this).attr("id");
  //12. Adding content of userChosenColor to an empty array with push.
  userClickPatterns.push(userChosenColor);
  // 15. Works for when the user clicks or plays sound.
  playSound(userChosenColor);
  animatePress(userChosenColor);
  // 26. calling checkAnswer after user has clicked and checked their answer.
  checkAnswer(userClickPatterns.length-1);
});

// 25 creating a function called checkAnswer
function checkAnswer(currentLevel){
// 27. if statement checking most recent user answer is same as game pattern.
if (gamePattern [currentLevel] === userClickPatterns [currentLevel]){
  console.log("success");
// 28. if user got most recent answer right check that they have finished their sequence.
if(userClickPatterns.length ===gamePattern.length){
// 29. Call next sequence after 1000ms.
  setTimeout(function(){
    nextSequence();
  }, 1000);
  }
} else {
  console.log("wrong");
// 30. playing sound if user got answer wrong.
  playSound("wrong");
  // 31. applying class called game over and removing it after.
  $("body").addClass("game-over");
setTimeout(function(){
  $("body").removeClass ("game-over");
},2000);
// 32. Changing game 1 h1 title to say game over.
$("h1").text("Game Over, Press Any Key to Restart.");
// 34. Calling start over if the user gets the sequence wrong.
startOver();

}
}

// 2.creating a new Function called nextSequence.
function nextSequence() {
  // 29. set user click pattern to empty array.
  userClickPatterns = [];
// 23. Increasing level by 1 every time.
  level++;
// 24. update h1 with this change in value of level
  $("#level-title").text("level " + level);
  // 1.creating a random number between 1 and 3

  var randomNumber = Math.floor(Math.random() * 4);
  // 4. creating a new variable randomChosenColor using randomNumber to select a color.

  var randomChosenColor = buttonColors[randomNumber];
  // 6. Adding randomChosenColor using push to the end of game patterns.
  gamePattern.push(randomChosenColor);
  // 7. selecting same Id as randomChosenColor.
  // using jquery to animate a flash.
  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  // 8b. attaching the sound to the function next
  // sequence with the randomChosenColor.
  playSound(randomChosenColor);

}

//14. playing sound
function playSound(name) {
  //8. playing sound
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
// 16. creating a function called animatePress with one paramater.
function animatePress(currentColor) {
//  17. Adding a class called pressed.
  $("#" + currentColor).addClass("pressed");
// 18. using the setTimeout to get rid of pressed classed after 1/10 of a sec.
setTimeout(function() {
  $("#" + currentColor).removeClass("pressed");
}, 100);
}
// 33. Creating a new function called startover.
function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}
