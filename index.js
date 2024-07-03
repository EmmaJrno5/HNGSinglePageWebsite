function updateCurrentTime() {
  const currentTimeElement = document.querySelector(
    '[data-testid="currentTimeUTC"]'
  );
  const currentDayElement = document.querySelector(
    '[data-testid="currentDay"]'
  );
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();

  let currentUTCTime = now.toUTCString();
  // Remove the Abbreviated weekday
  let noWeekdayCurrentUTCTime = currentUTCTime.slice(
    currentUTCTime.indexOf(",") + 1
  );
  let currentUTCDay = weekday[now.getUTCDay()];
  
  currentTimeElement.textContent = noWeekdayCurrentUTCTime;
  currentDayElement.textContent = currentUTCDay;
}

// Call updateCurrentTime once page is fully loaded
window.onload = function () {
  updateCurrentTime();
  setInterval(updateCurrentTime, 1000); // Update every minute
};
