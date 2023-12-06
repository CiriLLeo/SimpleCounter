document.addEventListener('DOMContentLoaded', function () {
  // Ottengo riferimenti agli elementi HTML
  const counterText = document.getElementById('counterText');
  const counterDisplay = document.getElementById('mainCanvas');
  const gifImage = document.getElementById('gifImage');
  const audioIncrement = document.getElementById('audioIncrement');
  const audioDecrement = document.getElementById('audioDecrement');
  const audioReset = document.getElementById('audioReset');
  const counterButtons = document.querySelector('.counter-buttons');
  const startButton = document.querySelector('.start');
  const stopButton = document.querySelector('.stop');

  // Creo i bottoni
  const incrementButton = document.createElement('button');
  const decrementButton = document.createElement('button');
  const resetButton = document.createElement('button');

  // Aggiungo una classe
  resetButton.classList.add('reset-button');
  incrementButton.classList.add('increment-button');
  decrementButton.classList.add('decrement-button');

  // Imposto il testo e gli stili dei bottoni
  incrementButton.textContent = '+';
  decrementButton.textContent = '-';
  resetButton.textContent = 'Reset';

  // Aggiungo gli eventi ai bottoni
  incrementButton.addEventListener('click', function () {
    incrementCounter();
    audioIncrement.currentTime = 0;
    audioIncrement.play();
  });

  decrementButton.addEventListener('click', function () {
    decrementCounter();
    audioDecrement.currentTime = 0;
    audioDecrement.play();
  });

  resetButton.addEventListener('click', function () {
    resetCounter();
    audioReset.currentTime = 0;
    audioReset.play();
  });

  startButton.addEventListener('click', startGame);
  stopButton.addEventListener('click', stopGame);

  // Aggiungo i bottoni al container desiderato
  counterButtons.appendChild(incrementButton);
  counterButtons.appendChild(decrementButton);
  counterButtons.appendChild(resetButton);

  // Inizializzo il contatore
  let counterValue = 0;
  let gamePaused = false;

  // Funzioni del counter
  function incrementCounter() {
    counterValue++;
    updateCounterDisplay();
  }

  function decrementCounter() {
    counterValue--;
    updateCounterDisplay();
  }

  function resetCounter() {
    counterValue = 0;
    updateCounterDisplay();
  }

  //Funzione per far partire e fermare il gioco
  function startGame() {
    const soundTrack = document.getElementById('soundTrack');
    soundTrack.play();

    gamePaused = true;
    updateCounterDisplay();
  }

  function stopGame() {
    const soundTrack = document.getElementById('soundTrack');
    soundTrack.pause();
    soundTrack.currentTime = 0;

    gamePaused = false;
    updateCounterDisplay();
  }

  // Funzione per aggiornare la visualizzazione del contatore nel canvas
  function updateCounterDisplay() {
    counterText.textContent = gamePaused ? counterValue : '';

    const context = counterDisplay.getContext('2d');
    context.clearRect(0, 0, counterDisplay.width, counterDisplay.height);
    context.font = '70px New Super Mario Font U';

    if (!gamePaused) {
      const text = counterValue.toString();
      const textWidth = context.measureText(text).width;
      const x = (counterDisplay.width - textWidth) / 2;
      const y = (counterDisplay.height + 30) / 2;
      context.fillText(text, x, y);
      counterDisplay.style.display = 'block';
      gifImage.style.display = 'none';
    } else {
      counterDisplay.style.display = 'none';
      gifImage.style.display = 'block';
    }
  }
});