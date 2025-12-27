document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('resume-container');
    const A4_HEIGHT_MM = 297;
    const PAGE_PADDING_MM = 15;
    const USABLE_HEIGHT_MM = A4_HEIGHT_MM - (PAGE_PADDING_MM * 2);
    const MM_TO_PX_RATIO = 3.7795275591; // Approximate conversion at 96dpi
    // Add safety margin to prevent overflow during print (10% less space)
    const USABLE_HEIGHT_PX = (USABLE_HEIGHT_MM * MM_TO_PX_RATIO) * 0.90;

    function generateResume() {
        // First, generate all content in a temporary container
        let tempDiv = document.createElement('div');
        tempDiv.style.position = 'absolute';
        tempDiv.style.visibility = 'hidden';
        tempDiv.style.width = '210mm';
        document.body.appendChild(tempDiv);

        let allContent = '';

        // Header Section
        allContent += `
                <div class="header content-block" data-section="header">
                    <img src="./assets/image/profile_photo.jpg" alt="${about.name}" class="profile-photo" onerror="this.style.display='none'">
                    <div class="header-content">
                        <div class="name">${about.name}</div>
                        <div class="role">${about.role}</div>
                        <div class="intro">${intro}</div>
                        <div class="contact-info">
                            <div class="contact-item">📧 ${contacts.email}</div>
                            <div class="contact-item">📱 ${contacts.phone}</div>
                            <div class="contact-item">📍 ${contacts.location}</div>
                        </div>
                    </div>
                </div>
            `;

        // About Section
        allContent += `<div class="section content-block" data-section="about">
                    <div class="section-title">Personal Information</div>
                    <div class="about-grid">`;

        for (const [key, value] of Object.entries(about)) {
            const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');
            allContent += `<div class="about-item">
                        <div class="about-label">${label}:</div>
                        <div class="about-value">${value}</div>
                    </div>`;
        }

        allContent += `</div></div>`;

        // Technical Skills - with section title separate
        allContent += `<div class="section-title content-block" data-section="skills-title">Technical Skills</div>`;
        allContent += `<div class="skills-grid content-block" data-section="skills-content">`;

        for (const [key, value] of Object.entries(technicalSkill)) {
            const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');
            allContent += `<div class="skill-item">
                        <div class="skill-label">${label}:</div>
                        <div class="skill-value">${value}</div>
                    </div>`;
        }

        allContent += `</div>`;

        // Professional Experience - title separate from items
        allContent += `<div class="section-title content-block" data-section="experience-title">Professional Experience</div>`;

        jobExperience.forEach((job, index) => {
            allContent += `<div class="timeline-item content-block" data-section="exp-${index}">
                        <div class="timeline-header">
                            <div class="timeline-title">${job.position}</div>
                            <div class="timeline-timeline">${job.timeline}</div>
                        </div>
                        <div class="timeline-organization">${job.organization}</div>
                        <div class="timeline-location">${job.location}</div>
                        ${job.url ? `<a href="${job.url}" class="timeline-link" target="_blank">${job.url}</a>` : ''}
                    </div>`;
        });

        // Projects - title separate from items
        allContent += `<div class="section-title content-block" data-section="projects-title">Projects</div>`;

        myProjectList.forEach((project, index) => {
            allContent += `<div class="project-item content-block" data-section="proj-${index}">
                        <div class="project-name">${project.name}</div>
                        <div class="project-description">${project.description}</div>
                        <div class="project-tech">Technologies: ${project.technologies}</div>
                        ${project.url ? `<a href="${project.url}" class="project-link" target="_blank">${project.url}</a>` : '<span class="project-link">Currently offline</span>'}
                    </div>`;
        });

        // Education - title separate from items
        allContent += `<div class="section-title content-block" data-section="education-title">Education & Certifications</div>`;

        educationList.forEach((edu, index) => {
            allContent += `<div class="timeline-item content-block" data-section="edu-${index}">
                        <div class="timeline-header">
                            <div class="timeline-title">${edu.course}</div>
                            <div class="timeline-timeline">${edu.timeline}</div>
                        </div>
                        <div class="timeline-organization">${edu.inistitute}</div>
                        <div class="timeline-location">${edu.location}</div>
                    </div>`;
        });

        // Social Links
        allContent += `<div class="section content-block" data-section="social">
                    <div class="section-title">Online Presence</div>
                    <div class="contact-info">`;

        for (const [key, value] of Object.entries(socials)) {
            if (key !== 'comment' && value) {
                const label = key.charAt(0).toUpperCase() + key.slice(1);
                allContent += `<div class="contact-item"><a href="${value}" class="timeline-link" target="_blank">${label}</a></div>`;
            }
        }

        allContent += `</div>
                    <div style="margin-top: 10px; font-size: 12px; color: #7f8c8d; font-style: italic;">
                        ${socials.comment}
                    </div>
                </div>`;

        // Add all content to temp div
        tempDiv.innerHTML = allContent;

        // Now split into pages based on height - allow sections to span pages
        const blocks = tempDiv.querySelectorAll('.content-block');
        let pages = [];
        let currentPage = [];
        let currentHeight = 0;

        blocks.forEach(block => {
            const blockHeight = block.offsetHeight;

            // If this single block is taller than a page, it will span pages (CSS will handle it)
            if (blockHeight > USABLE_HEIGHT_PX) {
                // If current page has content, save it
                if (currentPage.length > 0) {
                    pages.push(currentPage);
                    currentPage = [];
                    currentHeight = 0;
                }
                // Add this large block to its own page(s)
                pages.push([block.outerHTML]);
            }
            // If adding this block would exceed page height, start new page
            else if (currentHeight + blockHeight > USABLE_HEIGHT_PX && currentPage.length > 0) {
                pages.push(currentPage);
                currentPage = [block.outerHTML];
                currentHeight = blockHeight;
            }
            // Otherwise add to current page
            else {
                currentPage.push(block.outerHTML);
                currentHeight += blockHeight;
            }
        });

        // Add the last page
        if (currentPage.length > 0) {
            pages.push(currentPage);
        }

        // Generate final HTML with proper pages
        let finalHTML = '';
        pages.forEach(pageContent => {
            finalHTML += '<div class="page">' + pageContent.join('') + '</div>';
        });

        container.innerHTML = finalHTML;

        // Remove temp div
        document.body.removeChild(tempDiv);
    }

    // Download as PDF function
    window.downloadPDF = function () {
        window.print();
    };
    window.goTerminalMode = function () {
        window.location.href = "/index.html";
    }

    // Generate resume on page load
    generateResume();
})