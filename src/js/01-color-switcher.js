
const startButtonEl = document.querySelector('[data-start]');
const stopButtonEl = document.querySelector('[data-stop]');

let timerId;

stopButtonEl.disabled = true;

const handleOnStartClick = () => {
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000)
    startButtonEl.disabled = true;
    stopButtonEl.disabled = false;
}

const handleOnStopClick = () => {
    startButtonEl.disabled = false;
    clearInterval(timerId);
    stopButtonEl.disabled = true;
}

startButtonEl.addEventListener('click', handleOnStartClick);
stopButtonEl.addEventListener('click', handleOnStopClick);



function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

