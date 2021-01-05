import Countdown from './countdown.js';

export default function timer(Targetdate) {
  const date = new Countdown(Targetdate);
  const days = document.querySelector('.days');
  const hours = document.querySelector('.hours');
  const minutes = document.querySelector('.minutes');
  const seconds = document.querySelector('.seconds');

  setInterval(() => {
    days.innerText = `${date.total.days}:`;
    hours.innerText = `${date.total.hours}:`;
    minutes.innerText = `${date.total.minutes}:`;
    seconds.innerText = date.total.seconds;
  }, 1000);
}
