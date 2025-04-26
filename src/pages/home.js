import pageLoad from '../functions/pageLoad.js';
import about from './about.js';

import project1Page from './projects/project1.js';
import project2Page from './projects/project2.js';
import project3Page from './projects/project3.js';

import techStackListContainer from '../components/techstack-list-1.js'
import techStackList2Container from '../components/techstack-list-2.js';

import project1 from '../components/projectCard.js';
import project2 from '../components/projectCard.js';
import project3 from '../components/projectCard.js';

export default function Home() {
    // Set page title
    const title = document.querySelector('title');
    title.innerText = 'Natalie Wong';

    // Set active page
    const homeButton = document.querySelector('#home-button');
    homeButton.classList.add('active');

    const content = document.querySelector('#content');

    // Header
    const header = document.createElement('header');

    const greeting = document.createElement('h1');
    greeting.setAttribute('id', 'greeting');
    const greetingSpan = document.createElement('span');
    greeting.innerText = 'Hey, I\'m Natalie, \nA ';
    greetingSpan.innerText = 'Full-Stack Developer.';
    greeting.appendChild(greetingSpan);
    header.appendChild(greeting);

    const location = document.createElement('div');
    location.setAttribute('id', 'location');
    const locationSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const locationSVGPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    locationSVG.setAttribute('viewBox', '0 0 24 24');
    locationSVGPath.setAttribute(
        'd', 
        'M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z'
    );
    const locationText = document.createElement('p');
    locationText.innerText = 'Markham, Ontario, Canada';
    locationSVG.appendChild(locationSVGPath);
    location.appendChild(locationSVG);
    location.appendChild(locationText);
    header.appendChild(location);

    const description = document.createElement('p');
    description.setAttribute('id', 'description');
    description.innerText = 'I\'m an 18 year old full-stack developer with a passion for creating web applications and discovering new technologies. I love to learn and am always seeking new challenges.';
    header.appendChild(description);

    const buttons = document.createElement('div');
    buttons.setAttribute('id', 'buttons-container');
    const aboutButton = document.createElement('button');
    aboutButton.setAttribute('id', 'about-button');
    aboutButton.innerText = 'About';
    buttons.appendChild(aboutButton);
    aboutButton.addEventListener('click', () => { pageLoad(); about(); });
    const contactMeButton = document.createElement('button');
    contactMeButton.setAttribute('id', 'contact-me-button');
    contactMeButton.innerText = 'Contact Me';
    buttons.appendChild(contactMeButton);
    contactMeButton.addEventListener('click', () => { window.location.replace('mailto: natalieltwong@gmail.com') });
    header.appendChild(buttons);

    content.appendChild(header);

    // My Tech Stack
    const techStackSection = document.createElement('section');
    techStackSection.setAttribute('id', 'tech-stack');
    const techStackTitle = document.createElement('h2');
    techStackTitle.innerText = 'My Tech Stack';

    techStackSection.appendChild(techStackTitle);
    techStackSection.appendChild(techStackListContainer);
    techStackSection.appendChild(techStackList2Container);
    content.appendChild(techStackSection);

    // Projects
    const projectsSection = document.createElement('section');
    projectsSection.setAttribute('id', 'projects');

    const projectsContainer = document.createElement('div');
    projectsContainer.setAttribute('id', 'projects-container');
    
    const project1Card = project1('project1', 'Calculator', 'This is a description of project 1.', project1Page);
    const project2Card = project2('project2', 'Etch-a-Sketch', 'This is a description of project 2.', project2Page);
    const project3Card = project3('project3', 'Blinky-ON!', 'This is a description of project 3.', project3Page);

    projectsContainer.appendChild(project1Card);
    projectsContainer.appendChild(project2Card);
    projectsContainer.appendChild(project3Card);

    const projectsTitle = document.createElement('h2');
    projectsTitle.innerText = 'Projects';
    const projectsLearnMore = document.createElement('p');
    projectsLearnMore.innerText = 'Learn more';

    projectsSection.appendChild(projectsTitle);
    projectsSection.appendChild(projectsLearnMore);
    projectsSection.appendChild(projectsContainer);
    content.appendChild(projectsSection);

    // About
    const aboutSection = document.createElement('section');
    aboutSection.setAttribute('id', 'about');
    const aboutTitle = document.createElement('h2');
    aboutTitle.innerText = 'About Me';
    aboutSection.appendChild(aboutTitle);
    content.appendChild(aboutSection);
}