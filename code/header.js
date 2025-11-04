// import {donateButtonText} from "readconstants.js";

// HTML
document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');

    // --- 1. Menü ikon div ---
    //   <div>
    //         <i id="menuicon" class="fa fa-bars" onclick="operateSideBar()"></i>
    //   </div>
    //
  const menuDiv = document.createElement('div');
  const icon = document.createElement('i');
  icon.id = 'menuicon';
  icon.className = 'fa fa-bars';
  icon.onclick = operateSideBar;
  menuDiv.appendChild(icon);

    // --- 2. Logó div ---
    //   <div id="headerlogodiv">
    //        <a href="./index.html"><img id="headerlogo" class="logo" src="images/logowithtext.jpg"></a>
    //   </div>
    //
  const logoDiv = document.createElement('div');
  logoDiv.id = 'headerlogodiv';
  const a = document.createElement('a');
  a.href = './index.html';
  const img = document.createElement('img');
  img.id = 'headerlogo';
  img.className = 'logo';
  img.src = './images/logowithtext.jpg';
  a.appendChild(img);
  logoDiv.appendChild(a);

    // --- 3. Támogatás gomb div ---
    //   <div id="hideifsmall">
    //         <button class="donatebtn">Támogasson minket!</button>
    //   </div>
    //
  const donateDiv = document.createElement('div');
  donateDiv.id = 'hideifsmall';
  const button = document.createElement('button');
  button.className = 'donatebtn';
  button.textContent = 'Támogasson minket!'; //TODO
  donateDiv.appendChild(button);

  // --- Hozzáadás a headerhez ---
  header.appendChild(menuDiv);
  header.appendChild(logoDiv);
  header.appendChild(donateDiv);
});

// logika
let sideBarOpen = false;

function operateSideBar() {
    if(sideBarOpen) {
        closeSidebar();
    }
    else {
        openSidebar();
    }
}

function openSidebar() {
    let menuIcon = document.querySelector("#menuicon");
    menuIcon.classList.remove("close");
    menuIcon.classList.add("open");
    let sideBar = document.querySelector("#sidebar");
    sideBar.classList.remove("closed");
    sideBar.classList.add("opened");
    sideBarOpen = true;
}

function closeSidebar() {
    let menuIcon = document.querySelector("#menuicon");
    menuIcon.classList.remove("open");
    menuIcon.classList.add("close");
    let sideBar = document.querySelector("#sidebar");
     sideBar.classList.remove("opened");
    sideBar.classList.add("closed");
    sideBarOpen = false;
}