const counter = (buttonSelector, inputSelector) => {
    const btns = document.querySelectorAll(buttonSelector);

    btns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();

            const direction = this.dataset.direction;
            const inputQuantity = this.parentElement.querySelector(inputSelector);
            const currentValue = +inputQuantity.value;
            let newValue;

            if(direction === 'plus') {
                newValue = currentValue + 1 <= 20 ? currentValue + 1 : 20;
            } else {
                newValue = currentValue - 1 > 1 ? currentValue - 1 : 1;
            }

            inputQuantity.value = newValue;
        });
    });
};

export default counter;