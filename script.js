document.addEventListener('DOMContentLoaded', () => {
    let startTime;
    let updatedTime;
    let difference;
    let timerInterval;
    let paused = true;

    const startButton = document.getElementById('start-btn');
    const pauseButton = document.getElementById('pause-btn');
    const resetButton = document.getElementById('reset-btn');

    const minutesDisplay = document.getElementById('minutes');
    const secondsDisplay = document.getElementById('seconds');
    const millisecondsDisplay = document.getElementById('milliseconds');

    startButton.addEventListener('click', () => {
        if (paused) {
            paused = false;
            startTime = new Date().getTime() - (difference || 0);
            timerInterval = setInterval(updateTime, 10);
        }
    });

    pauseButton.addEventListener('click', () => {
        if (!paused) {
            paused = true;
            clearInterval(timerInterval);
        }
    });

    resetButton.addEventListener('click', () => {
        paused = true;
        clearInterval(timerInterval);
        difference = 0;
        minutesDisplay.textContent = '00';
        secondsDisplay.textContent = '00';
        millisecondsDisplay.textContent = '000';
    });

    function updateTime() {
        updatedTime = new Date().getTime();
        difference = updatedTime - startTime;

        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        const milliseconds = Math.floor((difference % 1000) / 10);

        minutesDisplay.textContent = String(minutes).padStart(2, '0');
        secondsDisplay.textContent = String(seconds).padStart(2, '0');
        millisecondsDisplay.textContent = String(milliseconds).padStart(3, '0');
    }
});

