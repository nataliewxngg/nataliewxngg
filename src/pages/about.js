import profileImage from '../assets/profile-pic.jpg';

import chapter from '../components/chapter'

export default function about() {
    // Set page title
    const title = document.querySelector('title');
    title.innerText = 'About | Natalie Wong';

    // Set active page
    const aboutButton = document.querySelector('#about-button');
    aboutButton.classList.add('active');

    const content = document.querySelector('#content');

    // Header
    const header = document.createElement('header');
    header.setAttribute('id', 'header-container');
    header.classList.add('about');

    const headerTextContainer = document.createElement('div');
    headerTextContainer.setAttribute('id', 'header-text-container');

    const location = document.createElement('p');
    location.setAttribute('id', 'location');
    location.innerText = 'Based in Canada';

    const headerTitle = document.createElement('h1');
    headerTitle.setAttribute('id', 'header-title');
    headerTitle.innerText = 'About Me';

    const headerDescription = document.createElement('p');
    headerDescription.setAttribute('id', 'header-desc');
    headerDescription.innerText = 'Hi! I\'m Natalie, an ambitious computer engineering student at the University of Waterloo. As a driven individual, I have cultivated an immense passion and developed a solid foundation in various aspects of software development, establishing proficiency in Java, Python, C++, HTML, CSS, and JavaScript. With my collection of skills and expertise, I am eager to accelerate the ongoing growth of today\'s technologies through meaningful and collaborative work.'
    
    const headerImage = document.createElement('img');
    headerImage.setAttribute('id', 'header-image');
    headerImage.setAttribute('src', profileImage);
    headerImage.setAttribute('alt', 'Natalie Wong');
    
    headerTextContainer.appendChild(location);
    headerTextContainer.appendChild(headerTitle);
    headerTextContainer.appendChild(headerDescription);
    header.appendChild(headerTextContainer);
    header.appendChild(headerImage);
    content.appendChild(header);

    // Story
    const storySection = document.createElement('section');
    storySection.setAttribute('id', 'story-container');
    storySection.classList.add('about');

    const storyTitle = document.createElement('h2');
    storyTitle.setAttribute('id', 'story-title');
    storyTitle.innerText = 'My Story';

    const story = document.createElement('div');
    story.setAttribute('id', 'story');
    story.appendChild(chapter(1, 'Chapter 1', 'Chapter 1 Content'));
    story.appendChild(chapter(2, 'Chapter 2', 'Chapter 2 Content'));
    story.appendChild(chapter(3, 'Chapter 3', 'Chapter 3 Content'));
    story.appendChild(chapter(4, 'Chapter 4', 'Chapter 4 Content'));

    storySection.appendChild(storyTitle);
    storySection.appendChild(story);

    content.appendChild(storySection);

    // Skills
    const skillsSection = document.createElement('section');
    skillsSection.setAttribute('id', 'skills-container');
    skillsSection.classList.add('about');

    const skillsTitle = document.createElement('h2');
    skillsTitle.setAttribute('id', 'skills-title');
    skillsTitle.innerText = 'Skills';

    const skillsDescription = document.createElement('p');
    skillsDescription.setAttribute('id', 'skills-desc');
    skillsDescription.innerText = 'Skills here.';

    skillsSection.appendChild(skillsTitle);
    skillsSection.appendChild(skillsDescription);

    content.appendChild(skillsSection);

    // Interests and Hobbies
    const hobbiesSection = document.createElement('section');   

    hobbiesSection.setAttribute('id', 'hobbies-container');
    hobbiesSection.classList.add('about');

    const hobbiesTitle = document.createElement('h2');
    hobbiesTitle.setAttribute('id', 'hobbies-title');
    hobbiesTitle.innerText = 'Interests and Hobbies';

    const hobbiesDescription = document.createElement('p');
    hobbiesDescription.setAttribute('id', 'hobbies-description');
    hobbiesDescription.innerText = 'Hobbies here.';

    hobbiesSection.appendChild(hobbiesTitle);
    hobbiesSection.appendChild(hobbiesDescription);

    content.appendChild(hobbiesSection);
}