var roundNumber = 0;

$(function () {
    $("#game-info").load("/html/game-info.html");
});

function prepareGameArea(boardType, displayType) {
    // Hide the splash screen
    document.getElementById("splash-screen").style.display = "none";
    document.getElementById("splash-screen-game-specific").style.display =
        "None";

    // Show the Game Area
    document.getElementById(boardType).style.display = displayType;

    // Show the Game ID for ongoing games
    document.getElementById("game-id-label").innerHTML =
        "Game ID: " + seedValue;

    // Increment and display the round number
    roundNumber++;
    document.getElementById("round-number").innerHTML =
        "Round #:&nbsp;" + roundNumber;
}
