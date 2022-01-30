window.addEventListener('scroll', animatedBlock);

function animatedBlock() {
  const blocks = document.querySelectorAll('.default-animation');
  const triggerBottom = window.innerHeight / 5 * 4;

  blocks.forEach(block => {
    const blockTop = block.getBoundingClientRect().top;

    if(blockTop < triggerBottom) {
      block.classList.add('show');
    } else {
      block.classList.remove('show');
    }

  });
}

animatedBlock();