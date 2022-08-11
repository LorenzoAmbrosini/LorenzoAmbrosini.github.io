const dateElement = document.querySelector(".date");

function formatDate(date) {
  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  return `${DAYS[date.getDay()]}`;
}

setInterval(() => {
  const now = new Date();

  dateElement.textContent = formatDate(now);
}, 200);
