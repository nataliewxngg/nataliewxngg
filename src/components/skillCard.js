export default function skillCard(skill, svg, desc) {
    const skillCard = document.createElement('div');
    skillCard.setAttribute('class', 'skill-card');

    const skillSVG = document.createElement('img');
    skillSVG.setAttribute('src', svg);
    skillSVG.setAttribute('alt', 'HTML5 Logo');

    const skillTextContainer = document.createElement('div');
    skillTextContainer.setAttribute('class', 'skill-text-container');

    const skillName = document.createElement('h1');
    skillName.setAttribute('class', 'skill-name');
    skillName.innerText = skill;

    const skillDesc = document.createElement('p');
    skillDesc.setAttribute('class', 'skill-desc');
    skillDesc.innerText = desc;

    skillCard.appendChild(skillSVG);
    skillTextContainer.appendChild(skillName);
    skillTextContainer.appendChild(skillDesc);
    skillCard.appendChild(skillTextContainer);
    
    return skillCard;
}