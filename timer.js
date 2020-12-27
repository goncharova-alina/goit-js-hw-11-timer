const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  minutes: document.querySelector('span[data-value="mins"]'),
  seconds: document.querySelector('span[data-value="secs"]'),
}

const timer = {
  start(){
      const startTime = new Date( 2021, 5, 20, );
    setInterval(() => {
        const targetTime = new Date();
        const deltaTime = startTime - targetTime;

        updateClockface(deltaTime);
    }, 1000);
  }

}
timer.start();

function updateClockface(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = mins;
    refs.seconds.textContent = secs;
}
function pad(value) {
    return String(value).padStart(2, '0');
  }