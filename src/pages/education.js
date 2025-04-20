export default function education() {
    // Set page title
    const title = document.querySelector('title');
    title.innerText = 'Education | Natalie Wong';

    // Set active page
    const educationButton = document.querySelector('#education-button');
    educationButton.classList.add('active');
}