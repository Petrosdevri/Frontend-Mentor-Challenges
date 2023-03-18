const rating = document.getElementById('rating-component');
const ratings = document.querySelectorAll('.rating-circle');
const submitBtn = document.getElementById('submit-btn');
const thankYou = document.getElementById('thank-you');
const finalRating = document.getElementById('final-rating-value');

ratings.forEach((rate) => {
    rate.addEventListener('click', () => {
        finalRating.innerHTML = rate.value;
    });
});

submitBtn.addEventListener('click', () => {
    rating.classList.add('hidden');
    thankYou.classList.remove('hidden');
});