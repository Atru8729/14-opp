/*
const Dog = require('./js/Dog');
const Cat = require('./js/Cat');
const Rabbit = require('./js/Rabbit');

const rexas = new Dog('Rex', 'brown');
rexas.voice();

const rainis = new Cat('Rainis', 'golden');
rainis.voice();

const benas = new Rabbit('Benas', 'black');
benas.voice();
*/

const Volvo = require('./js/masinos/Volvo');

const pilkasVolvo = new Volvo('Volvo', 'Left', 5, 4);

console.log(pilkasVolvo);
pilkasVolvo.turnOnTheEngine();