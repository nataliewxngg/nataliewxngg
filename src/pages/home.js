import pageLoad from '../functions/pageLoad.js';
import about from './about.js';

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

    // 
}