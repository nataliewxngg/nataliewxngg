import pageLoad from '../functions/pageLoad';

import aboutPage from './about';
import projectsPage from './projects';
import project1Page from './projects/project1';
import project2Page from './projects/project2';

import techStackListContainer from '../components/techstack-list-1'
import techStackList2Container from '../components/techstack-list-2';
import projectCardCreator from '../components/projectCard';
import svgElementCreator from '../components/svgElement';

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
    header.setAttribute('id', 'header-container')
    header.classList.add('home');

    const greeting = document.createElement('h1');
    const greetingSpan = document.createElement('span');
    greeting.innerText = 'Hey, I\'m Natalie, \nA ';
    greetingSpan.innerText = 'Full-Stack Developer.';
    greeting.appendChild(greetingSpan);
    header.appendChild(greeting);

    const location = document.createElement('div');
    location.setAttribute('id', 'location-container');

    const locationSVG = svgElementCreator(
        'http://www.w3.org/2000/svg', 
        '0 0 24 24', 
        'M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z'
    );
    const locationText = document.createElement('p');
    locationText.innerText = 'Markham, Ontario, Canada';
    location.appendChild(locationSVG);
    location.appendChild(locationText);
    header.appendChild(location);

    const description = document.createElement('p');
    description.innerText = 'I\'m an 18 year old full-stack developer with a passion for creating web applications and discovering new technologies. I love to learn and am always seeking new challenges.';
    header.appendChild(description);

    const buttons = document.createElement('div');
    buttons.setAttribute('id', 'buttons-container');
    const aboutButton = document.createElement('button');
    aboutButton.setAttribute('id', 'about-button');
    aboutButton.innerText = 'About';
    buttons.appendChild(aboutButton);
    aboutButton.addEventListener('click', () => { 
        pageLoad(); 
        aboutPage(); 
    });
    const contactMeButton = document.createElement('button');
    contactMeButton.classList.add('email-button');
    contactMeButton.innerText = 'Contact Me';
    buttons.appendChild(contactMeButton);
    contactMeButton.addEventListener('click', () => { window.location.replace('mailto: natalieltwong@gmail.com'); })
    header.appendChild(buttons);

    content.appendChild(header);

    // My Tech Stack
    const techStackSection = document.createElement('section');
    techStackSection.setAttribute('id', 'tech-stack-container');
    techStackSection.classList.add('home');
    const techStackTitle = document.createElement('h2');
    techStackTitle.innerText = 'My Tech Stack';

    techStackSection.appendChild(techStackTitle);
    techStackSection.appendChild(techStackListContainer);
    techStackSection.appendChild(techStackList2Container);
    content.appendChild(techStackSection);

    // Projects
    const projectsSection = document.createElement('section');
    projectsSection.setAttribute('id', 'projects-section');
    projectsSection.classList.add('home');

    const projectsContainer = document.createElement('div');
    projectsContainer.setAttribute('id', 'projects-container');
    const project1Card = projectCardCreator('project1', 'Calculator', 'Simple calculator built with HTML, CSS, and JavaScript.', project1Page, 'https://nataliewxngg.github.io/calculator/');
    const project2Card = projectCardCreator('project2', 'Etch-a-Sketch', 'Etch-a-Sketch built with HTML, CSS, and JavaScript.', project2Page, 'https://nataliewxngg.github.io/etch-a-sketch/');
    projectsContainer.appendChild(project1Card);
    projectsContainer.appendChild(project2Card);

    const projectsTitle = document.createElement('h2');
    projectsTitle.innerText = 'Projects';
    const projectsLearnMore = document.createElement('p');
    projectsLearnMore.innerText = 'Learn more';

    projectsLearnMore.addEventListener('click', () => {
        pageLoad();
        projectsPage();
    });

    projectsSection.appendChild(projectsTitle);
    projectsSection.appendChild(projectsLearnMore);
    projectsSection.appendChild(projectsContainer);
    content.appendChild(projectsSection);

    // Get in Touch
    const getInTouchSection = document.createElement('section');
    getInTouchSection.setAttribute('id', 'get-in-touch');
    const getInTouchTitle = document.createElement('h2');
    getInTouchTitle.innerText = 'Get in Touch with Me';

    const emailButton = document.createElement('button');
    emailButton.classList.add('email-button');
    const emailButtonSVG = svgElementCreator('http://www.w3.org/2000/svg', '0 0 24 24', 'M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z');
    const emailButtonText = document.createElement('p');
    emailButtonText.innerText = 'Email';
    emailButton.appendChild(emailButtonSVG);
    emailButton.appendChild(emailButtonText);
    
    // LinkedIn
    const linkedInButton = document.createElement('button');
    linkedInButton.classList.add('linkedin-button');
    const linkedInButtonSVG = svgElementCreator('http://www.w3.org/2000/svg', '0 0 50 50', 'M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z');
    const linkedInButtonText = document.createElement('p');
    linkedInButtonText.innerText = 'LinkedIn';
    linkedInButton.appendChild(linkedInButtonSVG);
    linkedInButton.appendChild(linkedInButtonText);

    // Github
    const githubButton = document.createElement('button');
    githubButton.classList.add('github-button');
    const githubButtonSVG = svgElementCreator('http://www.w3.org/2000/svg', '0 0 30 30', 'M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z');
    const githubButtonText = document.createElement('p');
    githubButtonText.innerText = 'GitHub';
    githubButton.appendChild(githubButtonSVG);
    githubButton.appendChild(githubButtonText);
    
    // Discord
    const discordButton = document.createElement('button'); 
    discordButton.classList.add('discord-button');
    const discordButtonSVG = svgElementCreator('http://www.w3.org/2000/svg', '0 -28.5 256 256', 'M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z');
    const discordButtonText = document.createElement('p');
    discordButtonText.innerText = 'Discord';
    discordButton.appendChild(discordButtonSVG);
    discordButton.appendChild(discordButtonText);

    getInTouchSection.appendChild(getInTouchTitle);
    getInTouchSection.appendChild(emailButton);
    emailButton.addEventListener('click', () => { window.location.replace('mailto: natalieltwong@gmail.com'); });
    getInTouchSection.appendChild(linkedInButton);
    linkedInButton.addEventListener('click', () => { window.open('https://www.linkedin.com/in/nataliewxngg/', '_blank'); });
    getInTouchSection.appendChild(githubButton);
    githubButton.addEventListener('click', () => { window.open('https://github.com/nataliewxngg', '_blank'); });
    getInTouchSection.appendChild(discordButton);
    discordButton.addEventListener('click', () => { window.open('https://discord.com/users/686254417938350251', '_blank'); });
    content.appendChild(getInTouchSection);
}