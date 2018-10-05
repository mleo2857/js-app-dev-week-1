// const myHobbies = ['coding','hanging out with friends','hiking','cooking',
//  'listening to podcasts'];
//
// console.log(myHobbies[0]);
// console.log(myHobbies[4]);
// console.log(myHobbies[2]);
//
// console.log(myHobbies.length);
//
// myHobbies.push('bike riding');
//
// console.log(myHobbies);
//
// const lastHobby = myHobbies.pop();
//
// console.log(lastHobby);
//
// console.log(myHobbies);
//
// const firstHobby = myHobbies.unshift('new hobby');
//
// console.log(firstHobby);
// console.log(myHobbies);
//
// console.log(myHobbies.shift());

//

const myArr = ['cat','dog','mouse'];

myArr[10] = 'bird';

console.log(myArr);

const numArr = [1,2,3,4,5];

const slicedArr = numArr.slice(0,3);
console.log(slicedArr);
console.log(numArr);

numArr.splice(0,2,'a','b','c');
console.log(numArr);

const animalArr = ['dogs','cats','mice','moose'];

animalArr.forEach(function(item, index){
  console.log(item + ' is index ' + index);
})

console.log(animalArr);

console.log(animalArr.join(' '));
console.log(animalArr.sort());
console.log([99,3,45,72,8].sort());
