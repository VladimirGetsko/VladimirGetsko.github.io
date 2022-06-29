const playVideo = (triggerSelector) => {
    const btnPlay = document.querySelector(triggerSelector);

    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    let player;

    function createPlayer (url) {
        player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${url}`,
            playerVars: { 'autoplay': 1 },
        });
    }

    btnPlay.addEventListener('click', () => {
        const path = btnPlay.getAttribute('data-url');
        createPlayer(path);
        btnPlay.remove();
    });

    
};

export default playVideo;