export default function addAnimation() {
    const scrollers = document.querySelectorAll('.scroller');

    scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', true);

        const scrollerList = scroller.querySelector('ul');
        const scrollerContent = Array.from(scrollerList.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);

            scrollerList.appendChild(duplicatedItem);
        });
    });
}