export default function pageLoad() {
    window.scrollTo(0, 0);

    const content = document.getElementById('content');
    content.innerHTML = '';

    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(button => button.classList.remove('active'));
}