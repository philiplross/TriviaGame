alert("Wlecome to phil's Trivia game, Just remeber you have 120 seconds to finish the game before it ends. Goodluck!");


var correctAnswers = 0;
var incorrectAnswers = 0;
var grand = 0;

$("#q1").on('click',function(){
    correctAnswers= correctAnswers + 1;
    console.log(correctAnswers, "correct value")
     return grand + correctAnswers;
})

$("#q1b").click(function(){
incorrectAnswers + 1
});

$("#q2a").click(function(){
    incorrectAnswers + 1;
  
});

$("#q2b").click(function(){
    correctAnswers + 1;
    return grand + correctAnswers;
});


$("#q3a").click(function(){
    incorrectAnswers + 1;
  
});

$("#q3b").click(function(){
    correctAnswers + 1;
    return grand + correctAnswers;
});


$("#q4a").click(function(){
    incorrectAnswers + 1;
  
});

$("#q4b").click(function(){
    correctAnswers + 1;
    return grand + correctAnswers;
});

$("#q5a").click(function(){
    correctAnswers + 1;
    return grand + correctAnswers;
  
});

$("#q5b").click(function(){
    incorrectAnswers + 1;
});

var MyFunction = function(){

    var counter = 10;
    var timer = null;
 
    function countdown(){
        if (counter == 120) {
            $(".time_box").html(counter);
        }
        if (counter <= 0) {
            stopInterval();
        }
        else {
            counter--;
            $(".time_box").html(counter);
        }
     }
     function reset() {
        clearInterval(timer);
        counter=0;
     }
     function startInterval() {
        $(".time_box").html(counter);
        timer= setInterval(countdown, 1000);
     }
     function stopInterval() {
        clearInterval(timer);
     }
 
     return {
       startInterval: startInterval
     }
     $("#countdown").attr(MyFunction)
 }();


console.log(correctAnswers);
console.log(incorrectAnswers);
console.log(grand);
