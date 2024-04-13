
onLoad()


function onLoad(){
   displayProgrammingSkills();
   displayDevelopmentSkills();
   displayCertifications();
   displayProjectList();
}


function displayProgrammingSkills(){
    let skillElements= document.querySelector('.skills_container');
let innerHtml = '';


programmingSkills.forEach(skill=>{
    innerHtml += `
    <div class="card">
                    <img class="logo" src="./assets/skill-logo/${skill.logo}"></img>
                    <div class="title">${skill.name}</div>
                </div>
    `;
});

skillElements.innerHTML = innerHtml;

}

function displayDevelopmentSkills(){
    let developmentSkillElement = document.querySelector('.development_skill');
    let innerHTML = '';


    developmentSkills.forEach(skill=>{
        let name = skill.name;
        let level = skill.level;
        innerHTML += `
        <div class="skill_card">
                    <div class="skill_title">${name}</div>
                    <div class="skill_rating">
                        <div class="progress" style="width: ${level}%"></div>
                    </div>
                </div>
        `
    });

    developmentSkillElement.innerHTML = innerHTML;

}


function displayCertifications(){
    let certificateElement = document.querySelector('.certificate_container');
    let innerHTML = '';

    certificationList.forEach(item => {
      let name = item.name;
      let complete = item.complete;
      let level = item.progress;
      let icon = complete
      ? `<i class="fas fa-check-circle" style="color: var(--primary_color)"></i>`
      :`<i class="far fa-circle"></i>`;

      innerHTML +=`
      <div class="single_certificate_container">

      <div class="single_certificate"> 
                    ${icon}
                    <div class="certificate_title">
                        ${name}
                    </div>
                </div>
                <div class="skill_rating">
                <div class="progress" style="width: ${level}%"></div>
            </div>
      
      
      </div>
      
      `
    });

    certificateElement.innerHTML = innerHTML;

}



function displayProjectList(){
    let projectlistElement = document.querySelector('.projects_container');
    let innerHTML = '';

    myProjectList.forEach(project=>{
        let name = project.name;
        let logo = project.logo;
        let desc = project.desc;
        let technologies = project.technologies;
        let techHtml = '';
        technologies.forEach(tech =>{
            techHtml += `
            <span class="single_technology">
                            ${tech}
                        </span>
            `;
        });

        innerHTML +=`

        <div class="single_project">
        <div class="project_heading">
            <img src="/assets/project-logo/${logo}" alt="img">
           <div>
            <div class="project_name">${name}</div>
            <div class="project_description">
                ${desc}
            </div>
           </div>
        </div>
        <div class="project_technologies">
            ${techHtml}
        </div>                    
    </div>
        
        `;
    });

    projectlistElement.innerHTML = innerHTML;
}