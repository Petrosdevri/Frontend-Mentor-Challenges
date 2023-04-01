const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice-text');
const adviceBtn = document.getElementById('advice-btn');

function generateAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            adviceId.innerHTML = data.slip.id;
            adviceText.innerHTML = data.slip.advice;
        })
        .catch(error => console.log(error));
}

adviceBtn.addEventListener('click', generateAdvice);