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

    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            // Highlight the active filter button
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Show/hide projects based on filter
            projectCards.forEach(card => {
                if (filter === "all" || card.getAttribute("data-category") === filter) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });


    const navLinks = document.querySelectorAll('#navmenu a');
    const sections = document.querySelectorAll('section');

    // Set active link on scroll
    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionBottom = sectionTop + sectionHeight;

            // Adjust for small sections like Skills and Contact
            const scrollPosition = window.scrollY + window.innerHeight / 3; // Adjust to be more sensitive to smaller sections

            // Check if the section is in the viewport
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    });
})();
