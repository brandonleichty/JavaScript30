'use strict';

const inputs = document.querySelectorAll('.controls input');

//logs the value passed to function
function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

//calls 'handleUpdate' function when any change is made to input value
inputs.forEach(input => input.addEventListener('change', handleUpdate));

//calls 'handleUpdate' function when any change is made to mousemove value
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


