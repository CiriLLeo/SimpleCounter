document.addEventListener('DOMContentLoaded', function () {
  const counter = {
    value: 0,
    paused: false,
    display: document.getElementById('mainCanvas'),
    text: document.getElementById('counterText'),
  };

  const audio = {
    increment: createAudio('audioIncrement'),
    decrement: createAudio('audioDecrement'),
    reset: createAudio('audioReset'),
    soundtrack: createAudio('soundTrack'),
  };

  const buttons = {
    increment: createButton('+', 'increment-button', incrementCounter),
    decrement: createButton('-', 'decrement-button', decrementCounter),
    reset: createButton('Reset', 'reset-button', resetCounter),
    start: document.querySelector('.start'),
    stop: document.querySelector('.stop'),
  };

  appendButtonsToContainer([buttons.increment, buttons.decrement, buttons.reset], document.querySelector('.counter-buttons'));

  buttons.start.addEventListener('click', () => {
    if (!counter.paused) {
      toggleGame(true);
    }
  });
  
  buttons.stop.addEventListener('click', () => {
    if (counter.paused) {
      toggleGame(false);
    }
  });

  function createButton(text, className, clickHandler) {
    const button = document.createElement('button');
    button.classList.add(className);
    button.textContent = text;
    button.addEventListener('click', clickHandler);
    return button;
  }

  function appendButtonsToContainer(buttons, container) {
    buttons.forEach(button => container.appendChild(button));
  }

  function createAudio(id) {
    const audioElement = document.getElementById(id);
    return {
      play: () => {
        audioElement.currentTime = 0;
        audioElement.play();
      },
      stop: () => {
        audioElement.pause();
        audioElement.currentTime = 0;
      },
      setLoop: (loop) => {
        audioElement.loop = loop;
      },
    };
  }

  function toggleGame(pause) {
    if (pause) {
      audio.soundtrack.setLoop(true); 
      audio.soundtrack.play();
    } else {
      audio.soundtrack.setLoop(false);
      audio.soundtrack.stop();
    }
    counter.paused = pause;
    updateCounterDisplay();
  }

  function incrementCounter() {
    counter.value++;
    audio.increment.play();
    updateCounterDisplay();
  }

  function decrementCounter() {
    counter.value--;
    audio.decrement.play();
    updateCounterDisplay();
  }

  function resetCounter() {
    counter.value = 0;
    audio.reset.play();
    updateCounterDisplay();
  }

  function updateCounterDisplay() {
    counter.text.textContent = counter.paused ? counter.value : '';
    const context = counter.display.getContext('2d');
    context.clearRect(0, 0, counter.display.width, counter.display.height);
    context.font = '70px New Super Mario Font U';

    if (!counter.paused) {
      const text = counter.value.toString();
      const textWidth = context.measureText(text).width;
      const x = (counter.display.width - textWidth) / 2;
      const y = (counter.display.height + 30) / 2;
      context.fillText(text, x, y);
      counter.display.style.display = 'block';
      document.getElementById('gifImage').style.display = 'none';
    } else {
      counter.display.style.display = 'none';
      document.getElementById('gifImage').style.display = 'block';
    }
  }
});