function startRound() {
    // Set up the game area
    prepareGameArea("game-area-two-column", "flex");

    if (document.getElementById("standard-list-button").checked) {
        list = standardList;
    } else {
        list = customList;
    }

    // Shuffle and display the categories
    shuffle(list);

    for (let i = 0; i < 12; i++) {
        document.getElementById("li" + i).innerHTML = list[i];
    }

    // Shuffle and display the letter
    shuffle(letters);
    document.getElementById("letter").innerHTML = letters[0];

    // Stop timer if there is one ongoing
    stopTimer();

    // Start timer
    startTimer(180, 15);
}
