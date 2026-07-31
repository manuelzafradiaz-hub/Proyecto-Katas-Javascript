const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xavier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function nameFinder(nameList, nameToFind) {
  // Completar
  for (let i = 0; i < nameList.length; i++) {
    if (nameList[i] === nameToFind) {
      return { found: true, position: i };
    }
  }
  return { found: false, position: -1 };
}

console.log(nameFinder(names, "Marc"));