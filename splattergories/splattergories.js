var interval;
var ongoingtimer;

var roundnumber = 0;

function play(id) {
    //disable the seedbox

    document.getElementById("seedbox").disabled = true;
    //document.getElementById("seedbox").style.display = "none";
    document.getElementById("seedbox-title").style.color = "grey";

    document.getElementById("beginbutton").value = "Next Round";

    document.getElementById("timerp").style.display = "block";
    document.getElementById("letterp").style.display = "block";
    document.getElementById("refreshbutton").style.display = "block";

    roundnumber++;
    document.getElementById("roundnumber").innerHTML =
        "&nbsp;&nbsp;Round #:&nbsp;" + roundnumber;

    seedvalue = id.value;

    Math.seedrandom(seedvalue.toLowerCase());

    catlist.sort(() => Math.random() - 0.5);

    for (let i = 0; i < 12; i++) {
        document.getElementById("li" + i).innerHTML = catlist[i];
    }

    letters.sort(() => Math.random() - 0.5);

    document.getElementById("letter").innerHTML = letters[0];

    console.log("stopping timer");
    stopTimer();

    console.log("starting timer");
    startTimer(20);
    //mytimer = new Timer(20, 15, "end");
    //mytimer.start();
}

function startTimer(distance) {
    //Update the coundtown every second
    ongoingtimer = 1;
    interval = setInterval(function() {
        //Time calculations for min and sec
        var minutes = Math.floor((distance % (60 * 60)) / 60);
        var seconds = Math.floor(distance % 60);

        //Output the result
        document.getElementById("timer").innerHTML =
            minutes + "m " + seconds + "s ";

        //If countdown is over, change text
        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("timer").innerHTML = "Time's Up!";
            ongoingtimer = 0;
        }

        // If timer < 15 sec, add style
        if (distance < 15) {
            document.getElementById("timer").classList.add("lowtime");
        } else {
            document.getElementById("timer").classList.remove("lowtime");
        }

        distance -= 1;
    }, 1000);
}

function stopTimer() {
    if (ongoingtimer == 1) {
        clearInterval(interval);
    }
}

function refresh() {
    location.reload();
}
/*
class Timer {
    totaltime = 0;
    remainingtime = 0;
    warningtime = 0;
    endmessage = "";

    constructor(totaltime, warningtime, endmessage) {
        this.totaltime = totaltime;
        this.remainingtime = totaltime;
        this.warningtime = warningtime;
        this.endmessage = endmessage;
    }

    start() {
        this.x = setInterval(function() {
            //Time calculations for min and sec
            var minutes = Math.floor((this.remainingtime % (60 * 60)) / 60);
            var seconds = Math.floor(this.remainingtime % 60);

            //Output the result
            document.getElementById("timer").innerHTML =
                minutes + "m " + seconds + "s ";

            //If countdown is over, change text
            if (this.remainingtime < 0) {
                clearInterval(x);
                document.getElementById("timer").innerHTML = this.endmessage;
            }

            // If timer < warningtime, add style
            if (this.remainingtime <= this.warningtime) {
                document.getElementById("timer").classList.add("lowtime");
            } else {
                document.getElementById("timer").classList.remove("lowtime");
            }

            this.remainingtime -= 1;
        }, 1000);
    }

    stop() {
        clearInterval(this.x);
    }

    reset() {
        this.remainingtime = this.totaltime;
    }
}
*/
