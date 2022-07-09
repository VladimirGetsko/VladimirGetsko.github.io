const menuBtn = (menuBtnSelector, menuBlockSelector) => {
    const menuBtn = document.querySelector(menuBtnSelector);
    const menuHeader = document.querySelector(menuBlockSelector);
    const menuLinks = document.querySelectorAll('[data-menu]');
    let toggleTriger = false;

    menuBtn.addEventListener('click', () => {
        if(!toggleTriger) {
            menuBtn.classList.add('open');
            menuHeader.classList.add('open');
            document.body.style.overflow = 'hidden';
            toggleTriger = true;
        } else {
            menuBtn.classList.remove('open');
            menuHeader.classList.remove('open');
            document.body.style.overflow = '';
            toggleTriger = false;
        }
        
    });

    if(window.innerWidth < 992) {
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                setTimeout(() => {
                    menuBtn.classList.remove('open');
                    menuHeader.classList.remove('open');
                    document.body.style.overflow = '';
                    toggleTriger = false;
                }, 800)
            });
        });
    }

    
};

export default menuBtn;