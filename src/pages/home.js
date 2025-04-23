import pageLoad from '../functions/pageLoad.js';
import about from './about.js';

import {techStackList1Container} from '../components/techstack-list-1.js'

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
    techStackSection.appendChild(techStackList1Container);
    content.appendChild(techStackSection);

    /*
    techStackList1Container.classList.add('wrapper');
    techStackList1Container.setAttribute('id', 'tech-stack-list-1');
    // HTML
    const list1Item1 = document.createElement('div');
    list1Item1.classList.add('item');
    list1Item1.classList.add('item-1');
    list1Item1.textContent = 'HTML';
    techStackList1Container.appendChild(list1Item1);
    // CSS
    const list1Item2 = document.createElement('div');
    list1Item2.classList.add('item');
    list1Item2.classList.add('item-2');
    list1Item2.textContent = 'CSS';
    techStackList1Container.appendChild(list1Item2);
    // JS
    const list1Item3 = document.createElement('div');
    list1Item3.classList.add('item');
    list1Item3.classList.add('item-3');
    list1Item3.textContent = 'JavaScript';
    techStackList1Container.appendChild(list1Item3);
    // Python
    const list1Item4 = document.createElement('div');
    list1Item4.classList.add('item');
    list1Item4.classList.add('item-4');
    list1Item4.textContent = 'Python';
    techStackList1Container.appendChild(list1Item4);
    // Java
    const list1Item5 = document.createElement('div');
    list1Item5.classList.add('item');
    list1Item5.classList.add('item-5');
    list1Item5.textContent = 'Java';
    techStackList1Container.appendChild(list1Item5);
    // C++
    const list1Item6 = document.createElement('div');
    list1Item6.classList.add('item');
    list1Item6.classList.add('item-6');
    list1Item6.textContent = 'C++';
    techStackList1Container.appendChild(list1Item6);
    // C#
    const list1Item7 = document.createElement('div');
    list1Item7.classList.add('item');
    list1Item7.classList.add('item-7');
    list1Item7.textContent = 'C#';
    techStackList1Container.appendChild(list1Item7);
    
    const techStackList2Container = document.createElement('div');
    techStackList2Container.classList.add('wrapper');
    techStackList2Container.setAttribute('id', 'tech-stack-list-2');
    // Git
    const list2Item1 = document.createElement('div');
    list2Item1.classList.add('item');
    list2Item1.classList.add('item-1');
    list2Item1.textContent = 'Git';
    techStackList2Container.appendChild(list2Item1);
    // VSCode
    const list2Item2 = document.createElement('div');
    list2Item2.classList.add('item');
    list2Item2.classList.add('item-2');
    list2Item2.textContent = 'VSCode';
    techStackList2Container.appendChild(list2Item2);
    // PyCharm
    const list2Item3 = document.createElement('div');
    list2Item3.classList.add('item');
    list2Item3.classList.add('item-3');
    list2Item3.textContent = 'PyCharm';
    techStackList2Container.appendChild(list2Item3);
    // IntelliJ
    const list2Item4 = document.createElement('div');
    list2Item4.classList.add('item');
    list2Item4.classList.add('item-4');
    list2Item4.textContent = 'IntelliJ';
    techStackList2Container.appendChild(list2Item4);
    // Eclipse IDE
    const list2Item5 = document.createElement('div');
    list2Item5.classList.add('item');
    list2Item5.classList.add('item-5');
    list2Item5.textContent = 'Eclipse IDE';
    techStackList2Container.appendChild(list2Item5);
    // Jira
    const list2Item6 = document.createElement('div');
    list2Item6.classList.add('item');
    list2Item6.classList.add('item-6');
    list2Item6.textContent = 'Jira';
    techStackList2Container.appendChild(list2Item6);
    // Figma
    const list2Item7 = document.createElement('div');
    list2Item7.classList.add('item');
    list2Item7.classList.add('item-7');
    list2Item7.textContent = 'Figma';
    techStackList2Container.appendChild(list2Item7);

    techStack.appendChild(techStackTitle);
    techStack.appendChild(techStackList1Container);
    techStack.appendChild(techStackList2Container);
    content.appendChild(techStack);

    */

    // Projects
    const projectsSection = document.createElement('section');
    projectsSection.setAttribute('id', 'projects');
    const projectsTitle = document.createElement('h2');
    projectsTitle.innerText = 'Projects';
    projectsSection.appendChild(projectsTitle);
    content.appendChild(projectsSection);

    // About
    const aboutSection = document.createElement('section');
    aboutSection.setAttribute('id', 'about');
    const aboutTitle = document.createElement('h2');
    aboutTitle.innerText = 'About Me';
    aboutSection.appendChild(aboutTitle);
    content.appendChild(aboutSection);
}