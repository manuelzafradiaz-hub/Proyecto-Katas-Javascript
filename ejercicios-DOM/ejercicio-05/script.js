const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const container = document.createElement("div");
container.classList.add("container");
const title = document.createElement("h1");
title.textContent = "Mis Álbumes Favoritos";
const ul = document.createElement("ul");
albums.forEach((album) => {
  const li = document.createElement("li");
  li.textContent = album;
  ul.appendChild(li);
});
container.appendChild(title);
container.appendChild(ul);
document.body.appendChild(container);