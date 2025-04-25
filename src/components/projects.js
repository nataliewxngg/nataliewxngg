const projectsContainer = document.createElement('div');
projectsContainer.setAttribute('id', 'projects-container');

const project1 = document.createElement('div');
project1.setAttribute('id', 'project1');
const project1Desc = document.createElement('div');
project1Desc.setAttribute('class', 'project-desc');
const project1Title = document.createElement('h3');
project1Title.innerText = 'Calculator';
const project1DescText = document.createElement('p');
project1DescText.innerText = 'This is a description of project 1.'; // edit
project1Desc.appendChild(project1Title);
project1Desc.appendChild(project1DescText);
project1.appendChild(project1Desc);

const project2 = document.createElement('div');
project2.setAttribute('id', 'project2');
const project2Desc = document.createElement('div');
project2Desc.setAttribute('class', 'project-desc');
const project2Title = document.createElement('h3');
project2Title.innerText = 'Etch-a-Sketch';
const project2DescText = document.createElement('p');
project2DescText.innerText = 'This is a description of project 2.'; // edit
project2Desc.appendChild(project2Title);
project2Desc.appendChild(project2DescText);
project2.appendChild(project2Desc);

const project3 = document.createElement('div');
project3.setAttribute('id', 'project3');
const project3Desc = document.createElement('div');
project3Desc.setAttribute('class', 'project-desc');
const project3Title = document.createElement('h3');
project3Title.innerText = 'Blinky-ON!';
const project3DescText = document.createElement('p');
project3DescText.innerText = 'This is a description of project 3.'; // edit 
project3Desc.appendChild(project3Title);
project3Desc.appendChild(project3DescText);
project3.appendChild(project3Desc);

project1.setAttribute('class', 'project-card');
project2.setAttribute('class', 'project-card');
project3.setAttribute('class', 'project-card');

projectsContainer.appendChild(project1);
projectsContainer.appendChild(project2);
projectsContainer.appendChild(project3);

export default projectsContainer;