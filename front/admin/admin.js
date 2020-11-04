"use strict!";

const ProfileTabLink = document.querySelector(".tablink_1");
const PasswordTabLink = document.querySelector(".tablink_2");
const Tabs = document.querySelectorAll(".tabs");

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
