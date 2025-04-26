import pageLoad from '../functions/pageLoad.js'; 

export default function projectCard(id, projectName, projectDesc, projectLink) {
    const project = document.createElement('div');
    project.setAttribute('id', id);
    project.setAttribute('class', 'project-card');
    
    const projectDescContainer = document.createElement('div');
    projectDescContainer.setAttribute('class', 'project-desc');

    const projectTitle = document.createElement('h3');
    projectTitle.innerText = projectName;

    const projectDescText = document.createElement('p');
    projectDescText.innerText = projectDesc;

    const projectLearnMore = document.createElement('button');
    projectLearnMore.innerText = 'Learn more';
    projectLearnMore.style.display = 'none';

    projectDescContainer.appendChild(projectTitle);
    projectDescContainer.appendChild(projectDescText);
    projectDescContainer.appendChild(projectLearnMore);

    project.addEventListener('mouseover', () => {
        projectLearnMore.style.display = 'block';
    });
    project.addEventListener('mouseout', () => {
        projectLearnMore.style.display = 'none';
    });
    project.addEventListener('click', () => {
        pageLoad(); 
        projectLink();
    });

    project.appendChild(projectDescContainer);
    return project;
}
