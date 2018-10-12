let temp = 50;
let precipitation = '';
let indoors = true;

console.log('The temperature is ' + temp + ' degrees');

if (temp > 80 && !precipitation){
  console.log('time to swim');
} else if (indoors){
  console.log('time to swim indoors');
}
