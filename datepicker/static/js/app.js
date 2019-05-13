const legend = document.querySelector('.legend');
const suggestions = document.querySelectorAll('.suggestions .suggestions__suggestion');
const dayOne = document.querySelector('.datepicker__day .days input:first-child');
const dayTwo = document.querySelector('.datepicker__day .days input:last-child');
const month = document.querySelector('.datepicker__month .month__dropdown');
const year = document.querySelector('.datepicker__year .year__dropdown');
const toggleLegend = document.querySelector('#toggle-legend');
const addCalendarBtn = document.querySelector('.add-to-calendar');

for (let i = 1930; i < new Date().getFullYear() + 8; i++) {
    year.insertAdjacentHTML('beforeend',
        `<option ${i === new Date().getFullYear() ? 'selected' : false} value="${i.toString().substr(2, 4)}">${i}</option>`
    );
}

suggestions.forEach(function (suggestion) {
    suggestion.addEventListener('click', function (e) {
        const data = e.target.querySelectorAll('a span');
        const day = data[0].dataset.day;
        const month = data[1].dataset.month;
        const year = data[2].dataset.year;
        changeDateSuggestion(day, month, year);

        if(day === '12' || day === '31' || day === '16' || day === '23') {
            changeBackground('static/img/slingers.jpg');
        } else if(day === '01') {
            changeBackground('static/img/belastingsdienst.jpg');
        } else if(day === '18') {
            changeBackground('static/img/guitar.jpg');
        }
    });
});

dayOne.addEventListener('input', maxInput);
dayTwo.addEventListener('input', maxInput);
dayOne.addEventListener('change', checkInputs);
dayTwo.addEventListener('change', checkInputs);
addCalendarBtn.addEventListener('click', playSound);

const keys = [];
document.addEventListener('keydown', function (event) {
    let key;
    let number = parseInt(numkeys(String(event.key)));
    const activeElement = document.activeElement;

    if (activeElement === dayOne || activeElement === dayTwo) { // Input days are in focus
        event.preventDefault();
        isNaN(number) ? number = activeElement.value : number = number;
        activeElement.value = number.toString();
        checkInputs();
        activeElement.select();
    } else if (activeElement === month) { // Month is in focus
        if (parseInt(number) > 0 && parseInt(number) < 13) {
            if (keys.length === 0) {
                keys.push(number);
                const selectedMonth = keys[0];
                while (keys.length > 0) keys.pop();
                month.querySelectorAll('option').forEach(function (option) {
                    if (selectedMonth === parseInt(option.value)) {
                        option.selected = true;
                    }
                });
            }
        }
    } else if (activeElement === year) { // Year is in focus
        if (parseInt(number) >= 0 && parseInt(number) <= 9) {
            if (keys.length < 2) {
                keys.push(number);
                if (keys.length === 2) {
                    const selectedYear = keys[0].toString() + keys[1].toString();
                    while (keys.length > 0) keys.pop();
                    year.querySelectorAll('option').forEach(function (option) {
                        if (option.value === selectedYear) {
                            option.selected = true;
                        }
                    });
                }
            }
        }
    } else if (activeElement === toggleLegend) {
        if(event.key === 'Enter') {
            legendToggle();
            if(toggleLegend.checked === false) {
                toggleLegend.checked = true;
            } else {
                toggleLegend.checked = false;
            }
        }
    } else if(activeElement === addCalendarBtn) {
        if(event.key === 'Enter') {
            if(dayOne.value === '1' && dayTwo.value === '8') {
                playSound('static/audio/guitar-hard-rock-sound.m4a');
            } else {
                playSound('static/audio/sound-effect.m4a');
            }
        }
    }
});

toggleLegend.addEventListener('change', function() {
    legendToggle();
});

function changeBackground(image) {
    document.body.style.background = `url(${image})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
}

function legendToggle() {
    if(legend.style.display === 'none') {
        legend.style.display = 'block';
    } else {
        legend.style.display = 'none';
    }
}

function playSound(audio) {
    const sound = new Audio(audio);
    sound.loop = false;
    sound.play();
}

function numkeys(key) {
    let number;
    switch (key) {
        case 'z':
            number = 0;
            break;
        case 'x':
            number = 1;
            break;
        case 'c':
            number = 2;
            break;
        case 'v':
            number = 3;
            break;
        case 'a':
            number = 4;
            break;
        case 's':
            number = 5;
            break;
        case 'd':
            number = 6;
            break;
        case 'q':
            number = 7;
            break;
        case 'w':
            number = 8;
            break;
        case 'e':
            number = 9;
            break;
        case 'r':
            number = 10;
            break;
        case 't':
            number = 11;
            break;
        case 'y':
            number = 12;
            break;
        default:
            number = parseInt(key);
            break;
    }

    return number;
}

function maxInput() {
    if (this.value.length > 1) {
        this.value = this.value.slice(0, 1);
    }
}

function checkInputs() {
    const dayOneValue = parseInt(dayOne.value);
    const dayTwoValue = parseInt(dayTwo.value);

    if (dayOneValue === 3) {
        dayTwo.max = 1;

        if (dayTwoValue > 1) {
            dayTwo.value = 0;
        }
    } else if(dayOneValue > 3) {
        alert('Nee Marijn! Een maand heeft niet meer dan 31 dagen 😄');
    } else {
        dayTwo.max = 9;
    }

    if (dayOneValue > 3) {
        dayOne.value = 3;
    }
    if (dayTwoValue > 9) {
        dayTwo.value = 9;
    }
}

function changeDateSuggestion(dayValue, monthValue, yearValue) {
    const splitDays = dayValue.split('');
    dayOne.value = splitDays[0];
    dayTwo.value = splitDays[1];

    month.querySelectorAll('option').forEach(function (dropdown) {
        if (dropdown.value == monthValue) {
            dropdown.selected = 'selected';
        }
    });

    year.querySelectorAll('option').forEach(function (dropdown) {
        if (dropdown.value == yearValue.toString().substr(2, 4)) {
            dropdown.selected = 'selected';
        }
    });
}

// Focus with spacebar
const focussables = document.querySelectorAll('.focussable');
const state = {
    focussedElement: null,
    previousKey: null,
};

window.addEventListener('keydown', focusNextElement);

focussables.forEach(focussable => {
    focussable.addEventListener('focus', (event) => {
        state.focussedElement = event.target
    });
});

function focusNextElement(event) {
    if (event.key !== 'Shift' && event.key !== ' ') {
        return;
    }

    event.preventDefault();

    const {
        previousKey,
        focussedElement
    } = state;

    const currentIndex = focussedElement ? [...focussables].findIndex(focussable => focussable ===
        focussedElement) : -1;

    if (previousKey !== 'Shift' && event.key === ' ') {
        const nextIndex = currentIndex + 1 > focussables.length ? 0 : currentIndex + 1;
        const element = focussables[nextIndex];
        element.focus();
    } else if (previousKey === 'Shift' && event.key === ' ') {
        const previousIndex = currentIndex - 1 < 0 ? 0 : currentIndex - 1;
        const element = focussables[previousIndex];
        element.focus();
    }
    state.previousKey = event.key;
}

// setInterval(function () {
//     if (document.activeElement === dayOne) {
//         const day = document.querySelector('.datepicker .datepicker__day');
//         if (day.classList !== 'blink-day') {
//             day.classList.add('blink-day');
//         }
//     }
//     if (document.activeElement === month) {
//         const month = document.querySelector('.datepicker .datepicker__month');
//         if (month.classList !== 'blink-month') {
//             month.classList.add('blink-month');
//         }
//     }
//     if (document.activeElement === year) {
//         const year = document.querySelector('.datepicker .datepicker__year');
//         if (year.classList !== 'blink-year') {
//             year.classList.add('blink-year');
//         }
//     }
// }, 100)