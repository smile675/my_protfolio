
onLoad()


function onLoad(){
   displayProgrammingSkills();
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