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
    header.setAttribute('id', 'projects-header-container');

    const headerTitle = document.createElement('h1');
    headerTitle.setAttribute('id', 'projects-header-title');
    headerTitle.innerText = 'Projects';
    header.appendChild(headerTitle);

    const headerDescription = document.createElement('p');
    headerDescription.setAttribute('id', 'projects-header-description');
    headerDescription.innerText = 'Here are some of my projects that I have worked on.';
    header.appendChild(headerDescription);

    content.appendChild(header);
}