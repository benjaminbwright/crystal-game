var randomNumber;
var totalScore = 0;
var crystals = ['green', 'magenta', 'orange', 'black'];
var wins = 0;
var losses = 0;

function startGame() {
  // set total score to 0
  totalScore = 0;
  // set a random number to beat
  randomNumber = getRandomNumber(200);
  // update the random number display
  $('#random-number').html(randomNumber);
  // set random numbers to the crystals
  for (var i = 0; i < crystals.length; i++) {
    var crystalColor = crystals[i];
    // Add a random value to each crystal
    $(`#${crystalColor}-crystal`).attr('data-value', getRandomNumber(75));
  } 
  $('#info-message').text('Click a jewel to play.');
}

function getRandomNumber(max) {
  // get a random number below the max number
  return Math.floor(Math.random()*max);
}

$('.crystal').on('click', function() {
  // Add the crystal value to the total score
  totalScore += $(this).data('value');
  // Update the total score display
  $('#total-score').html(totalScore);
  // check if the player won
  if (totalScore === randomNumber) {
    $('#info-message').text('You Won!!!');
    wins++;
    $('#wins').html(wins);
    setTimeout(function(){
      startGame();
    },3000)
  } else if (totalScore > randomNumber) {
    console.log('You lost. Try again.');
    $('#info-message').text('You lost. :(');
    setTimeout(function() {
      losses++;
      $('#losses').text(losses);
      startGame();
    }, 3000)
  }
});

startGame();