"use strict!";

const NewUserInfoBtn = document.querySelectorAll(".NewUser__InfoButton");
const CurUserInfoBtn = document.querySelectorAll(".CurUser__InfoButton");
const CloseButton = document.querySelector(".InfoModal__CloseButton");
const ProfileTabLink = document.querySelector(".tablink_1");
const PasswordTabLink = document.querySelector(".tablink_2");
const Tabs = document.querySelectorAll(".tabs");
const Modal = document.querySelector(".InfoModal__Container");
const DarkBg = document.querySelector(".Dark__BackGround");
const AccessButton = document.querySelector(".Access");
const DenyButton = document.querySelector(".Deny");

CloseButton.addEventListener("click", closeModal);
AccessButton.addEventListener("click", closeModal);
DenyButton.addEventListener("click", closeModal);
for (let i = 0; i < NewUserInfoBtn.length; i++) {
  NewUserInfoBtn[i].addEventListener("click", openModal);
}
for (let i = 0; i < CurUserInfoBtn.length; i++) {
  CurUserInfoBtn[i].addEventListener("click", openModal);
}

function toggleTab(event, num) {
  event.preventDefault();
  for (let i = 0; i < Tabs.length; i++) Tabs[i].style.display = "none";
  let tabLink1 = document.querySelector(`.tablink_1`);
  let tabLink2 = document.querySelector(`.tablink_2`);
  let tab = document.querySelector(`.tab_${num}`);
  let searchBar = document.querySelector(".CurUser__SearchBar");
  tab.style.display = "block";
  if (num == 1) {
    tabLink1.style.color = "black";
    tabLink2.style.color = "grey";
    searchBar.style.visibility = "hidden";
  } else {
    tabLink1.style.color = "grey";
    tabLink2.style.color = "black";
    searchBar.style.visibility = "visible";
  }
}

function openModal() {
  if (Modal.style.opacity > 0) return;
  fadeIn(DarkBg.style, 0.3);
  fadeIn(Modal.style, 0.9);
}

function closeModal(event) {
  event.preventDefault();
  Modal.style.display = "none";
  Modal.style.opacity = "0";
  fadeOut(DarkBg.style);
}

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
