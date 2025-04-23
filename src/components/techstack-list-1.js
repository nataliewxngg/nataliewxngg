import html5Logo from '../assets/techstack-logos/html5-icon.svg';
import css3Logo from '../assets/techstack-logos/css3-icon.svg';
import jsLogo from '../assets/techstack-logos/javascript-icon.svg';
import pythonLogo from '../assets/techstack-logos/python-icon.svg';
import javaLogo from '../assets/techstack-logos/java-icon.svg';
import cppLogo from '../assets/techstack-logos/c++-icon.svg';
import csharpLogo from '../assets/techstack-logos/csharp-icon.svg';

function addAnimation() {
    const scrollers = document.querySelectorAll('.scroller');

    scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', true);

        const scrollerList = document.querySelector('.scroller ul');
        const scrollerContent = Array.from(scrollerList.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);

            scrollerList.appendChild(duplicatedItem);
        });
    });
}

const techStackList1Container = document.createElement('div');
techStackList1Container.classList.add('scroller');

const techStackList1 = document.createElement('ul');

// HTML, CSS, JS, Python, Java, C++, C#
const list1Item1 = document.createElement('li');
const list1Item1Img = document.createElement('img');
list1Item1Img.setAttribute('src', html5Logo);
list1Item1.appendChild(list1Item1Img);
techStackList1.appendChild(list1Item1);

const list1Item2 = document.createElement('li');
list1Item2.innerText = 'HTML';
techStackList1.appendChild(list1Item2);

const list1Item3 = document.createElement('li');
const list1Item3Img = document.createElement('img');
list1Item3Img.setAttribute('src', css3Logo);
list1Item3.appendChild(list1Item3Img);
techStackList1.appendChild(list1Item3);

const list1Item4 = document.createElement('li');
list1Item4.innerText = 'CSS';
techStackList1.appendChild(list1Item4);

const list1Item5 = document.createElement('li');
const list1Item5Img = document.createElement('img');
list1Item5Img.setAttribute('src', jsLogo);
list1Item5.appendChild(list1Item5Img);
techStackList1.appendChild(list1Item5);

const list1Item6 = document.createElement('li');
list1Item6.innerText = 'JavaScript';
techStackList1.appendChild(list1Item6);

const list1Item7 = document.createElement('li');
const list1Item7Img = document.createElement('img');
list1Item7Img.setAttribute('src', pythonLogo);
list1Item7.appendChild(list1Item7Img);
techStackList1.appendChild(list1Item7);

const list1Item8 = document.createElement('li');
list1Item8.innerText = 'Python';
techStackList1.appendChild(list1Item8);

const list1Item9 = document.createElement('li');
const list1Item9Img = document.createElement('img');
list1Item9Img.setAttribute('src', javaLogo);
list1Item9.appendChild(list1Item9Img);
techStackList1.appendChild(list1Item9);

const list1Item10 = document.createElement('li');
list1Item10.innerText = 'Java';
techStackList1.appendChild(list1Item10);

const list1Item11 = document.createElement('li');
const list1Item11Img = document.createElement('img');
list1Item11Img.setAttribute('src', cppLogo);
list1Item11.appendChild(list1Item11Img);
techStackList1.appendChild(list1Item11);

const list1Item12 = document.createElement('li');
list1Item12.innerText = 'C++';
techStackList1.appendChild(list1Item12);

const list1Item13 = document.createElement('li');
const list1Item13Img = document.createElement('img');
list1Item13Img.setAttribute('src', csharpLogo);
list1Item13.appendChild(list1Item13Img);
techStackList1.appendChild(list1Item13);

const list1Item14 = document.createElement('li');
list1Item14.innerText = 'C#';
techStackList1.appendChild(list1Item14);

techStackList1Container.appendChild(techStackList1);
export {techStackList1Container, addAnimation};