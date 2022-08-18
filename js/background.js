const images = ["0.jpg", "1.jpg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

document.body.style.backgroundImage = `url('img/${chosenImage}')`;

/*As learn
const bgImage = document.createElement("img");
bgImage.src=`img/${chosenImage}`;
document.body.appendChild(bgImage);
*/

/*
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.height = "100vh";
document.body.style.backgroundSize = "cover";
*/