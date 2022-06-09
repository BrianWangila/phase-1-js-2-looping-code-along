// Code your solutions in this file

for (let age = 30; age < 50; age+=5){
  console.log(age)
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
  for (let i = 0; i < gifts.length; i++){
    console.log(`Wrapped ${gifts[i]} and added a bowl`);
  }
  return gifts;
}



//while loop


const gifts2 = ["teddy bear", "drone", "doll"]

function wrapGifts2(gifts2) {
  let i = 0;
  while (i < gifts2.length){
    console.log(`Wrapped ${gifts2[i]} and added a bowl`);
    i++;
  }
  return gifts2;
}



function writeCards(array, eventName){
  let newArray = []

  for (let card = 0; card < array.length; card++) {
    let message = `Thank you, ${array[card]}, for the wonderful ${eventName} gift!`
    newArray.push(message);
  }
  console.log(newArray)
  return newArray

}

//test while loop

function countDown (integer){
  let i = 10;
  while (i >= 0) {
    console.log(i);
    i--;
  }
}
