let i = 0;
let j = 5;
let btnPre = document.querySelector(".pre");
let btnNext = document.querySelector(".next");
const dots = document.querySelectorAll(".dots button");
let images = document.querySelectorAll(".image img");

let next = () => {
  document.querySelector("#content" + (i + 1)).classList.remove("active");
  i = (j + i + 1) % j;
  document.querySelector("#content" + (i + 1)).classList.add("active");
  indicator(i + 1);
};

let pre = () => {
  document.querySelector("#content" + (i + 1)).classList.remove("active");
  i = (j + i - 1) % j;
  document.querySelector("#content" + (i + 1)).classList.add("active");
  indicator(i + 1);
};

let indicator = (num) => {
  dots.forEach((dot) => {
    dot.style.backgroundColor = "transparent";
  });
  document.querySelector(
    ".dots button:nth-child(" + num + " )"
  ).style.backgroundColor = "#8052ec";
};

let dot = (index) => {
  images.forEach((image) => {
    image.classList.remove("active");
  });
  document.querySelector("#content" + index).classList.add("active");
  i = index - 1;
  indicator(index);
};

btnNext.addEventListener("click", () => {
  next();
});

btnPre.addEventListener("click", () => {
  pre();
});
