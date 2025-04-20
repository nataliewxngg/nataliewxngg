export default function about() {
    // Set page title
    const title = document.querySelector('title');
    title.innerText = 'About | Natalie Wong';

    // Set active page
    const aboutButton = document.querySelector('#about-button');
    aboutButton.classList.add('active');
}