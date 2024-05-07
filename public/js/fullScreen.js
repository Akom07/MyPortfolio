const modal = document.querySelector('#imageFullScreen');
const img = document.querySelectorAll('.cardImage');
const fullImg = document.querySelector('#expandedImage');
const span = document.querySelector('#closeButton');
const btns = document.querySelectorAll('#expandImage');

btns.forEach((btns, i) => {
    btns.addEventListener('click', () => {
        modal.style.display = "block";
        fullImg.src = img[i].src;
        modal.focus();
    });
});

span.addEventListener('click', () => {
    modal.style.display = "none";
})

modal.addEventListener('keydown', (event) => {
    if (event.key === "Tab") {
        fullImg.focus();
    }
    if (event.key === "Enter" || event.key === " ") {
        span.click();
    }
});