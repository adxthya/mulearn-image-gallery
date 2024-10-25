const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */
const images = [
  "images/pic1.jpg",
  "images/pic2.jpg",
  "images/pic3.jpg",
  "images/pic4.jpg",
  "images/pic5.jpg",
];

/* Declaring the alternative text for each image file */

const alts = [
  "Closeup of a human eye",
  "Abstract Drawing",
  "Flowers",
  "Ancient Drawing",
  "Butterfly",
];

/* Looping through images */
images.map((image, index) => {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", image);
  newImage.setAttribute("alt", alts[index]);
  newImage.addEventListener("click", () => {
    console.log(image);
    displayedImage.setAttribute("src", image);
    displayedImage.setAttribute("alt", alts[index]);
  });
  thumbBar.appendChild(newImage);
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
  const mode = btn.getAttribute("class");
  if (mode == "dark") {
    btn.setAttribute("class", "light");
    btn.innerText = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    return;
  }
  btn.setAttribute("class", "dark");
  btn.innerText = "Darken";
  overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
});
