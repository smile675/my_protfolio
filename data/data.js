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
        name: "Server Security Test",
        description: "A Python command-line tool for performing basic load testing and security stress checks on any web server",
        technologies: "Python",
        url: "https://github.com/smile675/server-security-test"
    },
    {
        name: "Xitoss Distributor",
        description: "An application for distributor companies, to improve their markeing and operational activites.",
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
        name: "My Portfolio",
        description: "A pure HTML CSS JS project to build my own portfolio, Deploying directly from GitHub",
        technologies: "HTML CSS JavaScript",
        url: "https://ismail-hossain.dev"
    },
    {
        name: "Xitoss",
        description: "A Website to showcase my software company.",
        technologies: "HTML CSS JavaScript",
        url: "https://xitoss.com"
    },
    {
        name: "MyQuotes",
        description: "A social media like platform where user can publish their authentic quotes and thoughts. Currently, the application is under maintenance, I made it offline after being active for a air so that can improve.",
        technologies: "Python, Django, Boostrap, MySQL, HTML, CSS, JavaScript",
        url: null,
    },

];
