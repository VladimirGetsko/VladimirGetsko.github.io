const menuBtn = (menuBtnSelector, menuBlockSelector) => {
    const menuBtn = document.querySelector(menuBtnSelector);
    const menuBlock = document.querySelector(menuBlockSelector);
    let toggleTriger = false;

    menuBtn.addEventListener('click', () => {
        if(!toggleTriger) {
            menuBtn.classList.add('open');
            menuBtn.classList.remove('close');
            menuBlock.classList.add('open');
            document.body.style.overflow = 'hidden';
            toggleTriger = true;
        } else {
            menuBtn.classList.remove('open');
            menuBtn.classList.add('close');
            menuBlock.classList.remove('open');
            document.body.style.overflow = '';
            toggleTriger = false;
        }
    })
};

export default menuBtn;