export default function Home() {
    // Set page title
    const title = document.querySelector('title');
    title.innerText = 'Natalie Wong';

    // Set active page
    const homeButton = document.querySelector('#home-button');
    homeButton.classList.add('active');

    const article = document.querySelector('#content header');

    // Header
    const heading = document.createElement('h1');
    heading.setAttribute('id', 'home-heading');
    const headingSpan = document.createElement('span');
    heading.innerText = 'Hey, I\'m Natalie, \nA ';
    headingSpan.innerText = 'Web Developer.';
    heading.appendChild(headingSpan);
    article.appendChild(heading);
}