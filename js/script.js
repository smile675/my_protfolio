document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById('output');
    const input = document.getElementById('command-input');
    const terminalBody = document.getElementById('terminal-body');

    const commands = {
        help: {
            description: 'Display available commands',
            action: () => {
                return `
<span class="section-title">Available Commands:</span> <br/>
<span class="help-command">about</span>         - Display information about me <br/>
<span class="help-command">skills</span>        - List my technical skills <br/>
<span class="help-command">projects</span>      - Show my projects <br/>
<span class="help-command">experience</span>    - Display work experience <br/>
<span class="help-command">exp</span>           - Alias for experience <br/>
<span class="help-command">education</span>     - Show educational background <br/>
<span class="help-command">edu</span>           - Alias for education <br/>
<span class="help-command">contact</span>       - Get contact information <br/>
<span class="help-command">social</span>        - Display social media links <br/>
<span class="help-command">resume</span>        - Download resume <br/>
<span class="help-command">clear</span>         - Clear terminal <br/>
<span class="help-command">help</span>          - Display this help message <br/>
<span class="help-command">banner</span>        - Display welcome banner <br/>
`;
            }
        },
        about: {
            description: 'About me',
            action: () => {
                let output = '<span class="section-title">$ cat about.txt</span><br/>';

                for (const [key, value] of Object.entries(about)) {
                    const label =
                        key.charAt(0).toUpperCase() +
                        key.slice(1).replace(/_/g, ' ');
                    output += `<span class="command">${label}:</span>`;
                    output += `<span class="info-line">${value}</span><br/>`;
                }

                return output;
            }
        },
        skills: {
            description: 'Technical skills',
            action: () => {
                let output = '<span class="section-title">$ ls -la skills/</span><br/>'
                for (const [key, value] of Object.entries(technicalSkill)) {
                    const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');
                    output += `<span class="command">${label}:</span><br/>`;
                    output += `<span class="info-line">${value}</span><br/>`

                }

                return output;
            }
        },
        projects: {
            description: 'My projects',
            action: () => {
                let output = `<span class="section-title">$ git log --projects</span><br/>`;
                for (const project of myProjectList) {
                    output += `<br/>`;
                    output += `<span class="command">Project:</span> `;
                    output += `<span class="info-line">${project.name}</span><br/>`;

                    output += `<span class="command">Description:</span>`;
                    output += `<span class="info-line">${project.description}</span><br/>`;

                    output += `<span class="command">Tech:</span> `;
                    output += `<span class="info-line">${project.technologies}</span><br/>`;

                    if (project.url) {
                        output += `<span class="command">URL:</span> `;
                        output += `<a href="${project.url}" target="_blank">${project.url}</a><br/>`;
                    }
                }

                return output
            }
        },
        experience: {
            description: 'Work experience',
            action: () => {
                return `
<span class="section-title">$ cat experience.log</span>

[2022 - Present] <span class="command">Senior Software Engineer</span>
<span class="info-line">TechCorp Inc. | San Francisco, CA</span>
<span class="info-line">• Lead development of microservices architecture serving 1M+ users</span>
<span class="info-line">• Mentored 5 junior developers and conducted code reviews</span>
<span class="info-line">• Reduced API response time by 40% through optimization</span>

[2020 - 2022] <span class="command">Full Stack Developer</span>
<span class="info-line">StartupXYZ | Remote</span>
<span class="info-line">• Built and deployed 15+ features from scratch</span>
<span class="info-line">• Implemented CI/CD pipeline reducing deployment time by 60%</span>
<span class="info-line">• Collaborated with cross-functional teams in agile environment</span>

[2018 - 2020] <span class="command">Junior Developer</span>
<span class="info-line">WebSolutions Co. | New York, NY</span>
<span class="info-line">• Developed responsive web applications using React and Node.js</span>
<span class="info-line">• Fixed 100+ bugs and improved code quality by 30%</span>
<span class="info-line">• Participated in daily standups and sprint planning</span>
`;
            }
        },
        education: {
            description: 'Education',
            action: () => {
                let output = `<span class="section-title">$ cat education.txt</span><br/>`;
                for (const edu of educationList) {
                    output += `<br/>`;
                    output += `<span class="command">Inistitution:</span> `;
                    output += `<span class="info-line">${edu.inistitute}</span><br/>`;

                    output += `<span class="command">Location:</span>`;
                    output += `<span class="info-line">${edu.location}</span><br/>`;

                    output += `<span class="command">Course:</span> `;
                    output += `<span class="info-line">${edu.course}</span><br/>`;

                    output += `<span class="command">Timeline:</span> `;
                    output += `<span class="info-line">${edu.timeline}</span><br/>`;

                }

                return output;
            }
        },
        contact: {
            description: 'Contact information',
            action: () => {
                return `
<span class="section-title">$ cat contact.txt</span>

<span class="info-line">Email:    <a href="mailto:john.dev@example.com">john.dev@example.com</a></span>
<span class="info-line">Phone:    +1 (555) 123-4567</span>
<span class="info-line">Location: San Francisco, CA</span>
<span class="info-line">Website:  <a href="https://johndeveloper.com" target="_blank">johndeveloper.com</a></span>

<span class="success">Feel free to reach out for collaboration or opportunities!</span>
`;
            }
        },
        social: {
            description: 'Social media links',
            action: () => {
                return `
<span class="section-title">$ ls -la social/</span>

<span class="info-line">GitHub:     <a href="https://github.com/johndoe" target="_blank">github.com/johndoe</a></span>
<span class="info-line">LinkedIn:   <a href="https://linkedin.com/in/johndoe" target="_blank">linkedin.com/in/johndoe</a></span>
<span class="info-line">Twitter:    <a href="https://twitter.com/johndoe" target="_blank">twitter.com/johndoe</a></span>
<span class="info-line">Dev.to:     <a href="https://dev.to/johndoe" target="_blank">dev.to/johndoe</a></span>
<span class="info-line">Portfolio:  <a href="https://johndeveloper.com" target="_blank">johndeveloper.com</a></span>
`;
            }
        },
        resume: {
            description: 'Download resume',
            action: () => {
                return `
<span class="section-title">$ wget resume.pdf</span>

Downloading resume...
<span class="success">█████████████████████████████████████</span> 100%

<span class="success">Download complete!</span>
<a href="#" onclick="alert('In a real implementation, this would download your resume PDF'); return false;">Click here to download resume.pdf</a>
`;
            }
        },
        clear: {
            description: 'Clear terminal',
            action: () => {
                output.innerHTML = '';
                return null;
            }
        },
        banner: {
            description: 'Display banner',
            action: () => {
                return getBanner();
            }
        },
        exp: {
            description: 'Alias for experience',
            action: () => commands.experience.action()
        },
        edu: {
            description: 'Alias for education',
            action: () => commands.education.action()
        }
    };

    function getBanner() {
        return `<span class="ascii-art">                                                                             
██ ▄█████ ██▄  ▄██ ▄████▄ ██ ██       ██  ██ ▄████▄ ▄█████ ▄█████ ▄████▄ ██ ███  ██   
██ ▀▀▀▄▄▄ ██ ▀▀ ██ ██▄▄██ ██ ██       ██████ ██  ██ ▀▀▀▄▄▄ ▀▀▀▄▄▄ ██▄▄██ ██ ██ ▀▄██   
██ █████▀ ██    ██ ██  ██ ██ ██████   ██  ██ ▀████▀ █████▀ █████▀ ██  ██ ██ ██   ██                                                                                                                                                                                       
</span>

Welcome to my interactive portfolio terminal!
Type '<span class="command">help</span>' to see available commands.
Type '<span class="command">about</span>' to learn more about me.

`;
    }


    function addOutput(text) {
        const line = document.createElement('div');
        line.className = 'output-line';
        line.innerHTML = text;
        output.appendChild(line);
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    function executeCommand(cmd) {
        const trimmedCmd = cmd.trim().toLowerCase();

        addOutput(`<span class="prompt">guest@portfolio:~$</span> <span class="command">${cmd}</span>`);

        if (trimmedCmd === '') {
            return;
        }

        if (commands[trimmedCmd]) {
            const result = commands[trimmedCmd].action();
            if (result !== null) {
                addOutput(result);
            }
        } else {
            addOutput(`<span class="error">Command not found: ${cmd}</span>\nType '<span class="command">help</span>' to see available commands.`);
        }
    }


    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const cmd = input.value;
            executeCommand(cmd);
            input.value = '';
        }
    });

    // Keep focus on input
    terminalBody.addEventListener('click', () => {
        input.focus();
    });

    // Initialize with banner
    window.addEventListener('load', () => {
        addOutput(getBanner());
    });

    // Command bar click handlers
    document.querySelectorAll('.command-hint').forEach(hint => {
        hint.addEventListener('click', () => {
            const cmd = hint.getAttribute('data-cmd');
            input.value = cmd;
            executeCommand(cmd);
            input.value = '';
        });
    });

    // Tab completion
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const currentInput = input.value.toLowerCase();
            const matches = Object.keys(commands).filter(cmd =>
                cmd.startsWith(currentInput)
            );
            if (matches.length === 1) {
                input.value = matches[0];
            } else if (matches.length > 1) {
                addOutput(`<span class="prompt">guest@portfolio:~$</span> <span class="command">${currentInput}</span>`);
                addOutput(matches.join('  '));
            }
        }
    });

})