export default function hobbyCard(img, title, desc) {
    const hobbyCard = document.createElement('div');
    hobbyCard.setAttribute('class', 'hobby-card');

    const hobbyImg = document.createElement('img');
    hobbyImg.setAttribute('src', img);
    hobbyImg.setAttribute('alt', title);

    const hobbyTextContainer = document.createElement('div');
    hobbyTextContainer.setAttribute('class', 'hobby-text-container');

    const hobbyTitle = document.createElement('h1');
    hobbyTitle.setAttribute('class', 'hobby-title');
    hobbyTitle.innerText = title;

    const hobbyDesc = document.createElement('p');
    hobbyDesc.setAttribute('class', 'hobby-desc');
    hobbyDesc.innerText = desc;

    hobbyCard.appendChild(hobbyImg);
    hobbyTextContainer.appendChild(hobbyTitle);
    hobbyTextContainer.appendChild(hobbyDesc);
    hobbyCard.appendChild(hobbyTextContainer);

    return hobbyCard;
}