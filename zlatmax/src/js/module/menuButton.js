module.exports  = () => {
    const menuButton = document.querySelector('.icon-menu');
    const menuBody = document.querySelector('.menu__body');
    let openMenu = false;

    menuButton.addEventListener('click', () => {
        if(!openMenu) {
            menuButton.classList.add('menu-open');
            menuBody.classList.add('menu-open');
            openMenu = true;
        } else {
            menuButton.classList.remove('menu-open');
            menuBody.classList.remove('menu-open');
            openMenu = false;

            if (document.documentElement.classList.contains('catalog-open')) {
                document.documentElement.classList.remove('catalog-open')
            }

            if (document.documentElement.classList.contains('sub-menu-open')) {
                document.documentElement.classList.remove('sub-menu-open');
            }
        }
    })

};