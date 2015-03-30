// $(document).ready(function(){

  var game = {
    operation: ['+'],
    maxNumber: 100,
    maxInitialTime: 0,
    timeIncrement: 1
  }

  var randomNumberOne = Math.ceil(Math.random() * game.maxNumber);
  var randomNumberTwo = Math.ceil(Math.random() * game.maxNumber);

  function generateSum() {
    return (randomNumberOne + game.operation + randomNumberTwo);
    console.log(randomNumberOne + randomNumberTwo);
  };

  // store the question and answer 
  var userInput = $('#userInput');
  var answer = randomNumberOne + randomNumberTwo;

  // compare if userInput is correct
  function compare() {
    if (userInput === answer) {
      console.log("Correct");
    }
    console.log("Incorrect");
  }

  // if correct answer, add 1 second

  // time keeper

// });

// for (var name in myObject) {
//   if (myObject.hasOwnProperty(name)) {
//     alert(name);
//   }
// }