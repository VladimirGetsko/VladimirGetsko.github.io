const printTextFunc = () => {
  const printElems = document.querySelectorAll('.print');

  const print = (elem) => {
    const delay = elem.dataset.textDelay || 2000;
    const startDelay = elem.dataset.startDelay || 0;
    const remodeDelay = elem.dataset.remodeDelay || 1000;
    const addSpeed = elem.dataset.addSpeed || 50;
    const removeSpeed = elem.dataset.removeSpeed || 20;
    const text = elem.textContent.replace(/\s+/g, ' ').trim();

    let count = 0;
    let newText = '';
    
    elem.textContent = '';
    
    const addPrint = () => {
      let interval;

      interval = setInterval(() => {
        newText += text[count];
        elem.textContent = newText;
        count++;
  
        if(count === text.length) {
          clearInterval(interval);
          
          setTimeout(removePrint, remodeDelay)
        }
      }, addSpeed);
    }

    const removePrint = () => {
      let interval;

      interval = setInterval(() => {

        if(newText.length) {
          newText = newText.slice(0, -1);
          elem.textContent = newText;
          count--;
        } else {
          clearInterval(interval);

          setTimeout(addPrint, delay)
        }
      }, removeSpeed);
    }
    
    setTimeout(addPrint, startDelay);
    
  }

  printElems.forEach(elem => {
    print(elem);
  })

}

printTextFunc();