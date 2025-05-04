export default function chapter(num, title, desc) {
    const chapter = document.createElement('div');
    chapter.setAttribute('class', 'chapter');

    const chapterNum = document.createElement('button');
    chapterNum.setAttribute('class', 'chapter-number');
    chapterNum.innerText = num;

    const chapterDescContainer = document.createElement('div');
    chapterDescContainer.setAttribute('class', 'chapter-desc');

    const chapterTitle = document.createElement('h1');
    chapterTitle.innerText = title;

    const chapterDescText = document.createElement('p');
    chapterDescText.innerText = desc;

    chapterDescContainer.appendChild(chapterTitle);
    chapterDescContainer.appendChild(chapterDescText);

    chapter.appendChild(chapterDescContainer);
    chapter.appendChild(chapterNum);
    return chapter;
}