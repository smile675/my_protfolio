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


const certificationList = [
    {
        name: "Bachelor of Mechanical Engineering",
        complete: true,
        progress: 100,

    },
    {
        name: "Flutter & Dart - The Complete Guide at Udemy",
        complete: true,
        progress: 100,

    },
    {
        name: "The Ultimate 2024 Fullstack Web Development Bootcamp at Udemy",
        complete: true,
        progress: 100,

    },
    {
        name: "Java 17 Masterclass: Start Coding at Udemy",
        complete: false,
        progress: 80,
    },
    {
        name: "Flutter & Firebase Tutorial: Build 5 Social Media Apps",
        complete: true,
        progress: 100,

    },
    {
        name: "C Programming Step by Step - Complete Tutorial For Beginners",
        complete: false,
        progress: 10,

    },
];

const myProjectList = [
    {
        name: "Amazon Clone",
        logo: "amazon-clone.png",
        technologies: ["Flutter", "Node Js", "JavaScript", "MongoDB",],
        desc: "A clone of the Amazon mobile application for Android.",
    },

    {
        name: "Cashelp pro",
        logo: "chp.png",
        technologies: ["Flutter", "Sqflite", "SQL"],
        desc: "A POS Android application for small retail shops to manage sales and basic accounts in offline mode with local database system.",
    },
    {
        name: "Martlink Market Solution",
        logo: "martlink.png",
        technologies: ["Flutter", "PHP", "SQL Database"],
        desc: "A marketplace solution for wholesalers, retailers, and small pop-up shops where each of them can interact with each other to promote their business and manage POS and accounting. Both mobile and web applications are available for this project.",
    },
    {
        name: "Qr Profile",
        logo: "qrprofile.png",
        technologies: ["Flutter", "PHP", "SQL Database", "HTML", "CSS", "JavaScript"],
        desc: "A personal online profile service with the power of QR. A user can use many features, such as creating a profile, resume, social and e-commerce network, and share each of them using a single dynamic QR Code or Link. Additionally, this has a bonus feature of creating an NFC Business card.",
    },
    {
        name: "Mytra Clone",
        logo: "mytra-clone.png",
        technologies: ["HTML", "CSS", "JavaScript"],
        desc: "This is a clone application of the Mytra E-commerce website using pure HTML, CSS, and JavaScript for learning purposes.",
    },
    {
        name: "Movie Browser",
        logo: "movie-browser.png",
        technologies: ["React JS", "CSS", "Boostrap"],
        desc: "A website to browse any movie from the TMDb API. This website is for practicing React JS.",
    },
];
