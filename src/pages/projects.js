import projectCardCreator from '../components/projectCard';

import project1Page from './projects/project1';
import project2Page from './projects/project2';
import project3Page from './projects/project3';
import project4Page from './projects/project4';

export default function projects() {
    // Set page title
    const title = document.querySelector('title');
    title.innerText = 'Projects | Natalie Wong';

    // Set active page
    const projectsButton = document.querySelector('#projects-button');
    projectsButton.classList.add('active');

    const content = document.querySelector('#content');

    // Header
    const header = document.createElement('header');
    header.setAttribute('id', 'header-container');
    header.classList.add('projects');

    const headerTitle = document.createElement('h1');
    headerTitle.setAttribute('id', 'projects-header-title');
    headerTitle.innerText = 'Projects';
    header.appendChild(headerTitle);

    const headerDescription = document.createElement('p');
    headerDescription.setAttribute('id', 'projects-header-description');
    headerDescription.innerText = 'Here are some of my projects that I have worked on.';
    header.appendChild(headerDescription);

    content.appendChild(header);

    // Projects Section
    const projectsSection = document.createElement('section');
    projectsSection.setAttribute('id', 'projects-container');
    projectsSection.classList.add('projects');

    const project1Card = projectCardCreator('project1', 'Calculator', 'A simple calculator built with HTML, CSS, and JavaScript.', project1Page);
    const project2Card = projectCardCreator('project2', 'Etch-a-Sketch', 'Etch-a-Sketch built with HTML, CSS, and JavaScript.', project2Page);
    const project3Card = projectCardCreator('project3', 'Blinky-ON!', 'A single-player traffic racing game engineered with Java Swing.', project3Page);
    const project4Card = projectCardCreator('project4', 'Resistor Calculator', 'A Python GUI designed to calculate resistor values', project4Page);

    projectsSection.appendChild(project1Card);
    projectsSection.appendChild(project2Card);
    projectsSection.appendChild(project3Card);
    projectsSection.appendChild(project4Card);
    content.appendChild(projectsSection);
}