// Code your solutions in this file
const cards = ["teddy", "dron", "dolly"];

function writeCards(cards) {
  const messages = [];
  for (let i = 0; i < cards.length; i++) {
    messages.push(`Thank you, ${cards[i]} for the wonderful surprise gift!`);
  }
  return messages;
}

console.log(writeCards());

const n = 11;
function countDown(n) {
  let i = n;
  while (i >= 0) {
    console.log(i);
    i--;
  }
}

console.log(countDown(n));