module.exports  = (e) => {
    const targetElement = e.target;

    if(targetElement.closest('[data-parent]')) {
        e.preventDefault();

        const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
        const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);

        if(subMenu) {
            const activeLink = document.querySelector('.sub-menu-active');
            const activeBlock = document.querySelector('.sub-menu-open');

            if(activeLink && activeLink !== targetElement) {
                activeLink.classList.remove('sub-menu-active');
                activeBlock.classList.remove('sub-menu-open');
                document.documentElement.classList.remove('sub-menu-open');
            }

            document.documentElement.classList.toggle('sub-menu-open');
            targetElement.classList.toggle('sub-menu-active');
            subMenu.classList.toggle('sub-menu-open');
            
        } else {
            console.log("Нет такого подменю");
        }
    }

    if(targetElement.closest('.menu-top-header__link_catalog')) {
        e.preventDefault();
        document.documentElement.classList.add('catalog-open');
    }

    if(targetElement.closest('.menu-catalog__back')) {
        e.preventDefault();
        document.documentElement.classList.remove('catalog-open');

        document.querySelector('.sub-menu-active') ? document.querySelector('.sub-menu-active').classList.remove('sub-menu-active') : null;
        document.querySelector('.sub-menu-open') ? document.querySelector('.sub-menu-open').classList.remove('sub-menu-open') : null;

        document.documentElement.classList.remove('sub-catalog-open');
    }

    if(targetElement.closest('.sub-menu-catalog__back')) {
        e.preventDefault();

        document.documentElement.classList.remove('sub-menu-open');
        document.querySelector('.sub-menu-active') ? document.querySelector('.sub-menu-active').classList.remove('sub-menu-active') : null;
        document.querySelector('.sub-menu-open') ? document.querySelector('.sub-menu-open').classList.remove('sub-menu-open') : null;
    }
};