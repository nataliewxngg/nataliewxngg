const projectsContainer = document.createElement('div');
projectsContainer.setAttribute('id', 'projects-container');

export default function projectCard(projectName, projectDesc) {
    const project = document.createElement('div');
    
    const projectDescContainer = document.createElement('div');
    projectDescContainer.setAttribute('class', 'project-desc');

    const projectTitle = document.createElement('h3');
    projectTitle.innerText = projectName;

    const projectDescText = document.createElement('p');
    projectDescText.innerText = projectDesc;

    projectDescContainer.appendChild(projectTitle);
    projectDescContainer.appendChild(projectDescText);

    project.setAttribute('class', 'project-card');
    project.appendChild(projectDescContainer);
    return project;
}
