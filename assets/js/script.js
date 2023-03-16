var menu_btn = document.querySelector('.nav-menu-mob')
var menus = document.querySelector('.nav-hide')

menu_btn.addEventListener('click', () => {
    menus.classList.toggle('hide');
})

var slider = tns({
    "container": '.my-slider',
    "responsive": {
        "350": {
            "items": 1,
        },
        "600": {
            "items": 2
        },
        "992": {
            "items": 3
        }
    },
    "swipeAngle": false,
    "speed": 400
});

const countDownClock = (number, format) => {
    const daysElement = document.querySelector('.days');
    const hoursElement = document.querySelector('.hours');
    const minutesElement = document.querySelector('.minutes');
    const secondsElement = document.querySelector('.seconds');

    let countdown;
    convertFormat(format);

    function convertFormat(format) {
        switch (format) {
            case 'seconds':
                return timer(number);
            case 'minutes':
                return timer(number * 60);
            case 'hours':
                return timer(number * 60 * 60);
            case 'days':
                return timer(number * 60 * 60 * 24);
        }
    }

    function timer(seconds) {
        const now = Date.now();
        const then = now + seconds * 1000;

        countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);

            if (secondsLeft <= 0) {
                clearInterval(countdown);
                return;
            };

            displayTimeLeft(secondsLeft);

        }, 1000);
    }

    function displayTimeLeft(seconds) {
        daysElement.textContent = Math.floor(seconds / 86400);
        hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
        minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60);
        secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
    }
}

countDownClock(31, 'days');