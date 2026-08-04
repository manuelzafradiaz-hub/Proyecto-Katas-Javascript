//1.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul = document.createElement('ul');
countries.forEach((country) => {
  const li = document.createElement('li');
  li.textContent = country;
  ul.appendChild(li);
});
document.body.appendChild(ul);

//1.2
const paragraph = document.querySelector('.fn-remove-me');
paragraph.remove();

//1.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const div = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement('ul');
cars.forEach((car) => {
  const li = document.createElement('li');
  li.textContent = car;
  ulCars.appendChild(li);
});
div.appendChild(ulCars);

//1.4
const countries2 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

countries2.forEach((country) => {
const div = document.createElement('div');
const h4 = document.createElement('h4');
h4.textContent = country.title;
const img = document.createElement('img');
img.src = country.imgUrl;
div.appendChild(h4);
div.appendChild(img);
document.body.appendChild(div);
});

//1.5
const button = document.createElement('button');
button.textContent = 'Eliminar último';
button.addEventListener('click', () => {
const divs = document.querySelectorAll('body > div');
if (divs.length > 0) {
    divs[divs.length - 1].remove();
  }
});
document.body.appendChild(button);

//1.6
countries2.forEach((country) => {
const div = document.createElement('div');
const h4 = document.createElement('h4');
h4.textContent = country.title;
const img = document.createElement('img');
img.src = country.imgUrl;
const button = document.createElement('button');
button.textContent = 'Eliminar';
button.addEventListener('click', () => {
    div.remove();
});
div.appendChild(h4);
div.appendChild(img);
div.appendChild(button);
document.body.appendChild(div);
});