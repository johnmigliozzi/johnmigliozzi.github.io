function refresh() {
    var decision = confirm("Are you sure?  You will lose all progress.");

    if (decision == true) {
        location.reload();
    }
}
