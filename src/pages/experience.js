export default function experience() {
    // Set page title
    const title = document.querySelector('title');
    title.innerText = 'Experience | Natalie Wong';

    // Set active page
    const experienceButton = document.querySelector('#experience-button');
    experienceButton.classList.add('active');
}