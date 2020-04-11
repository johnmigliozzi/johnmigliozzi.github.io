var interval;
var ongoingTimer;

function startTimer(totalTimeAmount, lowTimeAmount) {
    //Update the coundtown every second
    ongoingTimer = 1;
    interval = setInterval(function () {
        //Time calculations for min and sec
        var minutes = Math.floor((totalTimeAmount % (60 * 60)) / 60);
        var seconds = Math.floor(totalTimeAmount % 60);

        //Output the result
        document.getElementById("timer").innerHTML =
            minutes + "m " + seconds + "s ";

        //If countdown is over, change text
        if (totalTimeAmount < 0) {
            clearInterval(interval);
            document.getElementById("timer").innerHTML = "Time's Up!";
            ongoingTimer = 0;
        }

        // If timer < lowTimeAmount, add style
        if (totalTimeAmount < lowTimeAmount) {
            document.getElementById("timer").classList.add("lowtime");
        } else {
            document.getElementById("timer").classList.remove("lowtime");
        }

        totalTimeAmount -= 1;
    }, 1000);
}

function stopTimer() {
    if (ongoingTimer == 1) {
        clearInterval(interval);
    }
}
