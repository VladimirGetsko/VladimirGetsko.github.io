const headerScroll = (headerSelector) => {
    const header = document.querySelector(headerSelector);

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 750) {
            header.classList.add('header-scroll');
        } else {
            header.classList.remove('header-scroll');
        }
    });
};

export default headerScroll;