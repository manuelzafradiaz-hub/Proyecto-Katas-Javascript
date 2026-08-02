function findArrayIndex(array, text) {
}
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];
function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i; 
    }
  }
}
function removeItem(array, text) {
  const index = findArrayIndex(array, text);
    if (index !== undefined) { 
      array.splice(index, 1);
    }
    return array;
}
console.log(removeItem(mainCharacters, "Rey"));