function rollDice(numFaces) {
  return Math.floor(Math.random() * numFaces) + 1; 
}
console.log(rollDice(6));