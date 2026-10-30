const countdown = document.getElementById('倒數');
const tourDates = Array.from(document.querySelectorAll('.tour-row time[datetime]'))
  .map((time) => new Date(`${time.dateTime}T00:00:00`))
  .sort((first, second) => first.getTime() - second.getTime());

function updateCountdown() {
  if (!countdown) return;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const nextPerformance = tourDates.find((date) => date >= today);
  if (!nextPerformance) {
    countdown.textContent = '本次巡演已結束';
    return;
  }

  const daysUntilPerformance = Math.round(
    (nextPerformance.getTime() - today.getTime()) / (24 * 60 * 60 * 1000)
  );
  countdown.textContent = daysUntilPerformance === 0
    ? '今天首演'
    : `還有 ${daysUntilPerformance} 天`;
}

updateCountdown();
window.setInterval(updateCountdown, 60 * 60 * 1000);
