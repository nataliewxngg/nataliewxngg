const projectsContainer = document.createElement('div');
projectsContainer.setAttribute('id', 'projects-container');

const project1 = document.createElement('div');
project1.setAttribute('id', 'project1');
const project1Desc = document.createElement('div');
project1Desc.setAttribute('class', 'project-desc');
const project1Title = document.createElement('h3');
project1Title.innerText = 'Project 1';
const project1DescText = document.createElement('p');
project1DescText.innerText = 'This is a description of project 1.';
project1Desc.appendChild(project1Title);
project1Desc.appendChild(project1DescText);
project1.appendChild(project1Desc);

const project2 = document.createElement('div');
project2.setAttribute('id', 'project2');
const project2Desc = document.createElement('div');
project2Desc.setAttribute('class', 'project-desc');
const project2Title = document.createElement('h3');
project2Title.innerText = 'Project 2';
const project2DescText = document.createElement('p');
project2DescText.innerText = 'This is a description of project 2.';
project2Desc.appendChild(project2Title);
project2Desc.appendChild(project2DescText);
project2.appendChild(project2Desc);

const project3 = document.createElement('div');
const project4 = document.createElement('div');
const project5 = document.createElement('div');
const project6 = document.createElement('div');
const project7 = document.createElement('div');

project1.setAttribute('class', 'project-card');
project2.setAttribute('class', 'project-card');
project3.setAttribute('class', 'project-card');
project4.setAttribute('class', 'project-card');
project5.setAttribute('class', 'project-card');
project6.setAttribute('class', 'project-card');
project7.setAttribute('class', 'project-card');

projectsContainer.appendChild(project1);
projectsContainer.appendChild(project2);
projectsContainer.appendChild(project3);
projectsContainer.appendChild(project4);
projectsContainer.appendChild(project5);
projectsContainer.appendChild(project6);
projectsContainer.appendChild(project7);

export default projectsContainer;