(function () {
    "use strict";

    const header = document.querySelector('#header');
    const headerToggleBtn = document.querySelector('.header-toggle');

    // Toggle sidebar visibility
    function headerToggle() {
        const isShown = header.classList.toggle('header-show');
        headerToggleBtn.setAttribute('aria-expanded', isShown);
        headerToggleBtn.classList.toggle('bi-list', !isShown);
        headerToggleBtn.classList.toggle('bi-x', isShown);
    }

    headerToggleBtn.addEventListener('click', headerToggle);

    // Hide sidebar on same-page/hash link clicks
    document.querySelectorAll('#navmenu a').forEach(link => {
        link.addEventListener('click', () => {
            if (header.classList.contains('header-show')) {
                headerToggle();
            }
        });
    });
})();
