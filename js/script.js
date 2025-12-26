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
                let output = `<span class="section-title">$ cat experience.log</span><br/>`;
                for (const exp of jobExperience) {
                    output += `<br/>`;
                    output += `<span class="command">Organization:</span> `;
                    output += `<span class="info-line">${exp.organization}</span><br/>`;

                    output += `<span class="command">Job Title:</span>`;
                    output += `<span class="info-line">${exp.position}</span><br/>`;

                    output += `<span class="command">Location:</span> `;
                    output += `<span class="info-line">${exp.location}</span><br/>`;

                    output += `<span class="command">Timeline:</span> `;
                    output += `<span class="info-line">${exp.timeline}</span><br/>`;

                    if (exp.url) {
                        output += `<span class="command">Org URL:</span> `;
                        output += `<a href="${exp.url}" target="_blank">${exp.url}</a><br/>`;
                    }

                }
                return output
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

                let output = `<span class="section-title">$ cat contact.txt</span><br/>`

                for (const [key, value] of Object.entries(contacts)) {
                    const label = makeLabel(key);

                    if (key == "comment") {
                        output += `<span class="comment">${value}</span><br/>`
                    } else {
                        output += `<span class="command">${label}</span>`;
                        if (key == "email") {
                            output += `<a class="info-line" href="mailto:${value}">${value}</a><br/>`
                        } else if (key == "phone" || key == "mobile") {
                            output += `<a class="info-line" href="tel:${value}">${value}</a><br/>`
                        } else {
                            output += `<span class="info-line">${value}</span><br/>`
                        }
                    }


                }

                return output;
            }
        },
        social: {
            description: 'Social media links',
            action: () => {

                let output = `<span class="section-title">$ ls -la social/</span><br/>`

                for (const [key, value] of Object.entries(socials)) {
                    const label = makeLabel(key);
                    if (key == "comment") {
                        output += `<span class="comment">${value}</span><br/>`
                    } else {
                        output += `<span class="command">${label}</span>`;
                        output += `<a class="info-line" href="${value}" target="_blank">${value}</a><br/>`
                    }

                }
                return output;
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

    function makeLabel(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).replace(/_/g, ' ');
    }

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