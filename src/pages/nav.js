import profilePicImg from '../assets/profile.jpg';

const updateNavButtons = nav => {
    const buttons = document.querySelectorAll('#main-nav-links button');

    if (nav.classList.contains('hidden')) {
        buttons.forEach(button => {
            button.textContent = '';
        });
    }
}

const nav = document.querySelector('nav');
const shrinkNavButton = document.getElementById('shrink-nav-button');
shrinkNavButton.addEventListener('click', () => {
    nav.classList.toggle('hidden');
    updateNavButtons(nav);
});

// Remove as more buttons of similar functionality are added
const buttons = document.querySelectorAll('#main-nav-links button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        pageLoad();
        const page = button.getAttribute('id');
        
        if (page === 'home-button') home();
        else if (page === 'experience-button') experience();
        else if (page === 'projects-button') projects();
        else if (page === 'education-button') education();
        else if (page === 'about-button') about();
    });
});

const aboutButtons = document.querySelectorAll('#about-button');
aboutButtons.forEach(button => {
    button.addEventListener('click', () => {
        pageLoad();
        about();
    });
});

export default function nav() {
    const header = document.createElement('header');
    
    const navProfile = document.createElement('div');
    navProfile.setAttribute('id', 'header-profile');

    const profilePic = document.createElement('img');
    profilePic.setAttribute('src', profilePicImg);
    profilePic.setAttribute('alt', 'Natalie Wong Profile Picture');

    const navProfileDescription = document.createElement('div');
    const name = document.createElement('h1');
    name.textContent = 'Natalie Wong';
    const title = document.createElement('p');
    title.textContent = 'Full-Stack Developer';

    navProfileDescription.appendChild(name);
    navProfileDescription.appendChild(title);
    navProfile.appendChild(profilePic);
    navProfile.appendChild(navProfileDescription);

    header.appendChild(navProfile);

    const nav = document.querySelector('nav');
    nav.appendChild(header);
}