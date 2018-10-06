let plr_one = 'Mike';
let plr_two = 'Joe';
let plr_one_wins = 0;
let plr_two_wins = 0;

var weapons = ['rock' , 'paper', 'scissors'];

while (true){
  let plr_one_throw = weapons[parseInt(Math.random()*weapons.length) %3];
  let plr_two_throw = weapons[parseInt(Math.random()*weapons.length) %3];
  console.log(plr_one + ' throws ' + plr_one_throw);
  console.log(plr_two + ' throws ' + plr_two_throw);

  switch (plr_one_throw){
    case ('rock'):
      if (plr_two_throw == 'paper'){
        console.log(plr_two + ' wins');
        plr_two_wins += 1;
      } else if (plr_two_throw == 'scissors'){
        console.log(plr_one + ' wins');
        plr_one_wins += 1;
      } else {
        console.log('draw');
      }
      break;
    case ('paper'):
      if (plr_two_throw == 'scissors'){
        console.log(plr_two + ' wins');
        plr_two_wins += 1;
      } else if (plr_two_throw == 'rock'){
        console.log(plr_one + ' wins');
        plr_one_wins += 1;
      } else {
        console.log('draw');
      }
      break;
    case ('scissors'):
      if (plr_two_throw == 'rock'){
        console.log(plr_two + ' wins');
        plr_two_wins += 1;
      } else if (plr_two_throw == 'paper'){
        console.log(plr_one + ' wins');
        plr_one_wins += 1;
      } else {
        console.log('draw');
      }
      break;
  }

  if (plr_one_wins == 3){
    console.log(plr_one + ' has won the game');
    break;
  } else if (plr_two_wins == 3){
    console.log(plr_two + ' has won the game');
    break;
  } else {
    continue;
  }

}
