<header class="header" role="banner">
    <div class="header__container">
        <a href="index.php" class="header__logo" aria-label="VTS Limited home">
            <img src="assets/img/logo-mini.svg" width="100" height="40" alt="VTS Limited" class="header__logo--img" loading="eager" decoding="async">
        </a>

        <nav class="header__nav" aria-label="Primary navigation" id="primary-navigation">
            <ul class="header__list">
                <li class="header__item">
                    <button class="header__link" type="button" aria-expanded="false" aria-controls="nav-company">
                        Company <span class="icon dropdown-arrow-white" aria-hidden="true"></span>
                    </button>

                    <ul class="header__inner-list" id="nav-company" hidden>
                        <li class="header__inner-item selected">
                            <a href="#" class="header__link" aria-current="page">Inner Link 1</a>
                        </li>
                        <li class="header__inner-item">
                            <a href="#" class="header__link">Inner Link 2</a>
                        </li>
                    </ul>
                </li>

                <li class="header__item">
                    <button class="header__link" type="button" aria-expanded="false" aria-controls="nav-career">
                        Career <span class="icon dropdown-arrow-white" aria-hidden="true"></span>
                    </button>

                    <ul class="header__inner-list" id="nav-career" hidden>
                        <li class="header__inner-item">
                            <a href="#" class="header__link">Inner Link 1</a>
                        </li>
                        <li class="header__inner-item">
                            <a href="#" class="header__link">Inner Link 2</a>
                        </li>
                    </ul>
                </li>

                <li class="header__item">
                    <a href="#" class="header__link">About Us</a>
                </li>

                <li class="header__item">
                    <a href="#" class="header__link">Technologies</a>
                </li>

                <li class="header__item">
                    <a href="#" class="header__link">News</a>
                </li>

                <li class="header__item">
                    <a href="#" class="header__link">FAQ</a>
                </li>
            </ul>

            <div class="header__actions">
                <a href="sign-in.php" class="header__link btn-login">Log In</a>

                <button type="button" class="btn-primary-circle" role="button">
                    Get Started <span class="icon get-started" aria-hidden="true"></span>
                </button>
            </div>
        </nav>

        <div class="header__actions">
            <a href="sign-in.php" class="header__link btn-login">Log In</a>

            <button type="button" class="btn-primary-circle" role="button">
                Get Started <span class="icon get-started" aria-hidden="true"></span>
            </button>

            <button class="btn-menu" type="button" aria-label="Open menu" aria-controls="primary-navigation" aria-expanded="false">
                <span class="icon menu" aria-hidden="true"></span>
            </button>
        </div>
    </div>
</header>


<script>
    document.addEventListener("DOMContentLoaded", () => {
        const menuItems = document.querySelectorAll(".header__item");

        menuItems.forEach(item => {
            const link = item.querySelector(".header__link");
            const innerList = item.querySelector(".header__inner-list");
            const arrow = item.querySelector(".icon");

            link?.addEventListener("click", (event) => {
                event.stopPropagation();

                menuItems.forEach(otherItem => {
                    const otherInnerList = otherItem.querySelector(".header__inner-list");
                    const otherArrow = otherItem.querySelector(".icon");
                    if (otherInnerList && otherInnerList !== innerList) {
                        otherInnerList.style.display = "none";
                    }
                    if (otherArrow && otherArrow !== arrow) {
                        otherArrow.style.transform = "rotate(0deg)";
                    }
                });

                if (innerList) {
                    if (innerList.style.display === "flex") {
                        innerList.style.display = "none";
                        if (arrow) arrow.style.transform = "rotate(0deg)";
                    } else {
                        innerList.style.display = "flex";
                        if (arrow) arrow.style.transform = "rotate(180deg)";
                    }
                }
            });
        });

        document.addEventListener("click", () => {
            menuItems.forEach(item => {
                const innerList = item.querySelector(".header__inner-list");
                const arrow = item.querySelector(".icon");

                if (innerList) innerList.style.display = "none";
                if (arrow) arrow.style.transform = "rotate(0deg)";
            });
        });
    });
    document.addEventListener("DOMContentLoaded", () => {
        const btnMenu = document.querySelector(".btn-menu");
        const headerNav = document.querySelector(".header__nav");

        btnMenu?.addEventListener("click", (event) => {
            event.stopPropagation();

            if (headerNav.style.display === "flex") {
                headerNav.style.display = "none";
            } else {
                headerNav.style.display = "flex";
            }
        });

        document.addEventListener("click", (event) => {
            if (!headerNav.contains(event.target) && !btnMenu.contains(event.target)) {
                headerNav.style.display = "none";
            }
        });
    });
</script>