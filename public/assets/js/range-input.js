document.addEventListener('DOMContentLoaded', function () {
    const rangeContainers = document.querySelectorAll('.range');

    rangeContainers.forEach(container => {
        const rangeInput = container.querySelector('.range__range');
        const ticks = container.querySelectorAll('.range__tick');
        const rangeFill = container.querySelector('.range__fill');

        function updateTicksAndFill() {
            ticks.forEach(tick => {
                tick.classList.remove('active');
                if (parseInt(tick.dataset.value) === parseInt(rangeInput.value)) {
                    tick.classList.add('active');
                }
            });

            let percentage = (rangeInput.value / rangeInput.max) * 100;

            if (percentage < 100) {
                ticks.forEach((tick, index) => {
                    const tickValue = parseInt(tick.dataset.value);

                    if (parseInt(rangeInput.value) >= tickValue && index < ticks.length - 1) {
                        percentage = (tickValue / rangeInput.max) * 100;
                    }
                });
            }

            if (percentage === 0) {
                rangeFill.style.width = '10px';
            } else if (percentage === 100) {
                rangeFill.style.width = 'auto';
            } else if (percentage === 75) {
                rangeFill.style.width = `calc(${percentage}% - 10px)`;
            } else {
                rangeFill.style.width = `${percentage}%`;
            }
        }

        rangeInput.addEventListener('input', updateTicksAndFill);

        updateTicksAndFill();
    });
});
