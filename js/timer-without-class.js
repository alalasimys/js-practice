const timerContainerRef = document.querySelector("#timer-1");
console.log(timerContainerRef);
const targetDate = new Date("May 2, 2021");

function initTimer() {
  const currentDate = Date.now();
  let time = targetDate.getTime() - currentDate;
  const intervalId = setInterval(() => {
    time -= 1000;
    if (time < 0) {
      time = 0;
      clearInterval(intervalId);
    }
    const timeComponentsValues = getTimeComponents(time);
    render(timeComponentsValues);
  }, 1000);
}

function getTimeComponents(time) {
  const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = this.pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  // console.log({ days, hours, mins, secs });
  return { days, hours, mins, secs };
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function render({ days, hours, mins, secs }) {
  return (timerContainerRef.innerHTML = `
  <div class="field">
    <span class="value" data-value="days">${days}</span>
    <span class="label">Days</span>
  </div>

  <div class="field">
    <span class="value" data-value="hours">${hours}</span>
    <span class="label">Hours</span>
  </div>

  <div class="field">
    <span class="value" data-value="mins">${mins}</span>
    <span class="label">Minutes</span>
  </div>

  <div class="field">
    <span class="value" data-value="secs">${secs}</span>
    <span class="label">Seconds</span>
  </div>
  `);
}

initTimer();
