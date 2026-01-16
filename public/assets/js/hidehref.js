document.addEventListener('DOMContentLoaded', function () {
    var anchorLinks = document.querySelectorAll('a[href^="#"]');

    function smoothScroll(event) {
        event.preventDefault();

        var targetId = this.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });

            history.pushState(null, '', window.location.pathname);
        }
    }

    anchorLinks.forEach(function (link) {
        link.addEventListener('click', smoothScroll);
    });
});