import home from "../pages/home";

export default function firstLoad() {
    const nav = document.querySelector('nav');

    const shrinkNavButton = document.getElementById('shrink-nav-button');
    shrinkNavButton.addEventListener('click', () => {
        nav.classList.toggle('hidden');
    });

    home();
}