export default function projects() {
    // Set page title
    const title = document.querySelector('title');
    title.innerText = 'Projects | Natalie Wong';

    // Set active page
    const projectsButton = document.querySelector('#projects-button');
    projectsButton.classList.add('active');
}