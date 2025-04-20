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

    const location = document.createElement('p');
    location.setAttribute('id', 'location');
    location.innerText = 'Markham, Ontario, Canada';
    header.appendChild(location);

    const description = document.createElement('p');
    description.setAttribute('id', 'description');
    description.innerText = 'I\'m an 18 year old full-stack developer with a passion for creating web applications and discovering new technologies. I love to learn and am always seeking new challenges.';
    header.appendChild(description);

    const aboutButton = document.createElement('button');
    aboutButton.setAttribute('id', 'about-button');
    aboutButton.innerText = 'About Me';
    header.appendChild(aboutButton);

    const emailButton = document.createElement('button');
    emailButton.setAttribute('id', 'email-button');
    const emailLink = document.createElement('a');
    emailLink.setAttribute('href', 'mailto:natalieltwong@gmail.com');
    emailLink.innerText = 'Email';
    emailButton.appendChild(emailLink);
    header.appendChild(emailButton);

    content.appendChild(header);

    // 
}