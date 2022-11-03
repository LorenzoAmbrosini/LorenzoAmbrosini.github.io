const day = document.getElementById("date");

function updateClock() {
    console.log("Started");
    // Clock Variables
    let timestamp = new Date();

    // Get Week Day in Words
    let dayOfWeek = timestamp.getDay();
    if (dayOfWeek === 0) {
        dayOfWeek = "Sunday";
    } else if (dayOfWeek === 1) {
        dayOfWeek = "Monday";
    } else if (dayOfWeek === 2) {
        dayOfWeek = "Tuesday";
    } else if (dayOfWeek === 3) {
        dayOfWeek = "Wednesday";
    } else if (dayOfWeek === 4) {
        dayOfWeek = "Thursday";
    } else if (dayOfWeek === 5) {
        dayOfWeek = "Friday";
    } else {
        dayOfWeek = "Saturday";
    }

    day.innerHTML = dayOfWeek;
}

setTimeout(updateClock, 0)
setInterval(updateClock, 1000);