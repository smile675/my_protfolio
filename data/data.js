// This dob will be used to calculate age
const dob = new Date("1995-07-13");


function calculateAge(dob) {
    /**
     * Calculate age
     * param: dob [Date]
     * return: age [int]
     */
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();

    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    // If birthday hasn’t occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}

const intro = "Hi, I'm Ismail Hossain from Bangladesh. I'm currently working in Malaysia as a Software Developer, Inventory Administrator, and Accountant. Recently, I started my own startup company, Xitoss, where I focus mainly on coding and building new projects."

const about = {
    name: "Ismail Hossain",
    role: "Software Developer",
    location: "Noakhali, Bangladesh",
    age: calculateAge(dob),
    languages: "Bangla, English",
    hobbies: "Coding, Chess"
};

const technicalSkill = {
    languages: "Python, PHP, C, Flutter, JavaScript, TypeScript, GO",
    frontend: "HTML, CSS, JS, Tailwind, Boostrap, React, NextJS",
    backend: "Django, Node.js, FastAPI, PHP, GO",
    database: "PostgreSQL, MySQL, MongoDB, Redis",
    devOps: "Docker, Nginx, CI/CD, Github Actions",
    tools: "Git, Linux, Vim, VS Code, Postman"
}

const myProjectList = [
    {
        name: "Server Security Test",
        description: "A Python command-line tool for performing basic load testing and security stress checks on any web server",
        technologies: "Python",
        url: "https://github.com/smile675/server-security-test"
    },
    {
        name: "Xitoss Distributor",
        description: "An application for distributor companies, to improve their markeing and operational activites. Below the url is to demostrate the application, how it will look when a client purchase from me.",
        technologies: "Python, Django, Docker, Nginx, ShellScripts, PostgreSQL, Boostrap, JavaScript",
        url: "https://demo-distributor.top"
    },
    {
        name: "Distributor Deployment",
        description: "A project to deploy Xitoss Distributor. Although made for Xitoss Distributor, the same project can be used to deploy any application to a VPS server by changing few setups",
        technologies: "Python, Docker, Nginx, ShellScripts",
        url: "https://github.com/xitoss/distributor-deployment"
    },
    {
        name: "Xitoss",
        description: "A Website to showcase my software company.",
        technologies: "HTML CSS JavaScript",
        url: "https://xitoss.com"
    },
    {
        name: "MyQuotes",
        description: "A social media like platform where user can publish their authentic quotes and thoughts. Currently, the application is under maintenance, I made it offline after being active for a year so that can improve.",
        technologies: "Python, Django, Boostrap, MySQL, HTML, CSS, JavaScript",
        url: null,
    },

];

const educationList = [
    {
        inistitute: "HarvardX - Online learning initiative of Harvard University",
        location: "Online EDX",
        course: "CS50's Introduction to Cybersecurity",
        timeline: "Feb 2025",
    },
    {
        inistitute: "HarvardX - Online learning initiative of Harvard University",
        location: "Online EDX",
        course: "CS50's Introduction to Computer Science",
        timeline: "Dec 2024",
    },
    {
        inistitute: "HarvardX - Online learning initiative of Harvard University",
        location: "Online EDX",
        course: "CS50's Web Programming with Python and JavaScript",
        timeline: "Nov 2024",
    },
    {
        inistitute: "HarvardX - Online learning initiative of Harvard University",
        location: "Online EDX",
        course: "CS50's Introduction to Programming with Python",
        timeline: "Nov 2024",
    },
    {
        inistitute: "Birla Inistitute of Technology & Science",
        location: "Online, India",
        course: "Introduction to Programming with C",
        timeline: "Oct 2024",
    },
    {
        inistitute: "Udemy Online Course [29.5 Hours]",
        location: "Online",
        course: "Flutter & Firebase: 5 Social Media Apps",
        timeline: "Sept 2024",
    },
    {
        inistitute: "Udemy Online Course [55 Hours]",
        location: "Online",
        course: "The Ultimate Fullstack Web Development Bootcamp",
        timeline: "Sept 2024",
    },
    {
        inistitute: "Udemy Online Course [42.5 Hours]",
        location: "Online",
        course: "Flutter & Dart - The complete Guide",
        timeline: "Feb 2022",
    },
    {
        inistitute: "Inti Internation College",
        location: "Subang, Malaysia",
        course: "Bachelor of Mechanical Engineering",
        timeline: "2014-2020",
    },
    {
        inistitute: "Milestone College",
        location: "Dhaka, Bangladesh",
        course: "Higher Secondary School Certificate (HSC)",
        timeline: "2011-2013",
    },
    {
        inistitute: "Milestone College",
        location: "Dhaka, Bangladesh",
        course: "Secondary School Certificate (SSC)",
        timeline: "2010-2011",
    },
]

const jobExperience = [
    {
        organization: "Xitoss",
        position: "Founder & CEO",
        location: "Noakhali, Bangladesh",
        timeline: "May 2025 - Present",
        url: "https://xitoss.com",
    },
    {
        organization: "Dzora Resources",
        position: "Software Developer & Accounting & Inventory Admin",
        location: "Klang, Selangor, Malaysia",
        timeline: "Nov 2024 - Present",
        url: "https://www.dzora.org",
    },
    {
        organization: "Dzora Resources",
        position: "Inventory Admin",
        location: "Petaling Jaya, Selangor, Malaysia",
        timeline: "Jan 2022 - Oct 2024",
        url: "https://www.dzora.org",
    },
    {
        organization: "Dzora Resources",
        position: "Administrative Assistant",
        location: "Petaling Jaya, Selangor, Malaysia",
        timeline: "Feb 2019 -  Dec 2021",
        url: "https://www.dzora.org",
    },
    {
        organization: "Woodpeckers Timber",
        position: "Administrative Assistant",
        location: "Petaling Jaya, Selangor, Malaysia",
        timeline: "Oct 2018 - Feb 2019",
        url: null,
    },
]


contacts = {
    email: "dev.ismail@yahoo.com",
    phone: "+601116220501",
    location: "Klang, Malaysia",
    comment: "I prefer WhatsApp for quick communication and email for messages that include attachments."
}

socials = {
    github: "https://github.com/smile675",
    whatsapp: "https://wa.me/+601116220501",
    website: "https://ismail-hossain.dev",
    twitter: "https://x.com/smile_675",
    facebook: "https://www.facebook.com/ismail.hossain.819318/",
    comment: "I rarely use Facebook or Twitter (X), and I've completely opted out of LinkedIn since Nov 2025."
}