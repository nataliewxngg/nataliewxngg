export default function Home() {
    // Set page title
    const title = document.querySelector('title');
    title.innerText = 'Natalie Wong';

    const article = document.querySelector('article');

    // Header
    const heading = document.createElement('h1');
    heading.setAttribute('id', 'home-heading');
    const headingSpan = document.createElement('span');
    heading.innerText = 'Hey, I\'m Natalie, \nA ';
    headingSpan.innerText = 'Web Developer.';
    heading.appendChild(headingSpan);
    article.appendChild(heading);
}