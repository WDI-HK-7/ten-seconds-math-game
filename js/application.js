$('document').ready(function() {

  var num1;
  var num2;
  var question;
  var answer;
  var numberLimit = Number($('#number-limit').val());
  var operators = ["+"];
  var generateOperator;

  //create two random numbers and log in html
  createExpression();
  
  function createExpression() {
    generateOperator = operators[Math.floor(Math.random() * operators.length)];
    num1 = Math.ceil(Math.random() * 100);
    num2 = Math.ceil(Math.random() * 100);

    while (num1 < num2) {
    num1 = Math.ceil(Math.random() * 100);
    num2 = Math.ceil(Math.random() * 100);
    }

    question = num1 + generateOperator + num2;
    answer = eval(question);
    $('.question').text(question);
  }
  
  //timer function
  var secondsLeft = 9;
  var timer;

  function timeCount() {
    if ( secondsLeft < 0 ) {
      $('.time-left').css("color","red");
      $('.time-left').text("Game Over!");
      stopTimer();
      $('.restart').removeClass("hidden");
    } else {
      $('.time-left').text(Math.ceil(secondsLeft)+"s left!");
      secondsLeft--; 
      if (secondsLeft <= 3) {
        $('.time-left').css("color","salmon");
        blinker();
      }
    }
  } 
  
  function startTimer() {
    timer = setInterval(timeCount, 1000);
  }

  function stopTimer() {
    clearInterval(timer);
  }

  //blinker when there is 3 seconds left
  function blinker() {
    $('.time-left').fadeOut(300);
    $('.time-left').fadeIn(300);
  }

  //start the timer upon initial keydown
  $(document).one('keypress', '#user-input', function() {
    startTimer();
  })

  //add one second if answer is correct, reset fields#98CAED and questions
  $(document).on('keyup', '#user-input', function() {
    if ( $('#user-input').val() == answer ) {
      $('.jumbotron').after("<h1 class='float'> " + answer +"</h1>");
      $( ".float" ).slideUp(1000);
      $('.float').fadeOut(1000);
      $('form')[0].reset();
      secondsLeft += 1.8;
      createExpression();
    }
  })

  //reset button
  $(document).on('click', '.restart', function() {
    $('form')[0].reset();
    secondsLeft = 9;
    createExpression();
    $('.restart').addClass("hidden");
    $('.time-left').text("10s");
    $('.time-left').css("color","black");
    $('#user-input').focus();
    startTimer();
  })













})
