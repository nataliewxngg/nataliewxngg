import html5Logo from '../assets/techstack-logos/html5-icon.svg';
import css3Logo from '../assets/techstack-logos/css3-icon.svg';
import jsLogo from '../assets/techstack-logos/javascript-icon.svg';
import pythonLogo from '../assets/techstack-logos/python-icon.svg';
import javaLogo from '../assets/techstack-logos/java-icon.svg';
import cppLogo from '../assets/techstack-logos/c++-icon.svg';
import csharpLogo from '../assets/techstack-logos/csharp-icon.svg';

const techStackListContainer = document.createElement('div');
techStackListContainer.classList.add('scroller');

const techStackList = document.createElement('ul');
techStackList.setAttribute('id', 'tech-stack-list-1');

// HTML, CSS, JS, Python, Java, C++, C#
const listItem1 = document.createElement('li');
const listItem1Img = document.createElement('img');
listItem1Img.setAttribute('src', html5Logo);
listItem1.appendChild(listItem1Img);
techStackList.appendChild(listItem1);

const listItem2 = document.createElement('li');
listItem2.innerText = 'HTML';
techStackList.appendChild(listItem2);

const listItem3 = document.createElement('li');
const listItem3Img = document.createElement('img');
listItem3Img.setAttribute('src', css3Logo);
listItem3.appendChild(listItem3Img);
techStackList.appendChild(listItem3);

const listItem4 = document.createElement('li');
listItem4.innerText = 'CSS';
techStackList.appendChild(listItem4);

const listItem5 = document.createElement('li');
const listItem5Img = document.createElement('img');
listItem5Img.setAttribute('src', jsLogo);
listItem5.appendChild(listItem5Img);
techStackList.appendChild(listItem5);

const listItem6 = document.createElement('li');
listItem6.innerText = 'JavaScript';
techStackList.appendChild(listItem6);

const listItem7 = document.createElement('li');
const listItem7Img = document.createElement('img');
listItem7Img.setAttribute('src', pythonLogo);
listItem7.appendChild(listItem7Img);
techStackList.appendChild(listItem7);

const listItem8 = document.createElement('li');
listItem8.innerText = 'Python';
techStackList.appendChild(listItem8);

const listItem9 = document.createElement('li');
const listItem9Img = document.createElement('img');
listItem9Img.setAttribute('src', javaLogo);
listItem9.appendChild(listItem9Img);
techStackList.appendChild(listItem9);

const listItem10 = document.createElement('li');
listItem10.innerText = 'Java';
techStackList.appendChild(listItem10);

const listItem11 = document.createElement('li');
const listItem11Img = document.createElement('img');
listItem11Img.setAttribute('src', cppLogo);
listItem11.appendChild(listItem11Img);
techStackList.appendChild(listItem11);

const listItem12 = document.createElement('li');
listItem12.innerText = 'C++';
techStackList.appendChild(listItem12);

const listItem13 = document.createElement('li');
const listItem13Img = document.createElement('img');
listItem13Img.setAttribute('src', csharpLogo);
listItem13.appendChild(listItem13Img);
techStackList.appendChild(listItem13);

const listItem14 = document.createElement('li');
listItem14.innerText = 'C#';
techStackList.appendChild(listItem14);

techStackListContainer.appendChild(techStackList);
export default techStackListContainer;