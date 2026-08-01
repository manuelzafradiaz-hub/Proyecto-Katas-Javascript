const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];

function repeatCounter(list) {
  // Completar
  const result= {} ;
  for (let i = 0; i < list.length; i++) {
    let count = 0;
    for (let j = 0; j < list.length; j++) {
      if (list[i] === list[j]) {
        count++;
        }
      }   
      result[list[i]] = count;
    }
   return result;
}
console.log(repeatCounter(words));  