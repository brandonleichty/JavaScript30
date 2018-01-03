const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Chrome dev tools -- "break on attribute modification"

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string!', '💩');

// Styled
// console.log('%c I am some great text', 'font-size:50px; background:red;');

// warning!
console.warn('OH NOOOOOOO 💩');

// Error :|
console.error('Shit!');

// Info
console.info('Crocodiles eat 3-4 people per year!');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing
console.clear(); //clears console 

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} in dog years`);
    console.groupEnd(`${dog.name}`);

})

// counting

console.count('Brandon');
console.count('Brandon');
console.count('Brandon');
console.count('Steve');
console.count('Brandon');
console.count('Steve');
console.count('Steve');
console.count('Brandon');
console.count('Brandon');
console.count('Brandon');
console.count('Brandon');
console.count('Brandon');


// timing
console.time('fetching data');
fetch('https://api.github.com/users/brandonleichty')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

// tables
    console.table(dogs);