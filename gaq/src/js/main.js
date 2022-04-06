function stepForm() {
    const steps = document.querySelectorAll('.form__step');
    const prevBtn = document.querySelector('.prev__step');
    const nextBtn = document.querySelector('.next__step');
    const form = document.querySelector('.steps__form');
    const stepsNumbers = document.querySelectorAll('.steps__number');
    const progress = document.querySelector('.progress__success');
    const finishBlock = document.querySelector('.finish');

    form.addEventListener('submit', e => e.preventDefault());

    let formStepIndex = 0;

    prevBtn.addEventListener('click', () => {
        formStepIndex--;
        stepsNumbers[formStepIndex + 1].classList.remove('active__number');
        updateFormSteps();
    });

    nextBtn.addEventListener('click', () => {
        if(formStepIndex < steps.length) {
            formStepIndex++;
            updateFormSteps();
        }
    });

    function updateFormSteps() {
        steps.forEach(step => {
            step.classList.contains('active') && step.classList.remove('active');
        });

        if(formStepIndex < steps.length) {
            steps[formStepIndex].classList.add('active');
            stepsNumbers[formStepIndex].classList.add('active__number');
        }

        if(formStepIndex === 0) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'block';
        }

        if(formStepIndex === steps.length) {
            finishBlock.style.display = 'block';
            form.style.display = 'none';
        }

        const actives = document.querySelectorAll('.active__number');
        const percent = (((actives.length - 1) / (stepsNumbers.length - 1)) * 100).toFixed(2) + '%';

        progress.style.width = percent;
    }


    updateFormSteps();
}

if(document.querySelector('.form__step')) {
    stepForm();
}
