import firstLoad from './functions/firstLoad';
import pageLoad from './functions/pageLoad';

import home from './pages/home';
import experience from './pages/experience';
import projects from './pages/projects';
import education from './pages/education';
import about from './pages/about';

import './styles/home.css';

firstLoad();

const buttons = document.querySelectorAll('nav button');
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
