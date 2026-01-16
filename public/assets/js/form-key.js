document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(".form__key .code");

    inputs.forEach((input, index) => {

        input.addEventListener("input", () => {
            input.value = input.value.replace(/\D/g, '').slice(0, 1);

            if (input.value && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener("keydown", (e) => {

            if (e.key === "Backspace" && !input.value && index > 0) {
                inputs[index - 1].focus();
            }

            if (e.key === "ArrowLeft" && index > 0) {
                inputs[index - 1].focus();
            }

            if (e.key === "ArrowRight" && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener("paste", (e) => {
            const paste = e.clipboardData.getData("text").replace(/\D/g, '').slice(0, inputs.length);
            if (!paste) return;

            e.preventDefault();
            paste.split('').forEach((char, i) => {
                if (inputs[i]) inputs[i].value = char;
            });

            const last = Math.min(paste.length, inputs.length) - 1;
            if (inputs[last]) inputs[last].focus();
        });
    });
});