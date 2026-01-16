document.addEventListener("DOMContentLoaded", function () {
    const closeBtn = document.getElementById('closeBtn');
    const scndCloseBtn = document.getElementById('scndCloseBtn');
    const menu = document.querySelector('.menu');
    const popup = document.querySelector('.popup');

    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            if (menu) {
                menu.classList.add('hide');
            }
            if (popup) {
                popup.classList.add('hide');
            }
        });
    }

    if (scndCloseBtn) {
        scndCloseBtn.addEventListener('click', function () {
            if (popup) {
                popup.classList.add('hide');
            }
        });
    }
});
