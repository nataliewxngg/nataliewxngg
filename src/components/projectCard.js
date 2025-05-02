import pageLoad from '../functions/pageLoad.js'; 
import rightArrow from '../assets/right-arrow.svg';

export default function projectCard(id, projectName, projectDesc, projectLink, projectLinkAlt) {
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
    const projectLearnMoreText = document.createElement('p');
    projectLearnMoreText.innerText = 'Learn More';
    const projectLearnMoreSVG = document.createElement('img');
    projectLearnMoreSVG.setAttribute('src', rightArrow);
    projectLearnMore.appendChild(projectLearnMoreText);
    projectLearnMore.appendChild(projectLearnMoreSVG);

    projectDescContainer.appendChild(projectTitle);
    projectDescContainer.appendChild(projectDescText);
    projectDescContainer.appendChild(projectLearnMore);

    // Add click event to redirect to respective project page
    project.addEventListener('click', () => {
        // pageLoad(); 
        // projectLink();
        window.open(projectLinkAlt, '_blank');
    });

    project.appendChild(projectDescContainer);
    return project;
}
