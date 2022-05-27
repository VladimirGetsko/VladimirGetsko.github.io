const checked = (labelsBtnSelector, radioSelector, contentSelector, display = 'block') => {
    const labelsBtn = document.querySelector(labelsBtnSelector);
    const radioBtns = document.querySelectorAll(radioSelector);
    const content = document.querySelectorAll(contentSelector);

    function removeChecked() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        radioBtns.forEach(item => {
            item.checked = false;
        });
    };

    function showChecked (i = 1) {
        content[i].style.display = display;
        radioBtns[i].checked = true;
    };

    removeChecked();
    showChecked();

    radioBtns.forEach((radio, i) => {
        radio.addEventListener('change', (e) => {
            const target = e.target
            
            if(target == radio || target.parentNode == radio) {
                removeChecked();
                showChecked(i);
            }
            console.log(target, radio);
    
        });
    })
    

};

export default checked;