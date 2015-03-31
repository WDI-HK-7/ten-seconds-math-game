// $(document).ready(function(){


  // generate random number 
  
  var randomNumberOne = Math.ceil(Math.random() * 100);
  var randomNumberTwo = Math.ceil(Math.random() * 100);

  function sumAnswer() {
    return (randomNumberOne "+" randomNumberTwo);
    console.log(randomNumberOne + randomNumberTwo);
  };

  // store the question and answer 
  var userInput = $('#userInput');
  var answer = sumAnswer();

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