// $-jquery, document= html .ready makes sure jquery doesnt
// show up until everything else is fully loaded
// function(){} anonymous function
// $start= letting me know that we're using jquery, not syntax required
// caching
$(document).ready(function(){
  var start = $('#start');
  var minutes = $('#minutes');
  var seconds = $('#seconds');

// setup
  start.on('click', startCountdown);

// functions
  function startCountdown() {
    setInterval(function(){
      var secondsVal = +seconds.text(); //plus sign makes this behave like a num
      if(secondsVal === 0){
        seconds.text(59);
      }else {
        seconds.text(secondsVal - 1);
      }
    }, 1000);
  }
});
