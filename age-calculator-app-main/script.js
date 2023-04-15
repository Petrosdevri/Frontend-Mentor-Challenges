const dayLabel = document.getElementById('day-label');
const monthLabel = document.getElementById('month-label');
const yearLabel = document.getElementById('year-label');
const dayInput = document.getElementById('day-input');
const monthInput = document.getElementById('month-input');
const yearInput = document.getElementById('year-input');
const dayErrorMessage = document.getElementById('day-error-message');
const monthErrorMessage = document.getElementById('month-error-message');
const yearErrorMessage = document.getElementById('year-error-message');
const dayOutput = document.getElementById('day-output');
const monthOutput = document.getElementById('month-output');
const yearOutput = document.getElementById('year-output');
const ageBtn = document.querySelector('.age-btn');

dayInput.addEventListener('input', () => {
    const day = parseInt(dayInput.value);
    let isValid = true;

    if(day < 1 || day > 31 || isNaN(day)){
        dayErrorMessage.textContent = 'Must be a valid day';
        dayLabel.style.color = 'hsl(0, 100%, 67%)';
        dayInput.style.border = '1px solid hsl(0, 100%, 67%)';
        isValid = false;
    }
    else {
        dayErrorMessage.innerHTML = "";
        dayLabel.style.color = 'hsl(0, 1%, 44%)';
        dayInput.style.border = '1px solid hsl(0, 0%, 86%)';
    }
});

monthInput.addEventListener('input', () => {
    const month = parseInt(monthInput.value);
    let isValid = true;

    if(month < 1 || month > 12 || isNaN(month)) {
        monthErrorMessage.textContent = 'Must be a valid month';
        monthLabel.style.color = 'hsl(0, 100%, 67%)';
        monthInput.style.border = '1px solid hsl(0, 100%, 67%)';
        isValid = false;
    } else {
        monthErrorMessage.innerHTML = "";
        monthLabel.style.color = 'hsl(0, 1%, 44%)';
        monthInput.style.border = '1px solid hsl(0, 0%, 86%)';
    }
});

yearInput.addEventListener('input', () => {
    const year = parseInt(yearInput.value);
    let isValid = true;

    if(year > new Date().getFullYear() || isNaN(year)) {
        yearErrorMessage.textContent = 'Must be in the past';
        yearLabel.style.color = 'hsl(0, 100%, 67%)';
        yearInput.style.border = '1px solid hsl(0, 100%, 67%)';
        isValid = false;
    } else {
        yearErrorMessage.innerHTML = "";
        yearLabel.style.color = 'hsl(0, 1%, 44%)';
        yearInput.style.border = '1px solid hsl(0, 0%, 86%)';
    }
});

ageBtn.addEventListener('click', () => {
    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);

    const currentDate = new Date();
    const birthDate = new Date(year, month - 1, day);

    let ageYear = currentDate.getFullYear() - birthDate.getFullYear();
    let ageMonth = currentDate.getMonth() - birthDate.getMonth();
    let ageDay = currentDate.getDate() - birthDate.getDate();

    const daysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    if(ageDay < 0) {
        ageDay += daysInMonth(birthDate.getMonth(), birthDate.getFullYear());
        ageMonth -= 1;
    }
    if(ageMonth < 0) {
        ageMonth += 12;
        ageYear -= 1;
    }

    yearOutput.textContent = ageYear;
    monthOutput.textContent = ageMonth;
    dayOutput.textContent = ageDay;
});