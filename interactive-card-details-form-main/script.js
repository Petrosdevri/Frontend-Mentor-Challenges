const cardNumberFront = document.querySelector('.card-number-front');
const cardholderNameFront = document.querySelector('.cardholder-name-front');
const expDateMMFront = document.querySelector('.exp-date-mm-front');
const expDateYYFront = document.querySelector('.exp-date-yy-front');
const cvcBack = document.querySelector('.cvc-back');
const form = document.querySelector('.form');
const cardholderName = document.querySelector('#cardholder-name');
const cardNumber = document.querySelector('#card-number');
const expDateMM = document.querySelector('#exp-date-mm');
const expDateYY = document.querySelector('#exp-date-yy');
const cvc = document.querySelector('#cvc');
const confirmBtn = document.querySelector('.confirm-btn');
const completedState = document.querySelector('.completed-state');

cardNumber.addEventListener('input', (e) => {
    let cardNumberValue = e.target.value;
    cardNumberValue = cardNumberValue.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
    cardNumberFront.innerHTML = cardNumberValue;
    if(!cardNumberValue || cardNumberValue.trim() === '') {
        cardNumberFront.innerHTML = '0000 0000 0000 0000';
    }
});

cardholderName.addEventListener('input', (e) => {
    let cardholderNameValue = e.target.value;
    cardholderNameFront.innerHTML = cardholderNameValue;
    if(!cardholderNameValue || cardholderNameValue.trim() === '') {
        cardholderNameFront.innerHTML = 'Jane Appleseed';
    }
});

expDateMM.addEventListener('input', (e) => {
    let expDateMMValue = e.target.value;
    expDateMMFront.innerHTML = expDateMMValue;
    if(!expDateMMValue || expDateMMValue.trim() === '') {
        expDateMMFront.innerHTML = '00';
    }
});

expDateYY.addEventListener('input', (e) => {
    let expDateYYValue = e.target.value;
    expDateYYFront.innerHTML = expDateYYValue;
    if(!expDateYYValue || expDateYYValue.trim() === '') {
        expDateYYFront.innerHTML = '00';
    }
});

cvc.addEventListener('input', (e) => {
    let cvcValue = e.target.value;
    cvcValue = cvcValue.replace(/\s/g, '').replace(/(\d{3})/g, '$1').trim();
    cvcBack.textContent = cvcValue;
    if(!cvcValue || cvcValue.trim() === '') {
        cvcBack.innerHTML = '000';
    }
});

// Add error messages before the submit button
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(!cardNumber.value || cardNumber.value.trim() === '') {
        cardNumber.classList.add('error');
        cardNumber.insertAdjacentHTML('afterend', '<p class="error-message">Card number is required</p>');
    }
});

confirmBtn.addEventListener('click', () => {
    form.classList.add('hidden');
    completedState.classList.remove('hidden');
});