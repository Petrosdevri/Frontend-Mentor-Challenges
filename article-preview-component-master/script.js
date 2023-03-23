const shareBtn = document.getElementsByClassName('share-btn')[0];
const toolbar = document.getElementsByClassName('toolbar')[0];

shareBtn.addEventListener('click', () => {
    if(shareBtn.classList.contains('active')) {
        shareBtn.classList.remove('active');
        toolbar.classList.add('visually-hidden');
    } else {
        shareBtn.classList.add('active');
        toolbar.classList.remove('visually-hidden');
    }
});