const accordion = (triggetsSelector, itemsSelector) => {
    const btns = document.querySelectorAll(triggetsSelector);
    const blocks = document.querySelectorAll(itemsSelector);

    blocks.forEach(block => {
        block.classList.add('fadeInDown');
    });

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.parentNode.classList.toggle('active');
        });
    });

};

export default accordion;