const wedding = {
  date: "2026-09-04T16:00:00+05:00",
  dateText: "04 сентября 2026"
};

const dateText = document.querySelector("[data-wedding-date-text]");
if (dateText) {
  dateText.innerHTML = wedding.dateText
    .toUpperCase()
    .split("")
    .map((char) => `<span>${char === " " ? "&nbsp;" : char}</span>`)
    .join("");
}

const countdownFields = {
  weeks: document.querySelector("[data-weeks]"),
  days: document.querySelector("[data-days]"),
  hours: document.querySelector("[data-hours]"),
  minutes: document.querySelector("[data-minutes]"),
  seconds: document.querySelector("[data-seconds]")
};

function pad(value) {
  return String(value).padStart(2, "0");
}

function updateCountdown() {
  const target = new Date(wedding.date).getTime();
  const diff = Math.max(0, target - Date.now());
  const totalSeconds = Math.floor(diff / 1000);
  const weeks = Math.floor(totalSeconds / 604800);
  const days = Math.floor((totalSeconds % 604800) / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  countdownFields.weeks.textContent = pad(weeks);
  countdownFields.days.textContent = pad(days);
  countdownFields.hours.textContent = pad(hours);
  countdownFields.minutes.textContent = pad(minutes);
  countdownFields.seconds.textContent = pad(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);
