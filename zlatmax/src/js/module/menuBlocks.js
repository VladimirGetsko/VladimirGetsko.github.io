module.exports  = () => {
    const menuBlocks = document.querySelectorAll('.sub-menu-catalog__block');

    if(menuBlocks.length) {
        menuBlocks.forEach(menuBlock => {
            const menuBlockItems = menuBlock.querySelectorAll('.sub-menu-catalog__category').length;
            menuBlock.classList.add(`sub-menu-catalog__block_${menuBlockItems}`);
        });
    }
}