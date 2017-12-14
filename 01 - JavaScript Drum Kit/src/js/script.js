'use strict'

//sets the current time of the audio file to 0 and plays the audio based upon what key/keycode is pressed. 
//then adds the class 'playing' to the appropriate key
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"`)
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

//removes the 'playing' class when the transition ends
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

//selects all keys
const keys = document.querySelectorAll('.key');

//adds the 'transitionend' (Transition End) event listener to every key
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

//listens for any keydown, and then plays a sound
window.addEventListener('keydown', playSound);
