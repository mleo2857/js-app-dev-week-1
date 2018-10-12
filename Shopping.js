const shoppingArr = ['pop tarts','ramen noodles', 'chips',
'salsa','coffee'];

shoppingArr.push('fruit loops');
shoppingArr.splice(4,1,'fair trade coffee');
shoppingArr.splice(2,2,'rice','beans');



const shoppingCartArr = [];
shoppingCartArr[0] = shoppingArr.pop();
shoppingCartArr.push(shoppingArr.shift());


while (shoppingArr.length > 0){
  shoppingCartArr.push(shoppingArr.pop());
}

console.log(shoppingArr);
console.log(shoppingCartArr);

const sortedCartArr = shoppingCartArr.sort().reverse();
console.log(sortedCartArr);

cartStr = sortedCartArr.join(', ');
console.log(cartStr);
