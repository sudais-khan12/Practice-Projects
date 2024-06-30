let boxes = document.querySelectorAll(".box");

let checkBox = () => {
  const trigger = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxtop = box.getBoundingClientRect().top;

    if (boxtop < trigger) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
};

window.addEventListener("scroll", checkBox);
checkBox();
