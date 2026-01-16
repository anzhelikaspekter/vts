document.addEventListener("DOMContentLoaded", function () {
    const showPasswordIcons = document.querySelectorAll('.show-password');

    showPasswordIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            const input = icon.previousElementSibling;

            icon.classList.toggle("hide-password");

            if (input.type === "password") {
                input.type = "text";
            } else {
                input.type = "password";
            }
        });
    });
});