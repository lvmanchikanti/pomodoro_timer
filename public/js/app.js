// $-jquery, document= html, .ready makes sure jquery doesnt
// show up until everything else is fully loaded
// function(){} anonymous function
// $start= letting me know that we're using jquery, not syntax required
// caching
$(document).ready(function(){
  var start = $('#start');
  var minutes = $('#minutes');
  var seconds = $('#seconds');
  var breakBtn = $('#break');

// setup
  start.on('click', startCountdown);
  breakBtn.on('click', takeABreak);

// functions
  function takeABreak(){
    minutes.text('05');
    seconds.text('00');
    startCountdown();
  }

  function startCountdown() {
    var countdown = setInterval(function(){
      var secondsVal = +seconds.text(); //plus sign makes this behave like a num
      var minutesVal = +minutes.text();
      if(secondsVal === 0 && minutesVal === 0){
        breakBtn.removeClass('disabled');
        breakBtn.removeAttr('disabled');
        clearInterval(countdown);
        return;
      }
      if(secondsVal === 0){ //== works but === for now, will be explained
        minutes.text(minutesVal - 1);
        seconds.text(59);
      }else {
          if(secondsVal <= 10){
            seconds.text("0" + (secondsVal-1));
          }else {
            seconds.text(secondsVal - 1);
          }
      }
    }, 1000);
  }
});
