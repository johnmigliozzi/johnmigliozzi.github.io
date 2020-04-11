var seedValue;

var natoWords = [
    "Alfa",
    "Bravo",
    "Charlie",
    "Delta",
    "Echo",
    "Foxtrot",
    "Golf",
    "Hotel",
    "India",
    "Juliett",
    "Kilo",
    "Lima",
    "Mike",
    "November",
    "Oscar",
    "Papa",
    "Quebec",
    "Romeo",
    "Sierra",
    "Tango",
    "Uniform",
    "Victor",
    "Whiskey",
    "X-ray",
    "Yankee",
    "Zulu",
];

$(function () {
    $("#splash-screen").load("/html/splash-screen.html");
});

function enterGameID(title) {
    // Capture the seed
    seedValue = document.getElementById("seed-box").value.toLowerCase().trim();

    // Game Specific Code to create the random number generator (based on settings)
    //.
    //.

    if (title == "Splattergories") {
        Math.seedrandom(
            seedValue + document.getElementById("standard-list-button").checked
        );
    } else {
        Math.seedrandom(seedValue);
    }

    //.
    //.
    // End Game Specific Code

    // Create a check to make sure seed is correct - based on the NATO phonetic alphabet
    shuffle(natoWords);
    document.getElementById("nato-check-text").innerHTML =
        "Check the following words to make sure you have the same as all other players";
    document.getElementById("nato-check").innerHTML =
        natoWords[0] + " &nbsp; " + natoWords[1] + " &nbsp; " + natoWords[2];

    // Hide the Seed box and button
    document.getElementById("seed-box").style.display = "none";
    document.getElementById("seed-button").style.display = "none";

    // Hide Settings
    document.getElementById("settings").style.display = "none";

    // Show a button to start the timer
    document.getElementById("start-button").style.display = "flex";
}
