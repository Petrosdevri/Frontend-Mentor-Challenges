const totalNotifications = document.querySelector('.notifications-number');
const readBtn = document.querySelector('.read-btn');
const messages = document.querySelectorAll('.message');
const unreadMark = document.querySelectorAll('.unread-mark');

readBtn.addEventListener('click', () => {
    messages.forEach((message) => {
        message.classList.remove('unread');
    })
    totalNotifications.innerHTML = 0;
})