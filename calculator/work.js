let equal = document.querySelector(".equal");
let ans = document.querySelector("#display");
let square = document.querySelector("#square");

equal.addEventListener("click", () => {
  if (ans.value != 0) {
    ans.value = eval(ans.value);
  }
});

square.addEventListener("click", () => {
  if (ans.value != 0) {
    ans.value = Math.pow(ans.value, 2);
  }
});

document.querySelector("#cube").addEventListener("click", () => {
  if (ans.value != 0) {
    ans.value = Math.pow(ans.value, 3);
  }
});

document.querySelector("#sqrt").addEventListener("click", () => {
  if (ans.value != 0) {
    ans.value = Math.sqrt(ans.value);
  }
});

document.querySelector("#sin").addEventListener("click", () => {
  if (ans.value != 0) {
    ans.value = Math.sin(ans.value);
  }
});

document.querySelector("#cos").addEventListener("click", () => {
  if (ans.value != 0) {
    ans.value = Math.cos(ans.value);
  }
});

document.querySelector("#tan").addEventListener("click", () => {
  if (ans.value != 0) {
    ans.value = Math.tan(angleInRadians);
  }
});

document.querySelector("#log").addEventListener("click", () => {
  if (ans.value != 0) {
    ans.value = Math.log(ans.value) / Math.log(10);
  }
});
