const accordionItems = document.querySelectorAll('.acc-item');
const arrows = document.querySelectorAll('.arrow');

accordionItems.forEach((item) => {
    const header = item.querySelector('.acc-header');
    const content = item.querySelector('.acc-content');

    header.addEventListener('click', () => {
        item.classList.toggle("active");
        header.style.fontWeight = 700;

        accordionItems.forEach((otherItem) => {
            if (otherItem !== item) {
                otherItem.classList.remove("active");
            }
        });

        content.style.display =
        content.style.display === "block" ? "none" : "block";
    });
});
