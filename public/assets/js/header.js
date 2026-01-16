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