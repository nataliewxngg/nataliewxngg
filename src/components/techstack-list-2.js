import gitLogo from '../assets/techstack-logos/git-icon.svg';
import vscodeLogo from '../assets/techstack-logos/vscode-icon.svg';
import pycharmLogo from '../assets/techstack-logos/pycharm-icon.svg';
import intellijLogo from '../assets/techstack-logos/intellij-icon.svg';
import eclipseLogo from '../assets/techstack-logos/eclipse-icon.svg';
import jiraLogo from '../assets/techstack-logos/jira-icon.svg';
import figmaLogo from '../assets/techstack-logos/figma-icon.svg';

const techStackListContainer = document.createElement('div');
techStackListContainer.classList.add('scroller');

const techStackList = document.createElement('ul');
techStackList.setAttribute('id', 'tech-stack-list-2');

// Git, VSCode, PyCharm, IntelliJ, Eclipse IDE, Jira, Figma
const list1Item1 = document.createElement('li');
const list1Item1Img = document.createElement('img');
list1Item1Img.setAttribute('src', gitLogo);
list1Item1.appendChild(list1Item1Img);
techStackList.appendChild(list1Item1);

const list1Item2 = document.createElement('li');
list1Item2.innerText = 'Git';
techStackList.appendChild(list1Item2);

const list1Item3 = document.createElement('li');
const list1Item3Img = document.createElement('img');
list1Item3Img.setAttribute('src', vscodeLogo);
list1Item3.appendChild(list1Item3Img);
techStackList.appendChild(list1Item3);

const list1Item4 = document.createElement('li');
list1Item4.innerText = 'VSCode';
techStackList.appendChild(list1Item4);

const list1Item5 = document.createElement('li');
const list1Item5Img = document.createElement('img');
list1Item5Img.setAttribute('src', pycharmLogo);
list1Item5.appendChild(list1Item5Img);
techStackList.appendChild(list1Item5);

const list1Item6 = document.createElement('li');
list1Item6.innerText = 'PyCharm';
techStackList.appendChild(list1Item6);

const list1Item7 = document.createElement('li');
const list1Item7Img = document.createElement('img');
list1Item7Img.setAttribute('src', intellijLogo);
list1Item7.appendChild(list1Item7Img);
techStackList.appendChild(list1Item7);

const list1Item8 = document.createElement('li');
list1Item8.innerText = 'IntelliJ';
techStackList.appendChild(list1Item8);

const list1Item9 = document.createElement('li');
const list1Item9Img = document.createElement('img');
list1Item9Img.setAttribute('src', eclipseLogo);
list1Item9.appendChild(list1Item9Img);
techStackList.appendChild(list1Item9);

const list1Item10 = document.createElement('li');
list1Item10.innerText = 'Eclipse';
techStackList.appendChild(list1Item10);

const list1Item11 = document.createElement('li');
const list1Item11Img = document.createElement('img');
list1Item11Img.setAttribute('src', jiraLogo);
list1Item11.appendChild(list1Item11Img);
techStackList.appendChild(list1Item11);

const list1Item12 = document.createElement('li');
list1Item12.innerText = 'Jira';
techStackList.appendChild(list1Item12);

const list1Item13 = document.createElement('li');
const list1Item13Img = document.createElement('img');
list1Item13Img.setAttribute('src', figmaLogo);
list1Item13.appendChild(list1Item13Img);
techStackList.appendChild(list1Item13);

const list1Item14 = document.createElement('li');
list1Item14.innerText = 'Figma';
techStackList.appendChild(list1Item14);

techStackListContainer.appendChild(techStackList);
export default techStackListContainer;