window.onload = function() {
var workTimeStart = null;
var workClicked = 0;
var restClicked = 0;
// Update the count down every 1 second
//  $("#start-timer").click ( function() {
//  alert("Hello");

document.getElementById("start-timer").onclick = function() {setStartInterval()};
function setStartInterval() {
	restClicked = 0;
	workClicked = 1;
  // Get today's date and time
  var now = new Date().getTime();
  workTimeStart = now;
};
// });

document.getElementById("rest-timer").onclick = function() {setRestInterval()};
var restTimerLength= null;
var timerLength = 0;
function setRestInterval() {
	workClicked = 0;
	restClicked = 1;
	timerLength = new Date().getTime() - workTimeStart;
	var workRatio = document.getElementById("work").value;
	var restRatio = document.getElementById("rest").value;
	var restTimerRatio = restRatio/workRatio;
	restTimerLength = restTimerRatio * timerLength;
};

var setClockValue = setInterval(function() {
	var now = new Date().getTime();
	var worktimer = now - workTimeStart;
	var resttimer = worktimer - timerLength;
    
  // Output the result in an element with id="demo"
  if (workClicked == 1) {
  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor((worktimer % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((worktimer % (1000 * 60)) / 1000);
  	document.getElementById("clock-work").innerHTML = minutes + "m " + seconds + "s ";
  	document.getElementById("clock-rest").innerHTML = "00:00";
  }
  if (restClicked == 1) {
  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor((resttimer % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((resttimer % (1000 * 60)) / 1000);

  	document.getElementById("clock-work").innerHTML = "00:00";
  	if (resttimer <= restTimerLength) {
    	document.getElementById("clock-rest").innerHTML = minutes + "m " + seconds + "s ";
    }
    if (resttimer > restTimerLength) {
    	restClicked = 0;
    	alert("Rest timer Done, click Start Timer to begin next timer");
    }
  }
}, 100);
document.getElementById("cancel-timer").onclick = function() {cancelTimer()};
function cancelTimer() {
	restTimerLength=null;
	workTimerLength=null;
	workClicked = 0;
	restClicked = 0;
	document.getElementById("clock-work").innerHTML = "00:00";
	document.getElementById("clock-rest").innerHTML = "00:00";
	
};
}