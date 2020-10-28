"use strict!";

const EditProfile = document.querySelector(".ProfileCard__ProfileEdit");
const EditButton = document.querySelector(".EditModal__EditButton");
const Modal = document.querySelector(".MyPage__EditModal");
const DarkBg = document.querySelector(".Dark__BackGround");

EditProfile.addEventListener("click", function () {
  if (Modal.style.opacity > 0) return;
  fadeIn(DarkBg.style, 0.3);
  fadeIn(Modal.style, 0.9);
});

EditButton.addEventListener("click", function (event) {
  event.preventDefault();
  Modal.style.display = "none";
  Modal.style.opacity = "0";
  fadeOut(DarkBg.style);
});

function fadeIn(style, max) {
  let op = 0;
  style.display = "block";
  style.opacity = op;

  const timer = setInterval(() => {
    op += 0.1;
    style.opacity = op;
    op > max && clearInterval(timer);
  }, 20);
}

function fadeOut(style) {
  let op = style.opacity;
  const timer = setInterval(() => {
    op -= 0.1;
    style.opacity = op;
    if (op < 0.1) {
      clearInterval(timer);
      style.display = "none";
    }
  }, 20);
}
