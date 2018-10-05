for (let i = 1; i <= 100; i++){
  console.log(i);
  if (i % 3 != 0){
    continue;
  }
  console.log('is divisible by 3');
}
