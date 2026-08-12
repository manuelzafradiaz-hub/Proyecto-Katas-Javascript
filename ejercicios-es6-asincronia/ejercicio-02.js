//2.1
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsListCopy = [...pointsList];
console.log(pointsListCopy);

//2.2
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyListCopy = {...toy};
console.log(toyListCopy);

//2.3
const points_List = [32, 54, 21, 64, 75, 43];
const points_List2 = [54, 87, 99, 65, 32];
const newPointsList = [...points_List, ...points_List2];
console.log(newPointsList);

//2.4
const toy2 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};
const toyUpdateCopy = {...toy2, ...toyUpdate};
console.log(toyUpdateCopy);

//2.5
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const copyColors = [...colors.slice(0 ,2 ),...colors.slice(3)];
console.log(copyColors);